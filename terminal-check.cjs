const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {resolveCommand, commands, links} = require('./assets/js/terminal.js');
assert.equal(resolveCommand('  CAT   CV ').name, 'cv');
assert.equal(resolveCommand('LS').text, resolveCommand('help').text);
assert.equal(resolveCommand('clear').name, 'clear');
assert.match(resolveCommand('<script>alert(1)</script>').text, /Comando no encontrado/);
assert.match(commands.experiencia, /2023/);
for (const group of Object.values(links)) for (const [, href] of group) {
  if (!/^(https:|mailto:)/.test(href)) assert(fs.existsSync(path.join(__dirname, href.split('#')[0])), href);
}
console.log('PASS: command normalization, aliases, unknown input, experience and linked documents.');

const vm = require('node:vm');
const context = {window: {}, module: {exports: {}}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'assets/js/data.js'), 'utf8'), context);
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'assets/js/terminal.js'), 'utf8'), context);
assert(context.module.exports.commands.formacion.includes(context.window.portfolioData.educationDetails.es.daw.title));
assert(!context.module.exports.commands.formacion.includes('2026, finalizado'));
assert(!context.module.exports.commands.contacto.includes('@'));
for (const page of ['index.html', 'terminal.html', 'portfolio.html']) {
 const html = fs.readFileSync(path.join(__dirname, page), 'utf8');
 for (const [, href] of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  if (!/^(https?:|mailto:)/.test(href)) assert(fs.existsSync(path.join(__dirname, href.split(/[?#]/)[0])), href);
 }
}
assert(fs.readFileSync(path.join(__dirname, 'portfolio.html'), 'utf8').includes('href="terminal.html"'));
console.log('PASS: shared portfolio data, private contact button and navigation across three views.');

const terminalHtml = fs.readFileSync(path.join(__dirname, 'terminal.html'), 'utf8');
assert(terminalHtml.includes('class="hero-actions"'));
assert(terminalHtml.includes('class="explore-start"'));
assert(fs.readFileSync(path.join(__dirname, 'portfolio.html'), 'utf8').includes('class="terminal-launch"'));
console.log('PASS: accessible terminal icon, prominent GitHub link and exploration prompts.');

for (const language of ['es','ca','en']) {
 const api = context.module.exports;
 const localized = api.localizedCommands(language);
 for (const key of Object.keys(api.commands)) assert(localized[key] && !localized[key].includes('{it}') && !localized[key].includes('{booka}'), `${language}: ${key}`);
 assert(localized.formacion.includes(context.window.portfolioData.educationDetails[language].daw.title));
 assert(!localized.contacto.includes('@'));
 assert(api.resolveCommand('not-a-command', language).text.includes(api.translations[language].unknown));
}
assert.equal(context.module.exports.resolveCommand('experience','en').name,'experiencia');
assert.equal(context.module.exports.resolveCommand('referències','ca').name,'referencias');
const crypto = require('node:crypto');
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
assert.equal(hash(path.join(__dirname,'assets/docs/CV-Oriol-Chiva.pdf')),hash('C:/Users/Chiva/Dropbox/PC/Desktop/Mas cosas/CV/CV.pdf'));
assert(!terminalHtml.includes('CV-Help-Desk.pdf'));
console.log('PASS: all command responses in ES/CA/EN, translated aliases, shared education and byte-identical original CV.');
