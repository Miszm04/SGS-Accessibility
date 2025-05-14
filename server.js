import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

function logMemoryUsage() {
    const memory = process.memoryUsage();
    const mb = (bytes) => (bytes / 1024 / 1024).toFixed(2);
    console.log(`内存使用：堆总${mb(memory.heapTotal)}MB | 已用${mb(memory.heapUsed)}MB`);
}

async function crawl(url, { maxDepth = 3, maxPages = 100, memoryThreshold = 0.8 }) {
    const visitedUrls = new Set();
    const resultBuffer = [];
    const allAbsoluteUrls = new Set();  // 新增：存储所有唯一绝对URL的Set
    let pageCount = 0;

    async function recursiveCrawl(currentUrl, currentDepth) {
        if (
            visitedUrls.has(currentUrl) || 
            currentDepth > maxDepth || 
            pageCount >= maxPages ||
            process.memoryUsage().heapUsed / process.memoryUsage().heapTotal > memoryThreshold
        ) return;

        visitedUrls.add(currentUrl);
        pageCount++;

        try {
            const response = await axios.get(currentUrl, {
                timeout: 10000,
                headers: { 'User-Agent': 'LinkCrawler/1.0' }
            });

            if (response.status === 404) {
                console.log(`[跳过] 页面不存在: ${currentUrl}`);
                return;
            }

            const $ = cheerio.load(response.data);
            // 提取并过滤a标签（仅保留有效absoluteUrl）
            const aTags = $('a[href]').map((i, el) => {
                const $el = $(el);
                try {
                    const absoluteUrl = new URL($el.attr('href'), currentUrl).href;
                    if (!absoluteUrl.startsWith('http')) return null;  // 过滤非HTTP链接
                    return {
                        href: $el.attr('href'),
                        text: $el.text().trim().slice(0, 100),
                        absoluteUrl  // 只保留必要字段
                    };
                } catch (error) {
                    return null;  // 无效URL直接丢弃
                }
            }).get().filter(Boolean);  // 过滤null值

            // 收集所有绝对URL（自动去重）
            aTags.forEach(tag => allAbsoluteUrls.add(tag.absoluteUrl));

            // 存储页面级数据（保持裁剪逻辑）
            resultBuffer.push({
                url: currentUrl,
                depth: currentDepth,
                aTags: aTags.slice(0, 50)  // 单个页面最多50个标签
            });

            console.log(`[深度${currentDepth}] 爬取成功: ${currentUrl}（累计URL：${allAbsoluteUrls.size}）`);
            logMemoryUsage();

            // 提取下一层链接（去重+过滤）
            const nextLinks = [...new Set(aTags.map(t => t.absoluteUrl))]
                .filter(url => !visitedUrls.has(url));

            if (nextLinks.length === 0) {
                console.log("[终止] 无新链接可爬取");
                return;
            }

            const concurrentLimit = 3;
            const requests = [];
            for (const link of nextLinks) {
                requests.push(recursiveCrawl(link, currentDepth + 1));
                if (requests.length >= concurrentLimit) {
                    await Promise.all(requests);
                    requests.length = 0;
                }
            }
            await Promise.all(requests);

        } catch (error) {
            const status = error.response?.status || '网络错误';
            console.error(`[深度${currentDepth}] 爬取失败: ${currentUrl} - 状态码${status}`);
        }
    }

    await recursiveCrawl(url, 1);
    return {
        totalPages: pageCount,
        totalUniqueUrls: allAbsoluteUrls.size,  // 新增：唯一URL总数
        allAbsoluteUrls: Array.from(allAbsoluteUrls),  // 新增：所有唯一绝对URL数组
        data: resultBuffer  // 保留原页面级数据（可选）
    };
}

app.get('/crawl', async (req, res) => {
    const { url } = req.query;
    const options = {
        maxDepth: parseInt(req.query.maxDepth) || 3,
        maxPages: parseInt(req.query.maxPages) || 100,
        memoryThreshold: parseFloat(req.query.memoryThreshold) || 0.8
    };

    try {
        new URL(url);
    } catch (error) {
        return res.status(400).json({ error: '请提供有效的HTTP/HTTPS URL' });
    }

    try {
        const result = await crawl(url, options);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: `请求的资源 ${req.originalUrl} 不存在`
    });
});

app.listen(3000, () => {
    console.log('服务运行中,访问:http://localhost:3000/crawl?url=目标网址');
});
    