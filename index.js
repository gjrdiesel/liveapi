const playwright = require('playwright');
const { json } = require('micro')

const browser = await playwright.chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

module.exports = async (req, res) => {
    const {query} = await json(req);
    
    await page.goto(`https://www.google.com/search?q=${query}`);
    
    return await page.evaluate(query => {
        return {
            query,
            text: document.querySelector('c-wiz div[aria-live="polite"]')?.innerText.replace('Live: ', ''), // "Little less than busy"
            values: {
                expected_to_full: (parseFloat(document.querySelectorAll('c-wiz div[tabindex="0"]')[1].querySelectorAll('div')[1].style.height) / 75) * 100 + "%",
                actual_full: (parseFloat(document.querySelectorAll('c-wiz div[tabindex="0"]')[1].querySelectorAll('div')[2].style.height) / 75) * 100 + "%"
            }
        }
    }, query);
};
