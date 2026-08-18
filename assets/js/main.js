const { copy, educationDetails, skills } = window.portfolioData;
const email = ["oriolchiva8", "gmail.com"].join("@");
const discord = "chiva8";
const getLang = () => ["en", "ca"].includes(document.documentElement.lang) ? document.documentElement.lang : "es";
const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;
let headerTicking = false;
const projectDetails = {
  es: {
    permisos: {
      title: "Gestor permisos laborales",
      grade: "PROYECTO FINAL DAW",
      description: "Aplicación Full-Stack para centralizar la gestión de permisos, vacaciones y solicitudes laborales dentro de una empresa. Incluye autenticación, diferentes roles de usuario, panel administrativo, calendario y seguimiento del estado de las solicitudes.",
      note: "Desarrollé tanto el frontend como el backend, utilizando Angular y TypeScript para la interfaz y Node.js, Express y MongoDB para la API y persistencia de datos, además de Docker para facilitar la ejecución y despliegue del entorno.",
      context: "El proyecto nació como trabajo final de DAW y, tras la entrega, continué desarrollándolo y ampliándolo para convertirlo en una solución adaptable a diferentes empresas."
    },
    onepiece: {
      title: "One Piece",
      grade: "FRONTEND · REACT",
      description: "Aplicación CRUD desarrollada con React y Vite para gestionar personajes de One Piece. Permite consultar, crear, editar, eliminar y reservar personajes mediante una interfaz inspirada en el universo de la serie.",
      note: "El proyecto utiliza React Router para la navegación, Context API para la gestión del estado y json-server como API durante el desarrollo."
    },
    flota: {
      title: "Hundir la Flota",
      grade: "FULL-STACK · PYTHON / FASTAPI",
      description: "Juego web completo desarrollado con backend en Python y FastAPI y frontend en HTML, CSS y JavaScript.",
      note: "Implementa generación dinámica del tablero, diferentes niveles de dificultad, sistema de disparos, puntuación, temporizador y estadísticas de partida, integrando la lógica del juego con una API desarrollada específicamente para la aplicación."
    },
    videojuegos: {
      title: "Catálogo Videojuegos",
      grade: "MOBILE · REACT NATIVE",
      description: "Aplicación móvil inspirada en Metacritic para consultar un catálogo de videojuegos, puntuaciones, plataformas y descripciones.",
      note: "Desarrollada con React Native y Expo, con una interfaz diseñada específicamente para dispositivos móviles y enfocada en facilitar la consulta y navegación del catálogo."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "PROYECTO PROFESIONAL · BIOINFORMÁTICA",
      description: "Aplicación desarrollada en un entorno profesional de investigación biomédica para explorar datos de expresión génica.",
      note: "Permite cargar matrices de expresión, escalar datos, seleccionar genes y generar mapas de calor interactivos mediante clustering jerárquico, facilitando la exploración y visualización de patrones en los datos."
    }
  },
  en: {
    permisos: {
      title: "Work Leave Manager",
      grade: "FINAL DAW PROJECT",
      description: "Full-Stack application for centralizing leave, holiday, and workplace request management within a company. It includes authentication, different user roles, an admin panel, a calendar, and request status tracking.",
      note: "I developed both the frontend and backend, using Angular and TypeScript for the interface and Node.js, Express, and MongoDB for the API and data persistence, as well as Docker to simplify running and deploying the environment.",
      context: "The project began as my final DAW assignment. After delivery, I continued developing and expanding it into a solution adaptable to different companies."
    },
    onepiece: {
      title: "One Piece",
      grade: "FRONTEND · REACT",
      description: "CRUD application built with React and Vite for managing One Piece characters. Users can browse, create, edit, delete, and reserve characters through an interface inspired by the series.",
      note: "The project uses React Router for navigation, Context API for state management, and json-server as the development API."
    },
    flota: {
      title: "Battleship",
      grade: "FULL-STACK · PYTHON / FASTAPI",
      description: "Complete web game built with a Python and FastAPI backend and an HTML, CSS, and JavaScript frontend.",
      note: "It implements dynamic board generation, multiple difficulty levels, a shooting system, scoring, a timer, and game statistics, integrating the game logic with an API developed specifically for the application."
    },
    videojuegos: {
      title: "Video Game Catalog",
      grade: "MOBILE · REACT NATIVE",
      description: "Mobile application inspired by Metacritic for browsing a catalog of video games, scores, platforms, and descriptions.",
      note: "Built with React Native and Expo, with an interface designed specifically for mobile devices and focused on making the catalog easy to browse and navigate."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "PROFESSIONAL PROJECT · BIOINFORMATICS",
      description: "Application developed in a professional biomedical research environment to explore gene expression data.",
      note: "It supports loading expression matrices, scaling data, selecting genes, and generating interactive heatmaps through hierarchical clustering, making it easier to explore and visualize patterns in the data."
    }
  },
  ca: {
    permisos: {
      title: "Gestor de permisos laborals",
      grade: "PROJECTE FINAL DAW",
      description: "Aplicació Full-Stack per centralitzar la gestió de permisos, vacances i sol·licituds laborals dins d'una empresa. Inclou autenticació, diferents rols d'usuari, panell administratiu, calendari i seguiment de l'estat de les sol·licituds.",
      note: "Vaig desenvolupar tant el frontend com el backend, utilitzant Angular i TypeScript per a la interfície i Node.js, Express i MongoDB per a l'API i la persistència de dades, a més de Docker per facilitar l'execució i el desplegament de l'entorn.",
      context: "El projecte va néixer com a treball final de DAW i, després del lliurament, vaig continuar desenvolupant-lo i ampliant-lo per convertir-lo en una solució adaptable a diferents empreses."
    },
    onepiece: {
      title: "One Piece",
      grade: "FRONTEND · REACT",
      description: "Aplicació CRUD desenvolupada amb React i Vite per gestionar personatges de One Piece. Permet consultar, crear, editar, eliminar i reservar personatges mitjançant una interfície inspirada en l'univers de la sèrie.",
      note: "El projecte utilitza React Router per a la navegació, Context API per a la gestió de l'estat i json-server com a API durant el desenvolupament."
    },
    flota: {
      title: "Enfonsar la Flota",
      grade: "FULL-STACK · PYTHON / FASTAPI",
      description: "Joc web complet desenvolupat amb backend en Python i FastAPI i frontend en HTML, CSS i JavaScript.",
      note: "Implementa generació dinàmica del tauler, diferents nivells de dificultat, sistema de trets, puntuació, temporitzador i estadístiques de partida, integrant la lògica del joc amb una API desenvolupada específicament per a l'aplicació."
    },
    videojuegos: {
      title: "Catàleg Videojocs",
      grade: "MOBILE · REACT NATIVE",
      description: "Aplicació mòbil inspirada en Metacritic per consultar un catàleg de videojocs, puntuacions, plataformes i descripcions.",
      note: "Desenvolupada amb React Native i Expo, amb una interfície dissenyada específicament per a dispositius mòbils i enfocada a facilitar la consulta i navegació del catàleg."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "PROJECTE PROFESSIONAL · BIOINFORMÀTICA",
      description: "Aplicació desenvolupada en un entorn professional de recerca biomèdica per explorar dades d'expressió gènica.",
      note: "Permet carregar matrius d'expressió, escalar dades, seleccionar gens i generar mapes de calor interactius mitjançant clustering jeràrquic, facilitant l'exploració i visualització de patrons en les dades."
    }
  }
}

