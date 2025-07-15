import axios from 'axios';
import * as cheerio from 'cheerio';
import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Crawler {
  constructor(concurrency = 5, outputFile = 'crawl_results.json') {
    this.concurrency = concurrency;
    this.visited = new Map();       // 记录已访问URL及其层级
    this.queued = new Set();        // 已加入队列的URL（避免重复入队）
    this.queue = [];                // 待爬取队列（元素格式：{ url: string, level: number }）
    this.baseDomain = null;
    this.running = 0;
    this.outputFile = path.join(__dirname, outputFile);
    this.results = {
      start_time: new Date().toISOString(),
      total_urls: 0,
      level_stats: {},
      urls: []
    };
  }

  // 启动爬虫
  async start(startUrl) {
    this.baseDomain = new URL(startUrl).hostname;
    this.addToQueue(startUrl, 0);  // 起始URL层级为0

    while (this.queue.length > 0 || this.running > 0) {
      if (this.running < this.concurrency && this.queue.length > 0) {
        const { url, level } = this.queue.shift();
        this.queued.delete(url);
        this.running++;

        this.crawl(url, level)
          .catch(error => {
            console.error(`[层级 ${level}] Error crawling ${url}:`, error.message);
            // 记录错误但不保存到JSON（只保留成功的URL）
          })
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

    // 保存结果到JSON文件
    this.saveResults();
    
    console.log(`\nCrawling completed. Results saved to ${this.outputFile}`);
    console.log('层级分布：');
    Object.entries(this.results.level_stats).forEach(([level, count]) => {
      console.log(`层级 ${level}: ${count} 个URL`);
    });
  }

  // 入队方法
  addToQueue(url, level) {
    if (!this.visited.has(url) && !this.queued.has(url)) {
      this.queued.add(url);
      this.queue.push({ url, level });
    }
  }

  // 爬取单个URL
  async crawl(url, currentLevel) {
    try {
      const response = await axios.get(url, { timeout: 10000 });
      if (response.status !== 200) {
        console.log(`[层级 ${currentLevel}] Skipped ${url} (Status: ${response.status})`);
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
    }
  }

  shouldCrawl(url) {
    return new URL(url).hostname === this.baseDomain;
  }

  saveResults() {
    // 构建简化的结果对象（只包含URL和层级）
    const simplifiedResults = {
      start_time: this.results.start_time,
      end_time: this.results.end_time,
      total_urls: this.results.total_urls,
      level_stats: this.results.level_stats,
      urls: Array.from(this.visited.entries()).map(([url, level]) => ({
        url,
        level
      }))
    };
    
    try {
      fs.writeFileSync(this.outputFile, JSON.stringify(simplifiedResults, null, 2));
    } catch (err) {
      console.error('Failed to save results:', err.message);
    }
  }
}

// 使用示例
const crawler = new Crawler(5, 'crawl_results.json');
crawler.start('https://www.anker.com/');  // 替换为目标入口URL    