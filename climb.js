import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx'; // 处理Excel的库

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Crawler {
  constructor(concurrency = 5, outputDir = 'crawl_results', maxDepth = Infinity) {
    this.concurrency = concurrency;
    this.visited = new Map();       // 记录已访问URL及其层级
    this.queued = new Set();        // 已加入队列的URL（避免重复入队）
    this.queue = [];                // 待爬取队列（元素格式：{ url: string, level: number }）
    this.baseDomain = null;
    this.running = 0;
    this.outputDir = path.join(__dirname, outputDir); // 输出目录
    this.results = {
      start_time: new Date().toISOString(),
      total_urls: 0,
      level_stats: {},
      urls: []
    };
    this.maxDepth = maxDepth;       // 最大爬取深度
    this.retryQueue = [];           // 失败重试队列
    this.maxRetries = 3;            // 最大重试次数
    this.robotsTxt = null;          // robots.txt内容
    this.userAgent = 'Mozilla/5.0 (compatible; MyCrawler/1.0)'; // 用户代理
    this.axiosInstance = axios.create({
      timeout: 10000,
      headers: { 'User-Agent': this.userAgent }
    });
  }

  // 启动爬虫
  async start(startUrl) {
    try {
      // 创建输出目录
      await fs.mkdir(this.outputDir, { recursive: true });

      // 获取并解析robots.txt
      await this.fetchAndParseRobotsTxt(startUrl);

      this.baseDomain = new URL(startUrl).hostname;
      this.addToQueue(startUrl, 0);  // 起始URL层级为0

      while (this.queue.length > 0 || this.running > 0 || this.retryQueue.length > 0) {
        // 处理重试队列
        if (this.retryQueue.length > 0 && this.running < this.concurrency) {
          const { url, level, retries } = this.retryQueue.shift();
          this.running++;
          this.crawl(url, level, retries)
            .catch(error => console.error(`[重试 ${retries}/${this.maxRetries}] ${url}:`, error.message))
            .finally(() => this.running--);
          continue;
        }

        // 处理正常队列
        if (this.running < this.concurrency && this.queue.length > 0) {
          const { url, level } = this.queue.shift();
          this.queued.delete(url);
          this.running++;

          this.crawl(url, level)
            .catch(error => console.error(`[层级 ${level}] Error crawling ${url}:`, error.message))
            .finally(() => this.running--);
        } else {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      this.results.end_time = new Date().toISOString();
      this.results.total_urls = this.visited.size;

      // 统计各层级的URL数量
      this.visited.forEach((level, url) => {
        this.results.level_stats[level] = (this.results.level_stats[level] || 0) + 1;
      });

      // 保存结果到JSON和Excel文件
      await Promise.all([
        this.saveResultsAsJson(),
        this.saveResultsAsExcel()
      ]);

      console.log(`\nCrawling completed. Results saved to ${this.outputDir}`);
      console.log('层级分布：');
      Object.entries(this.results.level_stats).forEach(([level, count]) => {
        console.log(`层级 ${level}: ${count} 个URL`);
      });
    } catch (error) {
      console.error('Fatal error during crawling:', error);
    }
  }

  // 获取并解析robots.txt
  async fetchAndParseRobotsTxt(startUrl) {
    try {
      const baseUrl = new URL(startUrl);
      const robotsUrl = `${baseUrl.protocol}//${baseUrl.hostname}/robots.txt`;
      const response = await this.axiosInstance.get(robotsUrl);
      this.robotsTxt = response.data;
      console.log('Successfully fetched robots.txt');
    } catch (error) {
      console.log('Failed to fetch robots.txt, proceeding without restrictions');
      this.robotsTxt = '';
    }
  }

  // 入队方法
  addToQueue(url, level) {
    if (!this.visited.has(url) && !this.queued.has(url) && level <= this.maxDepth) {
      // 检查robots.txt规则
      if (this.robotsTxt && !this.isUrlAllowed(url)) {
        console.log(`[层级 ${level}] Skipped by robots.txt: ${url}`);
        return;
      }

      this.queued.add(url);
      this.queue.push({ url, level });
    }
  }

  // 检查URL是否允许爬取
  isUrlAllowed(url) {
    try {
      const parsedUrl = new URL(url);
      const path = parsedUrl.pathname;

      // 简单的robots.txt解析
      const disallowRules = this.robotsTxt
        .split('\n')
        .filter(line => line.trim().startsWith('Disallow:'))
        .map(line => line.split(':')[1].trim())
        .filter(rule => rule !== '');

      return !disallowRules.some(rule => {
        if (rule === '/') return false; // 允许根路径
        if (rule.endsWith('/')) return path.startsWith(rule);
        return path === rule;
      });
    } catch (error) {
      console.error('Error checking robots.txt:', error);
      return true; // 如果解析出错，默认允许爬取
    }
  }

  // 爬取单个URL
  async crawl(url, currentLevel, retries = 0) {
    try {
      const response = await this.axiosInstance.get(url);
      if (response.status !== 200) {
        console.log(`[层级 ${currentLevel}] Skipped ${url} (Status: ${response.status})`);

        // 处理可重试的HTTP错误
        if ([429, 500, 502, 503, 504].includes(response.status) && retries < this.maxRetries) {
          this.retryQueue.push({ url, level: currentLevel, retries: retries + 1 });
          console.log(`[层级 ${currentLevel}] Added ${url} to retry queue (${retries + 1}/${this.maxRetries})`);
        }

        return;
      }

      this.visited.set(url, currentLevel);  // 记录URL及其层级
      console.log(`[层级 ${currentLevel}] Crawled: ${url}`);

      const $ = cheerio.load(response.data);
      const links = $('a').map((i, el) => $(el).attr('href')).get();
      const baseUrl = new URL(url).origin;

      links.forEach(link => {
        try {
          const parsedUrl = new URL(link, baseUrl);
          parsedUrl.hash = '';
          const absoluteUrl = parsedUrl.href;

          if (this.shouldCrawl(absoluteUrl)) {
            this.addToQueue(absoluteUrl, currentLevel + 1);
          }
        } catch (e) {
          // 忽略无效URL
        }
      });
    } catch (error) {
      console.error(`[层级 ${currentLevel}] Failed to crawl ${url}:`, error.message);

      // 处理网络错误重试
      if (retries < this.maxRetries) {
        this.retryQueue.push({ url, level: currentLevel, retries: retries + 1 });
        console.log(`[层级 ${currentLevel}] Added ${url} to retry queue (${retries + 1}/${this.maxRetries})`);
      }
    }
  }

  shouldCrawl(url) {
    try {
      return new URL(url).hostname === this.baseDomain;
    } catch (e) {
      return false;
    }
  }

  // 保存结果为JSON
  async saveResultsAsJson() {
    const filePath = path.join(this.outputDir, 'results.json');
    const simplifiedResults = {
      entry_url: this.entryUrl, // 添加入口URL字段
      start_time: this.results.start_time,
      end_time: this.results.end_time,
      total_urls: this.results.total_urls,
      level_stats: this.results.level_stats,
      urls: Array.from(this.visited.entries()).map(([url, level]) => ({
        url,
        level,
        status: 'success'
      }))
    };

    try {
      await fs.writeFile(filePath, JSON.stringify(simplifiedResults, null, 2));
      console.log(`Results saved as JSON: ${filePath}`);
    } catch (err) {
      console.error('Failed to save JSON results:', err.message);
    }
  }

  // 保存结果为Excel
  async saveResultsAsExcel() {
    const filePath = path.join(this.outputDir, 'results.xlsx');
    const urlsArray = Array.from(this.visited.entries())
      .map(([url, level]) => ({ URL: url, 层级: level }));

    // 创建工作表
    const wsUrls = XLSX.utils.json_to_sheet(urlsArray);

    // 创建层级统计数据
    const levelStatsArray = Object.entries(this.results.level_stats)
      .map(([level, count]) => ({ 层级: level, URL数量: count }));
    const wsStats = XLSX.utils.json_to_sheet(levelStatsArray);

    // 创建工作簿并添加工作表
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, wsUrls, 'URL列表');
    XLSX.utils.book_append_sheet(wb, wsStats, '层级统计');

    // 设置列宽
    wsUrls['!cols'] = [{ wch: 80 }, { wch: 8 }];
    wsStats['!cols'] = [{ wch: 8 }, { wch: 12 }];

    try {
      XLSX.writeFile(wb, filePath);
      console.log(`Results saved as Excel: ${filePath}`);
    } catch (err) {
      console.error('Failed to save Excel results:', err.message);
    }
  }
}

// 使用示例
const crawler = new Crawler(
  5,                    // 并发请求数
  'crawl_results',      // 输出目录
  1                     // 最大爬取深度（可选）
);
crawler.start('https://www.runoob.com/git/git-tutorial.html');  // 替换为目标入口URL    