const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z"></path></svg>',
  sun: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32 1.41-1.41"></path></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="11" rx="1.5"></rect><path d="M8 20h8m-4-4v4"></path></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="3" width="8" height="18" rx="2"></rect><path d="M11 18h2"></path></svg>'
};

const updateHeader = () => {
  const current = Math.max(window.scrollY, 0);
  const atTop = current < 48;
  header.classList.toggle("at-top", atTop);

  if (atTop) {
    header.classList.remove("is-hidden");
  } else if (current > lastScrollY + 14 && current > 180) {
    header.classList.add("is-hidden");
  } else if (current < lastScrollY - 14) {
    header.classList.remove("is-hidden");
  }

  lastScrollY = current;
  headerTicking = false;
};

const renderTags = () => {
  document.querySelectorAll(".tags").forEach((node) => {
    if (node.dataset.rendered) return;
    node.dataset.rendered = "true";
    node.innerHTML = (node.textContent.trim().match(/React Native|Machine Learning|Big Data|\S+/g) || []).map((tag) => `<span>${tag}</span>`).join("");
  });
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

const renderSkills = () => {
  const skillByName = Object.fromEntries(skills.map(([icon, label]) => [label, icon]));
  const groups = [
    ["skillsLanguages", ["Python", "TypeScript", "JavaScript", "Java", "PHP", "SQL", "R"]],
    ["skillsFrontend", ["Angular", "React", "Next.js", "React Native", "HTML", "CSS", "SCSS", "Vite"]],
    ["skillsBackend", ["Node.js", "NestJS", "FastAPI", "GraphQL", "Swagger/OpenAPI"]],
    ["skillsDatabases", ["PostgreSQL", "MongoDB", "Firestore"]],
    ["skillsDevops", ["Docker", "Git", "GitHub", "Slack", "Linux", "Shell", "AWS", "Playwright"]],
    ["skillsData", ["Machine Learning", "Shiny"]]
  ];
  document.querySelector("[data-skills-list]").innerHTML = groups.map(([title, labels]) => (
    `<section class="skill-group"><h3>${copy[getLang()][title]}</h3><div class="skill-cloud">${labels.map((label) => `<span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skillByName[label]}" alt="">${label}</span>`).join("")}</div></section>`
  )).join("");
};

