const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = {window:{},module:{exports:{}}};
for (const file of ['data.js','terminal.js']) vm.runInNewContext(fs.readFileSync(path.join(__dirname,'assets/js',file),'utf8'),context);
for(const lang of ['es','en','ca']) {
 const text=context.module.exports.localizedCommands(lang).experiencia;
 const indices=['IGTP ·','BOOKA /','KYMOS /','AMAZON ·'].map(name=>text.indexOf(name));
 assert(indices.every((n,i)=>n>=0 && (!i || n>indices[i-1])),lang);
 assert(text.includes('FUCS'));
 const contribution=context.window.portfolioData.terminalContributions[lang];
 for(const key of ['bookaContribution','profilesPoint1','profilesPoint2','profilesPoint3','itPoint1','itPoint2','itPoint3','bioPoint1','bioPoint2','bioPoint3']) assert(text.includes(contribution[key]),lang+': '+key);
}
console.log('PASS: terminal chronology, FUCS and all existing responsibilities in ES/EN/CA.');
