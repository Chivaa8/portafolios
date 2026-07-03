const email = ["oriolchiva8", "gmail.com"].join("@");

const copy = {
  es: {
    navProjects: "Proyectos",
    navExperience: "Experiencia",
    navContact: "Contacto",
    role: "Junior IT & Web Developer",
    lead: "Tecnico Superior en Desarrollo de Aplicaciones Web. Construyo proyectos con TypeScript, React, FastAPI, Python y R Shiny, con base real en sistemas, soporte IT y bioinformatica.",
    viewCv: "Ver CV",
    cvCta: "Descargar CV",
    copyEmail: "Copiar email",
    summary1: "Me interesa construir software que sirva para algo: interfaces claras, APIs que funcionan, automatizaciones utiles y visualizaciones de datos que reducen trabajo manual.",
    summary2: "DAW terminado, SMR como base de sistemas, experiencia en IT Support y trabajo con R/Shiny en un entorno de investigacion biomedica.",
    statRepos: "repos publicos",
    statDaw: "terminado",
    statPython: "nota en Python",
    experienceTitle: "Experiencia",
    bioTag: "Bioinformatica",
    bioPoint1: "Visualizacion de datos bioinformaticos con R y Shiny.",
    bioPoint2: "Trabajo en entorno Linux dentro de investigacion biomedica.",
    bioPoint3: "Conversion de datos tecnicos en interfaces explorables.",
    itPoint1: "Soporte tecnico de hardware y software en entorno farmaceutico.",
    itPoint2: "Mantenimiento de equipos y sistemas informaticos.",
    itPoint3: "Gestion basica de incidencias y soporte a usuarios.",
    projectsTitle: "Proyectos",
    code: "Codigo",
    repoPermisos: "Trabajo final de DAW-DAM: producto web mas serio, con TypeScript y estructura pensada para un caso real.",
    repoOnePiece: "CRUD completo con React, Vite, Router, Context API y json-server. Proyecto formativo con 9.5/10.",
    repoFlota: "Juego completo con backend FastAPI, frontend HTML/CSS/JS, dificultad, puntuacion, temporizador y estadisticas.",
    repoQR: "Herramienta practica: genera un A4 con QR personalizado, logo, marco, tipografia y enlace directo a resenas.",
    repoHeatmap: "App bioinformatica para explorar expresion genica con mapas de calor y clustering jerarquico.",
    educationTitle: "Educacion",
    dawText: "Frontend, backend, bases de datos, despliegue y proyectos web completos.",
    smrText: "Base tecnica en sistemas, redes, mantenimiento y soporte informatico.",
    contactTitle: "Contacto",
    contactText: "Si quieres hablar conmigo, copia mi email sin que quede visible en pantalla.",
    searchHelp: "Filtra proyectos por tecnologia o nombre.",
    copied: "Email copiado"
  },
  en: {
    navProjects: "Projects",
    navExperience: "Experience",
    navContact: "Contact",
    role: "Junior IT & Web Developer",
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
    searchHelp: "Filter projects by technology or name.",
    copied: "Email copied"
  }
};

const getLang = () => document.documentElement.lang === "en" ? "en" : "es";

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
  document.querySelector("[data-theme-toggle]").textContent = dark ? "Light Theme" : "Dark Theme";
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
