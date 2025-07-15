import puppeteer from 'puppeteer';
import axeCore from 'axe-core';

async function runAxe(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    } catch (error) {
        if (error.name === 'TimeoutError') {
            console.error('页面导航超时，请检查网络连接或页面性能。');
            await browser.close();
            return;
        }
        throw error;
    }

    try {
        await page.addScriptTag({ content: axeCore.source });
        const results = await page.evaluate(() => {
            return axe.run({
                include: [document.body],
                exclude: []
            }, {
                runOnly: 'wcag2a'  // 仅检测 WCAG 2.1 AA 标准
            });
        });

        /*
        // ---------- 违规项分类 ----------
        const wcagViolationTagGroups = {};
        results.violations.forEach(violation => {
            const wcagTags = violation.tags.filter(tag => tag.startsWith('wcag'));
            wcagTags.forEach(tag => {
                if (!wcagViolationTagGroups[tag]) wcagViolationTagGroups[tag] = [];
                wcagViolationTagGroups[tag].push(violation);
            });
        });

        // ---------- 通过项分类（新增） ----------
        const wcagPassTagGroups = {};
        results.passes.forEach(pass => {
            const wcagTags = pass.tags.filter(tag => tag.startsWith('wcag'));
            wcagTags.forEach(tag => {
                if (!wcagPassTagGroups[tag]) wcagPassTagGroups[tag] = [];
                wcagPassTagGroups[tag].push(pass);
            });
        });

        // ---------- 输出结果 ----------
        // 违规项输出
        if (Object.keys(wcagViolationTagGroups).length > 0) {
            console.log('\n===== 按 WCAG 标签分类的违规项 =====');
            for (const [tag, violations] of Object.entries(wcagViolationTagGroups)) {
                console.log(`\n🔴 标签: ${tag}（共 ${violations.length} 项违规）`);
                violations.forEach((violation, index) => {
                    console.log(`   ${index + 1}. 规则: ${violation.id} - ${violation.description}`);
                });
            }
        } else {
            console.log('\n✅ 未检测到 WCAG 标签相关的违规项');
        }

        // 通过项输出
        if (Object.keys(wcagPassTagGroups).length > 0) {
            console.log('\n\n===== 按 WCAG 标签分类的通过项 =====');
            for (const [tag, passes] of Object.entries(wcagPassTagGroups)) {
                console.log(`\n🟢 标签: ${tag}（共 ${passes.length} 项通过）`);
                passes.forEach((pass, index) => {
                    console.log(`   ${index + 1}. 规则: ${pass.id} - ${pass.description}`);
                });
            }
        } else {
            console.log('\n\n⚠️ 未检测到 WCAG 标签相关的通过项（可能所有规则都不适用或未完成检测）');
        }
        */
        console.log(results);
    } finally {
        await browser.close();
    }
}

const url = process.argv[2];
if (!url) {
    console.error('请提供目标 URL，例如: node wcag-tag-classifier.js http://www.deque.com');
    process.exit(1);
}

runAxe(url);
    