const setLang = (lang) => {
  document.documentElement.lang = lang;
  document.querySelector("[data-lang-toggle]").textContent = ({ es: "EN", en: "CA", ca: "ES" })[lang];
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[lang][node.dataset.i18n];
  });
  renderSkills();
};

const showToast = (message) => {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1700);
};

const openDialog = (dialog) => {
  if (dialog.showModal) {
    dialog.showModal();
    return;
  }
  dialog.setAttribute("open", "");
  dialog.classList.add("dialog-fallback");
};
document.querySelector("[data-lang-toggle]").addEventListener("click", () => {
  setLang(({ es: "en", en: "ca", ca: "es" })[getLang()]);
});

document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
  const root = document.documentElement;
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  setThemeButton(dark);
});

window.addEventListener("scroll", () => {
  if (headerTicking) return;
  headerTicking = true;
  requestAnimationFrame(updateHeader);
}, { passive: true });
updateHeader();

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

const openEducationDialog = (key) => {
  const data = educationDetails[getLang()][key];
  const dialog = document.querySelector("[data-education-dialog]");
  dialog.querySelector("[data-education-period]").textContent = data.period;
  dialog.querySelector("[data-education-title]").textContent = data.title;
  dialog.querySelector("[data-education-center]").textContent = data.center;
  dialog.querySelector("[data-education-description]").textContent = data.description;
  dialog.querySelector("[data-education-duration]").textContent = data.duration;
  dialog.querySelector("[data-education-duration-label]").textContent = data.durationLabel || copy[getLang()].educationDurationLabel;
  dialog.querySelector("[data-education-mode]").textContent = data.mode;
  dialog.querySelector("[data-education-mode-label]").textContent = data.modeLabel || copy[getLang()].educationModeLabel;
  dialog.querySelector("[data-education-tags]").textContent = data.tags;
  const courses = dialog.querySelector("[data-education-courses]");
  courses.innerHTML = data.courses ? data.courses.map(([title, hours, status, certificate]) => `<article><strong>${title}</strong><span>${hours}</span><small>${status}</small>${certificate ? `<a class="course-certificate" href="${certificate}" target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h9l5 5v15H6V2Zm8 1.8V8h4.2L14 3.8ZM8 4v16h10V10h-6V4H8Zm2 8h6v2h-6v-2Zm0 4h6v2h-6v-2Z"/></svg><span>PDF · ${copy[getLang()].certificateLink} ↗</span></a>` : ""}</article>`).join("") : "";
  openDialog(dialog);
};

document.querySelectorAll("[data-education-open]").forEach((card) => {
  card.addEventListener("click", () => openEducationDialog(card.dataset.educationOpen));
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openEducationDialog(card.dataset.educationOpen);
  });
});

