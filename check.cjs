const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/js/data.js'), 'utf8'), context);
for (const [, key] of html.matchAll(/data-i18n="([^"]+)"/g)) {
  for (const lang of ['es', 'en', 'ca']) assert(context.window.portfolioData.copy[lang][key], `${lang}: ${key}`);
}
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate section IDs');
for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (url.startsWith('#')) assert(ids.includes(url.slice(1)), `Anchor: ${url}`);
  else if (!/^(https?:|mailto:)/.test(url)) assert(fs.existsSync(path.join(root, url.split('?')[0])), `Asset: ${url}`);
}
assert.equal((html.match(/data-project="/g) || []).length, 5);
assert(html.includes('carta-recomendacion-oriol.pdf') && html.includes('carta-recomendacion.pdf') && html.includes('certificado-lsumoy.pdf'));
assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(path.join(root, 'assets/docs/Carta_Recomendacion_Oriol_Chiva.pdf'))).digest('hex'), '9d269810f394bff35005d3604e58afb9eec6f0403ab4040169781d9fc10aa172');
console.log('PASS: three languages, anchors, local resources, five projects, existing references, byte-identical Booka PDF.');
