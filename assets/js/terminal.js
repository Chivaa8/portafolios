const commands = {
  help: 'COMANDOS DISPONIBLES\nwhoami       Perfil profesional\nexperiencia  Trayectoria\nskills       Herramientas y sistemas\ndiagnostico  Ejemplo de resolución de incidencias\nformacion    Formación e idiomas\nproyectos    Desarrollo y datos\nreferencias  Cartas y certificado\ncontacto     Contactar\ncv           Descargar CV\nclear        Limpiar pantalla\n\nTambién: ls, cat cv, pwd. Usa los botones si lo prefieres.',
  whoami: 'ORIOL CHIVA HIDALGO\nSoporte informático · Sistemas · Desarrollo web\nBadalona, Barcelona\n\nExperiencia en soporte a usuarios, incidencias de hardware y software y mantenimiento de equipos en Kymos. Desarrollo de producto en Booka y prácticas de bioinformática en IGTP.\n\nMe interesa entender el problema, ayudar al usuario y encontrar una solución clara y mantenible.',
  experiencia: 'KYMOS / Kymos Group · IT Support\nEnero - abril de 2023\nSoporte a usuarios, incidencias de hardware y software y mantenimiento de equipos. Participación en requisitos, documentación y despliegue de un equipo de pruebas basado en WDS.\n\nBOOKA / 6Profiles Consulting S.L.\nSeptiembre de 2025 - actualidad\nIncorporación como desarrollador Full Stack en prácticas y posterior ingeniería de producto y desarrollo. Resolución de errores, validaciones, pruebas y colaboración con el equipo.\n\nIGTP · Prácticas en bioinformática\n6 - 23 de octubre de 2025 · 58,5 horas\nR, Shiny y Linux en investigación biomédica.\n\nAMAZON · Mozo de almacén\nAbril de 2020 - actualidad\nProcesos logísticos y control de calidad.',
  skills: 'SOPORTE IT\nWindows · Linux · Hardware · Software · Redes\n\nHERRAMIENTAS UTILIZADAS\nActive Directory · Entra ID · VPN · Microsoft 365\nSoporte remoto · Herramientas de tickets\n\nDOCUMENTACIÓN Y DESPLIEGUE\nParticipación en documentación técnica y proyecto con WDS.\n\nDESARROLLO\nTypeScript · JavaScript · React · Next.js · Python\nSQL · R / Shiny · Git / GitHub · Docker',
  diagnostico: 'ESCENARIO DE EJEMPLO / SIN CONEXIÓN A LA RED\nEste es un procedimiento ilustrativo, no una incidencia real ni un diagnóstico de tu equipo.\n\n1. Escuchar al usuario y delimitar el alcance: un equipo, varios usuarios o un servicio.\n2. Revisar conexión física o Wi-Fi y cambios recientes.\n3. Consultar IP, ruta y DNS: ipconfig /all (Windows) o ip addr (Linux).\n4. Comprobar puerta de enlace y resolución de nombres; revisar VPN si corresponde. Un ping fallido no demuestra por sí solo que el servicio esté caído.\n5. Aplicar la solución autorizada o escalar con evidencias, sin modificar políticas de seguridad a ciegas.\n6. Validar con el usuario y documentar causa, acciones y resultado en el ticket.',
  formacion: 'GRADO SUPERIOR · Desarrollo de Aplicaciones Web\nINS La Ferreria · Septiembre de 2023 - 2026\n\nGRADO MEDIO · Sistemas Microinformáticos y Redes\nIFP, Barcelona\n\nFORMACIÓN COMPLEMENTARIA\nPython, Big Data, Virtualización, IA y Machine Learning\nSEAS / Universidad San Jorge · 2026\n\nIDIOMAS\nCatalán: nativo · Castellano: nativo\nInglés: intermedio',
  proyectos: 'BOOKA\nDesarrollo y mantenimiento de una plataforma web con React, Next.js y TypeScript; bases de datos, autenticación e integraciones.\n\nBIOINFORMÁTICA\nVisualización de datos con R y Shiny en entorno Linux.\n\nConsulta los proyectos y su contexto en la vista clásica.',
  referencias: 'RECOMENDACIONES Y CERTIFICADO\nDocumentos originales disponibles para consulta.',
  contacto: 'HABLEMOS\nUbicación: Badalona, Barcelona\nUsa el botón para copiar el email o abrir tu aplicación de correo.',
  cv: 'CV ORIENTADO A SOPORTE IT / HELP DESK',
  pwd: '/home/oriol/portfolio'
};
const links = {
  cv: [['Descargar CV Help Desk', 'assets/docs/CV-Oriol-Chiva.pdf']],
  referencias: [['Kymos · IT', 'assets/docs/carta-recomendacion.pdf'], ['Booka · CEO', 'assets/docs/Carta_Recomendacion_Oriol_Chiva.pdf'], ['IGTP · Recomendación', 'assets/docs/carta-recomendacion-oriol.pdf'], ['IGTP · Certificado', 'assets/docs/certificado-lsumoy.pdf']],
  proyectos: [['Ver todos los proyectos', 'portfolio.html#proyectos']],
  contacto: [['GitHub', 'https://github.com/Chivaa8'], ['LinkedIn', 'https://www.linkedin.com/in/oriol-chiva/']]
};
if (typeof window !== 'undefined' && window.portfolioData) {
  const {copy, educationDetails} = window.portfolioData;
  const es = copy.es;
  commands.formacion = Object.values(educationDetails.es).map(item => `${item.title}\n${item.center} · ${item.period}\n${item.description}`).join('\n\n') + '\n\nIDIOMAS\nCatalán: nativo · Castellano: nativo · Inglés: intermedio';
  commands.proyectos = ['PROYECTOS', es.repoPermisos, es.repoHeatmap, es.repoFlota, es.repoOnePiece, es.repoCatalogo].join('\n\n');
  commands.experiencia = commands.experiencia.replace('Soporte a usuarios, incidencias de hardware y software y mantenimiento de equipos.', [es.itPoint1, es.itPoint2, es.itPoint3].join(' '));
  commands.experiencia += '\n\nBOOKA / FUNCIONES\n' + [es.profilesPoint1, es.profilesPoint2, es.profilesPoint3].join('\n');
}
const translations = {
  es: {nav:['Perfil','Experiencia','Herramientas','Diagnóstico','Formación','Proyectos','Referencias','Contacto','Ayuda'],classic:'Vista clásica ↗',eyebrow:'SOPORTE IT · SISTEMAS · DESARROLLO',title:['Personas, sistemas.','Problemas resueltos.'],intro:'Soy Oriol. Mi experiencia combina soporte informático y desarrollo de aplicaciones. Explora mi perfil como en una terminal Linux.',start:'Entra, prueba y descubre.',guide:'No necesitas saber comandos. Elige una opción o escribe en la terminal.',experience:'Mi experiencia →',references:'Quién respalda mi trabajo →',explore:'EXPLORAR / COMANDOS',keys:'Enter: ejecutar · ↑ ↓: historial · Tab: completar',next:'Explora mi experiencia y las cartas de recomendación',contact:'Contactar por email',copy:'Copiar email',copied:'Email copiado',placeholder:'Escribe help…',command:'Comando',execute:'Ejecutar comando',download:'Descargar CV',projects:'Ver todos los proyectos',recommendation:'Recomendación',certificate:'Certificado',languages:'IDIOMAS\nCatalán: nativo · Castellano: nativo · Inglés: intermedio',unknown:'Comando no encontrado',hint:'Escribe help para ver las opciones.'},
  ca: {nav:['Perfil','Experiència','Eines','Diagnòstic','Formació','Projectes','Referències','Contacte','Ajuda'],classic:'Vista clàssica ↗',eyebrow:'SUPORT IT · SISTEMES · DESENVOLUPAMENT',title:['Persones, sistemes.','Problemes resolts.'],intro:'Soc l’Oriol. La meva experiència combina suport informàtic i desenvolupament d’aplicacions. Explora el meu perfil com en una terminal Linux.',start:'Entra, prova i descobreix.',guide:'No cal saber ordres. Tria una opció o escriu a la terminal.',experience:'La meva experiència →',references:'Qui avala la meva feina →',explore:'EXPLORAR / ORDRES',keys:'Enter: executar · ↑ ↓: historial · Tab: completar',next:'Explora la meva experiència i les cartes de recomanació',contact:'Contactar per email',copy:'Copiar email',copied:'Email copiat',placeholder:'Escriu help…',command:'Ordre',execute:'Executar ordre',download:'Descarregar CV',projects:'Veure tots els projectes',recommendation:'Recomanació',certificate:'Certificat',languages:'IDIOMES\nCatalà: natiu · Castellà: natiu · Anglès: intermedi',unknown:'Ordre no trobada',hint:'Escriu help per veure les opcions.',
    whoami:'ORIOL CHIVA HIDALGO\nSuport informàtic · Sistemes · Desenvolupament web\nBadalona, Barcelona\n\nExperiència en suport a usuaris, incidències de maquinari i programari i manteniment d’equips a Kymos. Desenvolupament de producte a Booka i pràctiques de bioinformàtica a IGTP.\n\nM’interessa entendre el problema, ajudar l’usuari i trobar una solució clara i mantenible.',
    experiencia:'KYMOS / Kymos Group · IT Support\nGener - abril de 2023\n{it}\nParticipació en requisits, documentació i desplegament d’un equip de proves basat en WDS.\n\nBOOKA / 6Profiles Consulting S.L.\nSetembre de 2025 - actualitat\nIncorporació com a desenvolupador Full Stack en pràctiques i posterior enginyeria de producte i desenvolupament.\n{booka}\n\nIGTP · Pràctiques en bioinformàtica\n6 - 23 d’octubre de 2025 · 58,5 hores\nR, Shiny i Linux en recerca biomèdica.\n\nAMAZON · Mosso de magatzem\nAbril de 2020 - actualitat\nProcessos logístics i control de qualitat.',
    skills:'SUPORT IT\nWindows · Linux · Maquinari · Programari · Xarxes\n\nEINES UTILITZADES\nActive Directory · Entra ID · VPN · Microsoft 365\nSuport remot · Eines de tiquets\n\nDOCUMENTACIÓ I DESPLEGAMENT\nParticipació en documentació tècnica i projecte amb WDS.\n\nDESENVOLUPAMENT\nTypeScript · JavaScript · React · Next.js · Python\nSQL · R / Shiny · Git / GitHub · Docker',
    diagnostico:'ESCENARI D’EXEMPLE / SENSE CONNEXIÓ A LA XARXA\nProcediment il·lustratiu, no una incidència real ni un diagnòstic del teu equip.\n\n1. Escoltar l’usuari i delimitar l’abast: un equip, diversos usuaris o un servei.\n2. Revisar la connexió física o Wi-Fi i els canvis recents.\n3. Consultar IP, ruta i DNS: ipconfig /all (Windows) o ip addr (Linux).\n4. Comprovar la porta d’enllaç i la resolució de noms; revisar la VPN si escau. Un ping fallit no demostra per si sol que el servei estigui caigut.\n5. Aplicar la solució autoritzada o escalar amb evidències, sense modificar polítiques de seguretat a cegues.\n6. Validar amb l’usuari i documentar causa, accions i resultat al tiquet.',referencias:'RECOMANACIONS I CERTIFICAT\nDocuments originals disponibles per consultar.',contacto:'PARLEM\nUbicació: Badalona, Barcelona\nFes servir el botó per copiar l’email o obrir l’aplicació de correu.'},
  en: {nav:['Profile','Experience','Tools','Diagnostics','Education','Projects','References','Contact','Help'],classic:'Classic view ↗',eyebrow:'IT SUPPORT · SYSTEMS · DEVELOPMENT',title:['People, systems.','Problems solved.'],intro:'I’m Oriol. My experience combines IT support and application development. Explore my profile through a Linux-style terminal.',start:'Step in, try it, explore.',guide:'No commands needed. Choose an option or type in the terminal.',experience:'My experience →',references:'Who backs my work →',explore:'EXPLORE / COMMANDS',keys:'Enter: run · ↑ ↓: history · Tab: complete',next:'Explore my experience and recommendation letters',contact:'Contact by email',copy:'Copy email',copied:'Email copied',placeholder:'Type help…',command:'Command',execute:'Run command',download:'Download CV',projects:'View all projects',recommendation:'Recommendation',certificate:'Certificate',languages:'LANGUAGES\nCatalan: native · Spanish: native · English: intermediate',unknown:'Command not found',hint:'Type help to see the options.',
    whoami:'ORIOL CHIVA HIDALGO\nIT support · Systems · Web development\nBadalona, Barcelona\n\nExperience in user support, hardware and software troubleshooting and equipment maintenance at Kymos. Product development at Booka and a bioinformatics internship at IGTP.\n\nI like understanding the problem, helping the user and finding a clear, maintainable solution.',
    experiencia:'KYMOS / Kymos Group · IT Support\nJanuary - April 2023\n{it}\nParticipation in requirements, documentation and a WDS-based test workstation deployment.\n\nBOOKA / 6Profiles Consulting S.L.\nSeptember 2025 - present\nJoined as a Full Stack intern, later taking on product and development engineering responsibilities.\n{booka}\n\nIGTP · Bioinformatics internship\n6 - 23 October 2025 · 58.5 hours\nR, Shiny and Linux in biomedical research.\n\nAMAZON · Warehouse associate\nApril 2020 - present\nLogistics processes and quality control.',
    skills:'IT SUPPORT\nWindows · Linux · Hardware · Software · Networks\n\nTOOLS USED\nActive Directory · Entra ID · VPN · Microsoft 365\nRemote support · Ticketing tools\n\nDOCUMENTATION AND DEPLOYMENT\nParticipation in technical documentation and a WDS project.\n\nDEVELOPMENT\nTypeScript · JavaScript · React · Next.js · Python\nSQL · R / Shiny · Git / GitHub · Docker',
    diagnostico:'EXAMPLE SCENARIO / NO NETWORK CONNECTION\nIllustrative procedure, not a real incident or a diagnosis of your device.\n\n1. Listen to the user and establish scope: one device, multiple users or a service.\n2. Check the physical or Wi-Fi connection and recent changes.\n3. Inspect IP, route and DNS: ipconfig /all (Windows) or ip addr (Linux).\n4. Check the gateway and name resolution; review the VPN where applicable. A failed ping alone does not prove a service is down.\n5. Apply an authorized solution or escalate with evidence, without blindly changing security policies.\n6. Validate with the user and document the cause, actions and outcome in the ticket.',referencias:'RECOMMENDATIONS AND CERTIFICATE\nOriginal documents available to read.',contacto:'LET’S TALK\nLocation: Badalona, Barcelona\nUse the button to copy the email address or open your email application.'}
};
let lang = 'es';
function localizedCommands(language) {
  const ui = translations[language];
  const result = {...commands};
  for (const key of ['whoami','experiencia','skills','diagnostico','referencias','contacto']) if (ui[key]) result[key] = ui[key];
  const data = typeof window !== 'undefined' && window.portfolioData;
  if (data) {
    const c = {...data.copy[language], ...data.terminalContributions[language]};
    result.formacion = Object.values(data.educationDetails[language]).map(item => `${item.title}\n${item.center} · ${item.period}\n${item.description}`).join('\n\n') + '\n\n' + ui.languages;
    result.proyectos = [ui.nav[5].toUpperCase(), c.repoPermisos,c.repoHeatmap,c.repoFlota,c.repoOnePiece,c.repoCatalogo].join('\n\n');
    const dates = {
      es: ['Enero - abril de 2023', 'Septiembre de 2025 - actualidad', '6 - 23 de octubre de 2025 · 58,5 horas', 'Abril de 2020 - actualidad', 'Prácticas en bioinformática', 'Mozo de almacén', 'Procesos logísticos y control de calidad.'],
      ca: ['Gener - abril de 2023', 'Setembre de 2025 - actualitat', '6 - 23 d’octubre de 2025 · 58,5 hores', 'Abril de 2020 - actualitat', 'Pràctiques en bioinformàtica', 'Mosso de magatzem', 'Processos logístics i control de qualitat.'],
      en: ['January - April 2023', 'September 2025 - present', '6 - 23 October 2025 · 58.5 hours', 'April 2020 - present', 'Bioinformatics internship', 'Warehouse associate', 'Logistics processes and quality control.']
    }[language];
    result.experiencia = [
      'KYMOS / Kymos Group · IT Support', dates[0], c.itPoint1, c.itPoint2, c.itPoint3, '',
      'BOOKA / 6Profiles Consulting S.L.', dates[1], c.bookaContribution, c.profilesPoint1, c.profilesPoint2, c.profilesPoint3, '',
      'IGTP · ' + dates[4], dates[2], c.bioPoint1, c.bioPoint2, c.bioPoint3, '',
      'AMAZON · ' + dates[5], dates[3], dates[6]
    ].join('\n');
  }
  result.help = ['whoami','experiencia','skills','diagnostico','formacion','proyectos','referencias','contacto','help'].map((key,i)=>`${key.padEnd(13)}${ui.nav[i]}`).join('\n') + `\ncv           ${ui.download}\nclear        ${language === 'ca' ? 'Netejar pantalla' : language === 'en' ? 'Clear screen' : 'Limpiar pantalla'}\n\nls · cat cv · pwd`;
  result.cv = 'CV · Oriol Chiva';
  return result;
}

