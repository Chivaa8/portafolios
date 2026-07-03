const email = ["oriolchiva8", "gmail.com"].join("@");

const copy = {
  es: {
    navProjects: "Proyectos",
    navExperience: "Experiencia",
    navContact: "Contacto",
    role: "IT & Web Developer",
    lead: "Técnico Superior en Desarrollo de Aplicaciones Web. Construyo proyectos con TypeScript, React, FastAPI, Python y R Shiny, con base real en sistemas, soporte IT y bioinformática.",
    viewCv: "Ver CV",
    cvCta: "Descargar CV",
    copyEmail: "Copiar email",
    summary1: "Me interesa construir software que sirva para algo: interfaces claras, APIs que funcionan, automatizaciones útiles y visualizaciones de datos que reducen trabajo manual.",
    summary2: "DAW terminado, SMR como base de sistemas, experiencia en IT Support y trabajo con R/Shiny en un entorno de investigación biomédica.",
    statRepos: "repos públicos",
    statDaw: "terminado",
    statPython: "nota en Python",
    experienceTitle: "Experiencia",
    bioTag: "Bioinformática",
    bioPoint1: "Visualización de datos bioinformáticos con R y Shiny.",
    bioPoint2: "Trabajo en entorno Linux dentro de investigación biomédica.",
    bioPoint3: "Conversión de datos técnicos en interfaces explorables.",
    itPoint1: "Soporte técnico de hardware y software en entorno farmacéutico.",
    itPoint2: "Mantenimiento de equipos y sistemas informáticos.",
    itPoint3: "Gestión básica de incidencias y soporte a usuarios.",
    projectsTitle: "Proyectos",
    code: "Código",
    repoPermisos: "Trabajo final de DAW-DAM: producto web más serio, con TypeScript y estructura pensada para un caso real.",
    repoOnePiece: "CRUD completo con React, Vite, Router, Context API y json-server. Proyecto formativo con 9.5/10.",
    repoFlota: "Juego completo con backend FastAPI, frontend HTML/CSS/JS, dificultad, puntuación, temporizador y estadísticas.",
    repoQR: "Herramienta práctica: genera un A4 con QR personalizado, logo, marco, tipografía y enlace directo a reseñas.",
    repoHeatmap: "App bioinformática para explorar expresión génica con mapas de calor y clustering jerárquico.",
    educationTitle: "Educación",
    dawText: "Frontend, backend, bases de datos, despliegue y proyectos web completos.",
    smrText: "Base técnica en sistemas, redes, mantenimiento y soporte informático.",
    contactTitle: "Contacto",
    contactText: "Si quieres hablar conmigo, copia mi email sin que quede visible en pantalla.",
    recommendationText: "También tengo cartas de recomendación y certificados disponibles para revisar.",
    recommendation1: "Carta recomendación 1",
    recommendation2: "Carta recomendación 2",
    certificate: "Certificado",
    searchHelp: "Filtra proyectos por tecnología o nombre.",
    copied: "Email copiado"
  },
  en: {
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    role: "IT & Web Developer",
    lead: "Higher Technician in Web Application Development. I build projects with TypeScript, React, FastAPI, Python, and R Shiny, backed by systems, IT support, and bioinformatics experience.",
    viewCv: "View CV",
    cvCta: "Download CV",
    copyEmail: "Copy email",
    summary1: "I care about building useful software: clear interfaces, working APIs, useful automations, and data visualizations that reduce manual work.",
    summary2: "DAW completed, SMR systems background, IT Support experience, and R/Shiny work in a biomedical research environment.",
    statRepos: "public repos",
    statDaw: "completed",
    statPython: "Python grade",
    experienceTitle: "Experience",
    bioTag: "Bioinformatics",
    bioPoint1: "Bioinformatics data visualization with R and Shiny.",
    bioPoint2: "Linux work inside a biomedical research environment.",
    bioPoint3: "Turning technical data into explorable interfaces.",
    itPoint1: "Hardware and software support in a pharmaceutical environment.",
    itPoint2: "Equipment and computer systems maintenance.",
    itPoint3: "Basic incident management and user support.",
    projectsTitle: "Projects",
    code: "Code",
    repoPermisos: "Final DAW-DAM project: a more serious web product with TypeScript and structure for a real use case.",
    repoOnePiece: "Full CRUD app with React, Vite, Router, Context API, and json-server. Training project graded 9.5/10.",
    repoFlota: "Complete game with FastAPI backend, HTML/CSS/JS frontend, difficulty, score, timer, and stats.",
    repoQR: "Practical tool: generates a custom A4 QR with logo, frame, typography, and direct reviews link.",
    repoHeatmap: "Bioinformatics app for exploring gene expression with heatmaps and hierarchical clustering.",
    educationTitle: "Education",
    dawText: "Frontend, backend, databases, deployment, and complete web projects.",
    smrText: "Technical base in systems, networks, maintenance, and IT support.",
    contactTitle: "Contact",
    contactText: "If you want to talk, copy my email without leaving it visible on screen.",
    recommendationText: "I also have recommendation letters and certificates available for review.",
    recommendation1: "Recommendation letter 1",
    recommendation2: "Recommendation letter 2",
    certificate: "Certificate",
    searchHelp: "Filter projects by technology or name.",
    copied: "Email copied"
  }
};

