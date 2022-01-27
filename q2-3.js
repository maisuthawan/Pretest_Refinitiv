const puppeteer = require("puppeteer");
function run() {
    return new Promise(async (resolve, reject)=> {
        try {
            const browser = await puppeteer.launch({
            })
            const page = await browser.newPage()
            await page.goto('https://codequiz.azurewebsites.net')
            await Promise.all([
                page.waitForNavigation(),
                page.click('input'),
            ]);
            async function getFundName() {
                return process.argv[2];
            }
            await page.exposeFunction("getFundName", getFundName);
            let data = await page.evaluate( async () => {
                let fundName = await getFundName();
                let nav = "Cannot find fund name";
                const trs = document.documentElement.querySelectorAll('table  tr');
                trs.forEach(tr => {
                    const tds = tr.querySelectorAll('td');
                    tds.forEach(td => {
                        if(tds[0].innerText.toString() == fundName.toString()) {
                            nav = tds[1].innerText;
                        }
                    });
                });
                return nav
            })
            return resolve(data);
        } catch(err) {
            return reject(err);
        }
    })
}

if (process.argv.length == 3) {
    run().then(console.log).catch(console.error);
}else{
    console.log("Error, Please enter nav name")
}