const openProjectDialog = (key) => {
  const data = projectDetails[getLang()][key];
  if (!data) return;
  const dialog = document.querySelector("[data-project-dialog]");
  dialog.querySelector("[data-project-title]").textContent = data.title;
  dialog.querySelector("[data-project-grade]").textContent = data.grade;
  dialog.querySelector("[data-project-description]").textContent = data.description;
  dialog.querySelector("[data-project-note]").textContent = data.note;
  dialog.querySelector("[data-project-note]").hidden = !data.note;
  dialog.querySelector("[data-project-context]").textContent = data.context || "";
  dialog.querySelector("[data-project-context]").hidden = !data.context;
  openDialog(dialog);
};

document.querySelectorAll("[data-project]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    openProjectDialog(card.dataset.project);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target.closest("a")) return;
    event.preventDefault();
    openProjectDialog(card.dataset.project);
  });
});

document.querySelector("[data-copy-discord]").addEventListener("click", async () => {
  await navigator.clipboard.writeText(discord);
  showToast(copy[getLang()].discordCopied);
});

document.querySelector("[data-search-toggle]").addEventListener("click", () => {
  const dialog = document.querySelector("[data-search-dialog]");
  openDialog(dialog);
  dialog.querySelector("input").focus();
});

document.querySelectorAll("[data-download-cv]").forEach((link) => {
  link.addEventListener("click", async (event) => {
    if (location.protocol === "file:") return;
    event.preventDefault();
    const response = await fetch(link.href);
    const blobUrl = URL.createObjectURL(await response.blob());
    const download = document.createElement("a");
    download.href = blobUrl;
    download.download = link.download;
    document.body.append(download);
    download.click();
    download.remove();
    URL.revokeObjectURL(blobUrl);
  });
});

const searchInput = document.querySelector("[data-search-input]");

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;
  const card = [...document.querySelectorAll(".project-card")].find((project) => (
    `${project.dataset.search} ${project.textContent}`.toLowerCase().includes(query)
  ));
  if (!card) {
    showToast("No encontrado");
    return;
  }
  const dialog = document.querySelector("[data-search-dialog]");
  if (dialog.close) dialog.close();
  dialog.removeAttribute("open");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
});

const animateMetric = (node) => {
  const target = Number(node.dataset.count);
  const decimals = node.dataset.count.includes(".") ? 2 : 0;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / 900, 1);
    node.textContent = (target * progress).toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const metricsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateMetric(entry.target);
    observer.unobserve(entry.target);
  });
});

document.querySelectorAll("[data-count]").forEach((node) => metricsObserver.observe(node));

document.querySelectorAll(".summary, .metrics, .section, .resume-item, .education-card").forEach((node) => {
  node.dataset.reveal = "";
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14 });

document.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));


document.querySelectorAll("[data-i18n]").forEach((node) => {
  console.assert(copy.es[node.dataset.i18n] && copy.en[node.dataset.i18n], `Missing i18n: ${node.dataset.i18n}`);
});

const showHeaderAtTop = () => {
  header.classList.remove("is-hidden");
  header.classList.add("at-top");
};

const toTop = document.querySelector(".to-top");
toTop?.addEventListener("click", showHeaderAtTop);
toTop?.addEventListener("keydown", (event) => {
  if (event.key === " ") showHeaderAtTop();
});

document.querySelector("[data-search-toggle]").innerHTML = icons.search;
renderSkills();
renderTags();
setThemeButton(document.documentElement.dataset.theme === "dark");
setDeviceButton(document.documentElement.dataset.device === "mobile");