const getLang = () => document.documentElement.lang === "en" ? "en" : "es";

const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z"></path></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"></path></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5"></rect><path d="M8 20h8m-4-4v4"></path></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="3" width="8" height="18" rx="2"></rect><path d="M11 18h2"></path></svg>'
};

const setThemeButton = (dark) => {
  const button = document.querySelector("[data-theme-toggle]");
  button.innerHTML = dark ? icons.sun : icons.moon;
  button.setAttribute("aria-label", dark ? "Tema claro" : "Tema oscuro");
  button.title = dark ? "Tema claro" : "Tema oscuro";
};

const setDeviceButton = (mobile) => {
  const button = document.querySelector("[data-device-toggle]");
  button.innerHTML = mobile ? icons.monitor : icons.phone;
  button.setAttribute("aria-label", mobile ? "Vista escritorio" : "Vista movil");
  button.title = mobile ? "Vista escritorio" : "Vista movil";
};

const setLang = (lang) => {
  document.documentElement.lang = lang;
  document.querySelector("[data-lang-toggle]").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[lang][node.dataset.i18n];
  });
};

const showToast = (message) => {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1700);
};

document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  setLang(getLang() === "es" ? "en" : "es");
});

document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  setThemeButton(dark);
});

document.querySelector("[data-device-toggle]").addEventListener("click", () => {
  const root = document.documentElement;
  const mobile = root.dataset.device !== "mobile";
  root.dataset.device = mobile ? "mobile" : "desktop";
  setDeviceButton(mobile);
});

document.querySelectorAll("[data-copy-email]").forEach((button) => {
  button.addEventListener("click", async () => {
    await navigator.clipboard.writeText(email);
    showToast(copy[getLang()].copied);
  });
});

document.querySelector("[data-search-toggle]").addEventListener("click", () => {
  const dialog = document.querySelector("[data-search-dialog]");
  dialog.showModal();
  dialog.querySelector("input").focus();
});

document.querySelector("[data-search-input]").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.toggle("is-hidden", query && !card.dataset.search.includes(query));
  });
});

document.querySelectorAll("[data-i18n]").forEach((node) => {
  console.assert(copy.es[node.dataset.i18n] && copy.en[node.dataset.i18n], `Missing i18n: ${node.dataset.i18n}`);
});

document.querySelector("[data-search-toggle]").innerHTML = icons.search;
setThemeButton(document.documentElement.dataset.theme === "dark");
setDeviceButton(document.documentElement.dataset.device === "mobile");
