const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

test('Should output name and age', () => {
	const text = generateText('Appsius', 33);
	expect(text).toBe('Appsius (33 years old)');
});

test('Should generate a valid text output', () => {
	const textOutput = checkAndGenerate('Appsius', 33);
	expect(textOutput).toBe('Appsius (33 years old)');
});

test('Should click around', async () => {
	const browser = await puppeteer.launch({
		headless: true,
		// slowMo: 80,
		// args: ['--window-size=1920, 19'],
	});

	const page = await browser.newPage();
	await page.goto(
		'file:///C:/Sandbox/ilyas/JS/Acedemind/JS/exerc/adv_concepts/testing/index.html'
	);

	await page.click('input#name');
	await page.type('input#name', 'Anna');
	await page.click('input#age');
	await page.type('input#age', '33');
	await page.click('#btnAddUser');

	const finalText = await page.$eval('.user-item', (el) => {
		el.textContent;
	});
	expect(finalText).toBe('Anna (28 years old)');
}, 10000);
