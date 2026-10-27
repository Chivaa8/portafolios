const assert = require('node:assert/strict');
const {pathToFileURL} = require('node:url');
const {chromium} = require('C:/Users/Chiva/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async () => {
 const browser = await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try {
  const page = await browser.newPage(); const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('https://cdn.jsdelivr.net/**',route=>route.abort());
  for(const lang of ['es','en','ca']) {
   await page.goto(pathToFileURL(__dirname+'/portfolio.html').href+'?lang='+lang);
   await page.emulateMedia({reducedMotion:'reduce'});
   assert.equal(await page.locator('html').getAttribute('lang'),lang);
   assert((await page.locator('[data-i18n="summary2"]').textContent()).includes('FUCS'));
   assert.equal(await page.locator('[data-booka-card] .booka-stages li').count(),2);
   for(const width of [360,390,768,1440]) {
    await page.setViewportSize({width,height:900});
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${lang} overflow ${width}`);
   }
   await page.locator('[data-project-prev]').scrollIntoViewIfNeeded();
   assert(await page.locator('[data-project-prev]').isDisabled());
   await page.locator('[data-project-pagination] button').nth(4).click();
   await page.waitForFunction(()=>document.querySelector('[data-project-position]').textContent==='5 / 5');
   assert.equal(await page.locator('[data-project-pagination] button').nth(4).getAttribute('aria-pressed'),'true');
   await page.locator('[data-project-pagination] button').first().click();
   await page.waitForFunction(()=>document.querySelector('[data-project-position]').textContent==='1 / 5');

   for (let i=1;i<5;i++) {
    await page.locator('[data-project-next]').click();
    await page.waitForFunction(n=>document.querySelector('[data-project-position]').textContent===`${n} / 5`,i+1);
   }
   assert(await page.locator('[data-project-next]').isDisabled());
   await page.locator('[data-project-prev]').click();
   await page.waitForFunction(()=>document.querySelector('[data-project-position]').textContent==='4 / 5');
   assert(await page.locator('[data-project-next]').isEnabled());
   await page.locator('[data-project="onepiece"]').focus();
   await page.keyboard.press('ArrowLeft');
   await page.waitForFunction(()=>document.querySelector('[data-project-position]').textContent==='3 / 5');
   await page.keyboard.press('Enter');
   assert(await page.locator('[data-project-dialog]').evaluate(d=>d.open));
   await page.keyboard.press('Escape');
   await page.locator('[data-booka-open]').click();
   const dialog=page.locator('[data-booka-dialog]');
   assert(await dialog.evaluate(d=>d.open));
   assert((await dialog.textContent()).includes('FUCS'));
   assert.equal(await dialog.locator('[data-i18n="bookaReference"]').getAttribute('href'),'assets/docs/Carta_Recomendacion_Oriol_Chiva.pdf');
   assert.equal(await dialog.locator('[data-i18n="bookaReference"]').getAttribute('target'),'_blank');
   await page.keyboard.press('Escape');
   await page.locator('#proyectos').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/catalogue-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.locator('#proyectos').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/catalogue-mobile.png'});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-work-case="booka"]').click();
   const work=page.locator('[data-work-case-dialog]');
   assert(await work.evaluate(d=>d.open));
   for(const key of ['problem','solution','approach']) assert((await work.locator(`[data-case-text="${key}"]`).textContent()).includes('FUCS'));
   assert.equal(await work.locator('[data-case-reference]').getAttribute('href'),'assets/docs/Carta_Recomendacion_Oriol_Chiva.pdf');
   assert.equal(await work.locator('[data-case-stage="0"]').getAttribute('aria-pressed'),'true');
   await work.locator('[data-case-stage="1"]').focus();
   await page.keyboard.press('Enter');
   assert.equal(await work.locator('[data-case-stage="1"]').getAttribute('aria-pressed'),'true');
   assert((await work.locator('[data-case-text="solution"]').textContent()).includes('Next.js'));
   assert(!(await work.locator('[data-case-text="problem"]').textContent()).includes('FUCS'));
   await work.locator('[data-case-stage="0"]').click();
   assert((await work.locator('[data-case-text="solution"]').textContent()).includes('FUCS'));
   await page.setViewportSize({width:390,height:844});
   assert(await work.evaluate(d=>d.scrollWidth<=d.clientWidth));
   await page.keyboard.press('Escape');
  }
  await page.goto(pathToFileURL(__dirname+'/portfolio.html').href+'?lang=es');
  await page.locator('[data-booka-card]').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/booka-mobile.png'});
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-booka-card]').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/booka-desktop.png'});
  await page.evaluate(() => window.scrollTo(0,0));
  await page.screenshot({path:__dirname+'/front-hero.png'});
  await page.locator('#proyectos').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/catalogue-desktop.png'});
  await page.setViewportSize({width:390,height:844});
  await page.locator('#proyectos').scrollIntoViewIfNeeded();
  await page.screenshot({path:__dirname+'/catalogue-mobile.png'});
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await page.setViewportSize({width:1440,height:1000});
  await page.locator('[data-work-case="booka"]').click();
  await page.screenshot({path:__dirname+'/booka-case-intern.png'});
  await page.locator('[data-case-stage="1"]').click();
  await page.screenshot({path:__dirname+'/booka-case-employed.png'});
  await page.keyboard.press('Escape');
  await page.locator('[data-work-case="bio"]').click();
  assert(await page.locator('[data-case-stages]').isHidden());
  await page.keyboard.press('Escape');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.locator('[data-theme-toggle]').click();
  await page.locator('[data-booka-open]').click();
  await page.screenshot({path:__dirname+'/booka-detail-dark.png'});
  assert.deepEqual(errors,[]);
  console.log('PASS: ES/EN/CA, both Booka dialogs, PDF targets, responsive widths 360/390/768/1440, no JS errors.');
 } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