function resolveCommand(value, language = lang) {
  const input = value.trim().toLowerCase().replace(/\s+/g, ' ');
  const name = ({ls:'help', 'cat cv':'cv', profile:'whoami', experience:'experiencia', 'experiència':'experiencia', eines:'skills', tools:'skills', diagnostics:'diagnostico', 'diagnòstic':'diagnostico', education:'formacion', 'formació':'formacion', projects:'proyectos', projectes:'proyectos', references:'referencias', 'referències':'referencias', contact:'contacto', contacte:'contacto', ajuda:'help', perfil:'whoami', herramientas:'skills', 'cat experiencia':'experiencia'})[input] || input;
  const ui = translations[language];
  return {name, text: localizedCommands(language)[name] || `${ui.unknown}: ${value.trim()}. ${ui.hint}`};
}
if (typeof document !== 'undefined') {
  const output = document.querySelector('#output');
  const input = document.querySelector('#command');
  const email = ['oriolchiva8', 'gmail.com'].join('@');
  async function copyEmail(button) {
    try { await navigator.clipboard.writeText(email); button.textContent = translations[lang].copied; }
    catch { window.location.href = `mailto:${email}`; }
  }
  document.querySelectorAll('[data-copy-email]').forEach(button => button.addEventListener('click', () => copyEmail(button)));
  const history = [];
  let position = 0;
  function run(value) {
    if (!value.trim()) return;
    const {name, text} = resolveCommand(value);
    document.querySelectorAll('.commands [data-command]').forEach(button => button.setAttribute('aria-current', String(button.dataset.command === name)));
    const status = document.querySelector('#explore-status');
    if (status && commands[name]) status.textContent = translations[lang].next;
    if (name === 'clear') { output.replaceChildren(); return; }
    const entry = document.createElement('div'); entry.className = 'entry';
    const prompt = document.createElement('div'); prompt.className = 'prompt'; prompt.textContent = `oriol@it:~$ ${value}`;
    const result = document.createElement('div'); result.className = 'result'; result.textContent = text;
    for (const [originalLabel, href] of links[name] || []) {
      const ui = translations[lang];
      const label = name === 'cv' ? ui.download : name === 'proyectos' ? ui.projects : originalLabel.replace('Recomendación', ui.recommendation).replace('Certificado', ui.certificate);
      const link = document.createElement('a'); link.textContent = label + ' ↗'; link.href = href;
      if (!href.startsWith('mailto:')) { link.target = '_blank'; link.rel = 'noreferrer'; }
      result.append(document.createElement('br'), link);
    }
    if (name === 'contacto') {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = translations[lang].copy;
      button.addEventListener('click', () => copyEmail(button)); result.append(document.createElement('br'), button);
    }
    entry.append(prompt, result); output.append(entry);
    // ponytail: retain only 50 entries; increase the cap if longer sessions become useful.
    while (output.children.length > 50) output.firstElementChild.remove();
    output.scrollTop = output.scrollHeight;
  }
  document.querySelector('#terminal-form').addEventListener('submit', event => {
    event.preventDefault(); const value = input.value;
    if (value.trim()) { history.push(value); if (history.length > 50) history.shift(); position = history.length; run(value); }
    input.value = '';
  });
  document.querySelectorAll('[data-command]').forEach(button => button.addEventListener('click', () => run(button.dataset.command)));
  input.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault(); position = Math.max(0, Math.min(history.length, position + (event.key === 'ArrowUp' ? -1 : 1))); input.value = history[position] || '';
    }
    if (event.key === 'Tab' && input.value) {
      const matches = [...Object.keys(commands), 'clear'].filter(name => name.startsWith(input.value.trim().toLowerCase()));
      if (matches.length === 1) { event.preventDefault(); input.value = matches[0]; }
    }
  });
  const languageSelect = document.querySelector('#terminal-language');
  const initialLanguage = new URLSearchParams(location.search).get('lang');
  if (Object.hasOwn(translations, initialLanguage)) lang = initialLanguage;
  languageSelect.value = lang;
  function applyLanguage() {
    const ui = translations[lang];
    document.documentElement.lang = lang;
    const set = (selector, text) => { document.querySelector(selector).textContent = text; };
    set('header > a:last-of-type', ui.classic);
    document.querySelector('header > a:last-of-type').href = 'portfolio.html?lang=' + lang;
    document.querySelector('.brand').href = 'index.html?lang=' + lang;
    set('.eyebrow', ui.eyebrow);
    const title = document.querySelector('h1');
    const accent = document.createElement('span'); accent.textContent = ui.title[1];
    title.replaceChildren(ui.title[0], document.createElement('br'), accent);
    set('.intro p', ui.intro); set('.hero-actions a', '↓ ' + ui.download);
    set('.explore-start strong', ui.start); set('.explore-start p', ui.guide);
    set('.start-actions [data-command="experiencia"]', ui.experience);
    set('.start-actions [data-command="referencias"]', ui.references);
    set('aside > p', ui.explore);
    document.querySelectorAll('.commands button').forEach((button, i) => {
      const number = button.querySelector('span');
      button.replaceChildren(number, ' ' + ui.nav[i]);
    });
    set('.bottom > span:first-child', ui.keys); set('#explore-status', ui.next);
    set('footer [data-copy-email]', ui.contact);
    input.placeholder = ui.placeholder; input.setAttribute('aria-label', ui.command);
    document.querySelector('form button').setAttribute('aria-label', ui.execute);
    languageSelect.setAttribute('aria-label', lang === 'ca' ? 'Idioma de la terminal' : lang === 'en' ? 'Terminal language' : 'Idioma de la terminal');
    document.querySelector('.workspace').setAttribute('aria-label', ui.eyebrow);
    document.querySelector('.commands').setAttribute('aria-label', ui.explore);
    document.querySelector('.explore-start').setAttribute('aria-label', ui.start);
    output.setAttribute('aria-label', ui.explore);
    // ponytail: rebuild the current transcript on language change; max 50 entries.
    const values = Array.from(output.querySelectorAll('.prompt')).map(item => item.textContent.replace('oriol@it:~$ ', ''));
    output.replaceChildren();
    (values.length ? values : ['whoami']).forEach(run);
  }
  languageSelect.addEventListener('change', () => { lang = languageSelect.value; applyLanguage(); });
  applyLanguage();
}
if (typeof module !== 'undefined') module.exports = {resolveCommand, commands, links, localizedCommands, translations};
