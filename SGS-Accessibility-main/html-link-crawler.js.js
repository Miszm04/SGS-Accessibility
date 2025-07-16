import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

// 用于获取当前模块的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function logMemoryUsage() {
    const memory = process.memoryUsage();
    const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);
    console.log(`内存使用：堆总${mb(memory.heapTotal)}MB | 已用${mb(memory.heapUsed)}MB`);
}

async function crawlHtmlFile(filePath) {
    try {
        // 读取HTML文件内容
        const htmlContent = fs.readFileSync(filePath, 'utf8');
        const $ = cheerio.load(htmlContent);

        // 基础URL，用于将相对路径转换为绝对路径
        const baseUrl = `file://${path.resolve(filePath)}`;

        // 提取并过滤a标签
        const aTags = $('a[href]').map((i, el) => {
            const $el = $(el);
            try {
                // 尝试构建绝对URL
                const absoluteUrl = new URL($el.attr('href'), baseUrl).href;
                // 过滤非HTTP链接和带#的链接
                if (!absoluteUrl.startsWith('http') || absoluteUrl.includes('#')) return null;

                return {
                    href: $el.attr('href'),
                    text: $el.text().trim().slice(0, 100),
                    absoluteUrl
                };
            } catch (error) {
                // 无效URL直接丢弃
                return null;
            }
        }).get().filter(Boolean);  // 过滤null值

        // 收集所有绝对URL（自动去重）
        const allAbsoluteUrls = new Set(aTags.map(tag => tag.absoluteUrl));

        console.log(`爬取完成: ${filePath}（找到${aTags.length}个链接，${allAbsoluteUrls.size}个唯一URL）`);
        logMemoryUsage();

        return {
            filePath,
            totalLinks: aTags.length,
            totalUniqueUrls: allAbsoluteUrls.size,
            links: aTags,
            uniqueUrls: Array.from(allAbsoluteUrls)
        };
    } catch (error) {
        console.error(`爬取失败: ${filePath} - ${error.message}`);
        throw error;
    }
}

// 命令行参数处理
const args = process.argv.slice(2);
const htmlFilePath = args[0];

if (!htmlFilePath) {
    console.error('请提供HTML文件路径作为参数');
    console.log('用法: node html-link-crawler.js /path/to/your/file.html');
    process.exit(1);
}

// 检查文件是否存在
if (!fs.existsSync(htmlFilePath)) {
    console.error(`错误: 文件不存在 - ${htmlFilePath}`);
    process.exit(1);
}

// 检查是否为HTML文件
const ext = path.extname(htmlFilePath).toLowerCase();
if (ext !== '.html' && ext !== '.htm') {
    console.error(`错误: 文件不是HTML文件 - ${htmlFilePath}`);
    process.exit(1);
}

// 执行爬取
crawlHtmlFile(htmlFilePath)
    .then(result => {
        // 输出JSON结果到控制台
        console.log(JSON.stringify(result, null, 2));
    })
    .catch(error => {
        console.error('爬取过程中发生错误:', error.message);
        process.exit(1);
    });