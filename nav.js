import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');
import fetch from 'node-fetch';

(async () => {
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	await page.goto(`https://www.pmu.fr/turf/`);
    await delay(3000);})()