const homeCopy = {
  es: ['¿Qué perfil necesitas?', 'Dos formas de explorar mi experiencia. Elige por dónde empezar.', 'Soporte IT', 'Soporte a usuarios, sistemas y resolución de incidencias. Descubre mi perfil en una terminal Linux interactiva.', 'Abrir terminal IT →', 'Desarrollo', 'Aplicaciones web, ingeniería de producto y datos. Experiencia, proyectos y recomendaciones.', 'Explorar portafolio →', 'Puedes cambiar de vista en cualquier momento. · © 2026 Oriol Chiva', 'Idioma'],
  ca: ['Quin perfil necessites?', 'Dues maneres d’explorar la meva experiència. Tria per on començar.', 'Suport IT', 'Suport a usuaris, sistemes i resolució d’incidències. Descobreix el meu perfil en una terminal Linux interactiva.', 'Obrir terminal IT →', 'Desenvolupament', 'Aplicacions web, enginyeria de producte i dades. Experiència, projectes i recomanacions.', 'Explorar portafoli →', 'Pots canviar de vista en qualsevol moment. · © 2026 Oriol Chiva', 'Idioma'],
  en: ['Which profile do you need?', 'Two ways to explore my experience. Choose where to start.', 'IT Support', 'User support, systems and troubleshooting. Discover my profile through an interactive Linux-style terminal.', 'Open IT terminal →', 'Development', 'Web applications, product engineering and data. Experience, projects and recommendations.', 'Explore portfolio →', 'You can switch views at any time. · © 2026 Oriol Chiva', 'Language']
};
if (typeof document !== 'undefined') {
  const select = document.querySelector('#home-language');
  const initial = new URLSearchParams(location.search).get('lang');
  select.value = Object.hasOwn(homeCopy, initial) ? initial : 'es';
  function updateHome() {
    const lang = select.value;
    document.documentElement.lang = lang;
    const selectors = ['h1','main > p','.card:first-child h2','.card:first-child p','.card:first-child .cta','.card:last-child h2','.card:last-child p','.card:last-child .cta','footer'];
    selectors.forEach((selector,i) => { document.querySelector(selector).textContent = homeCopy[lang][i]; });
    select.setAttribute('aria-label',homeCopy[lang][9]);
    document.querySelectorAll('.card').forEach(link => { link.href = link.getAttribute('href').split('?')[0] + '?lang=' + lang; });
  }
  select.addEventListener('change',updateHome);
  updateHome();
}
if (typeof module !== 'undefined') module.exports = homeCopy;
