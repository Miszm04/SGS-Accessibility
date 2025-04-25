import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as cheerio from 'cheerio';

const app = express();
const port = 3000;

// 使用 cors 中间件解决跨域问题
app.use(cors());

app.get('/', async (req, res) => {
    const url = "https://www.mi.com/global/"
    if (!url) {
        return res.status(400).send('请提供要爬取的 URL');
    }

    try {
        const response = await axios.get(url);
        console.log(response);
        const html = response.data;
        const $ = cheerio.load(html);
        const aTags = [];

        $('a').each((index, element) => {
            const href = $(element).attr('href');
            const text = $(element).text();
            aTags.push({ href, text });
        });

        res.json(aTags);
    } catch (error) {
        console.error(error);
        res.status(500).send('爬取数据时出错');
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});    
