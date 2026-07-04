const { copy, educationDetails, skills } = window.portfolioData;
const email = ["oriolchiva8", "gmail.com"].join("@");
const getLang = () => ["en", "ca"].includes(document.documentElement.lang) ? document.documentElement.lang : "es";
const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;
let headerTicking = false;
const projectDetails = {
  es: {
    permisos: {
      title: "Gestor permisos laborales",
      grade: "Nota inicial: 8 / 10",
      description: "Aplicación web para gestionar permisos, vacaciones y disponibilidad del equipo. Es el proyecto más orientado a producto: roles, panel administrativo, calendario y una interfaz pensada para uso real.",
      note: "Después de la entrega lo amplié para que sea utilizable en cualquier empresa."
    },
    onepiece: {
      title: "One Piece",
      grade: "Nota: 9,50 / 10",
      description: "CRUD completo hecho con React, Vite, Router, Context API y json-server. Permite consultar, crear, modificar, eliminar y reservar personajes con una estética muy marcada.",
      note: "El medio punto que faltó fue por la memoria, no por el funcionamiento de la aplicación."
    },
    flota: {
      title: "Hundir la Flota",
      grade: "Nota: 9,60 / 10",
      description: "Juego completo con backend FastAPI y frontend HTML, CSS y JavaScript. Incluye generación de tablero, dificultad, disparos, puntuación, temporizador y estadísticas de partida.",
      note: "Proyecto formativo con captura real del frontend funcionando."
    },
    videojuegos: {
      title: "Catálogo Videojuegos",
      grade: "Nota: 10 / 10",
      description: "Catálogo interactivo inspirado en Metacritic para consultar videojuegos, puntuaciones, plataformas y descripciones. La interfaz está pensada para lectura rápida en móvil.",
      note: "Proyecto calificado con la máxima nota."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "Proyecto para empresa",
      description: "Aplicación bioinformática para cargar matrices de expresión génica, escalar datos, seleccionar genes y generar un heatmap con clustering jerárquico interactivo.",
      note: ""
    }
  },
  en: {
    permisos: {
      title: "Work Leave Manager",
      grade: "Initial grade: 8 / 10",
      description: "Web app for managing leave requests, holidays, and team availability. It is the most product-oriented project: roles, admin panel, calendar, and an interface designed for real use.",
      note: "After delivery I expanded it so it can be usable for any company."
    },
    onepiece: {
      title: "One Piece",
      grade: "Grade: 9.50 / 10",
      description: "Full CRUD built with React, Vite, Router, Context API, and json-server. It lets users view, create, edit, delete, and reserve characters with a strong visual style.",
      note: "The missing half point was for the written report, not for the application itself."
    },
    flota: {
      title: "Battleship",
      grade: "Grade: 9.60 / 10",
      description: "Complete game with a FastAPI backend and HTML, CSS, and JavaScript frontend. It includes board generation, difficulty, shots, score, timer, and match statistics.",
      note: "Training project shown with a real screenshot of the frontend running."
    },
    videojuegos: {
      title: "Video Game Catalog",
      grade: "Grade: 10 / 10",
      description: "Interactive catalog inspired by Metacritic for browsing video games, scores, platforms, and descriptions. The interface is designed for quick mobile reading.",
      note: "Project graded with the maximum score."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "Company project",
      description: "Bioinformatics app for loading gene expression matrices, scaling data, selecting genes, and generating a heatmap with interactive hierarchical clustering.",
      note: ""
    }
  },
  ca: {
    permisos: {
      title: "Gestor de permisos laborals",
      grade: "Nota inicial: 8 / 10",
      description: "Aplicació web per gestionar permisos, vacances i disponibilitat de l'equip. És el projecte més orientat a producte: rols, panell administratiu, calendari i una interfície pensada per a ús real.",
      note: "Després del lliurament el vaig ampliar perquè sigui utilitzable per qualsevol empresa."
    },
    onepiece: {
      title: "One Piece",
      grade: "Nota: 9,50 / 10",
      description: "CRUD complet fet amb React, Vite, Router, Context API i json-server. Permet consultar, crear, modificar, eliminar i reservar personatges amb una estètica molt marcada.",
      note: "El mig punt que faltava va ser per la memòria, no pel funcionament de l'aplicació."
    },
    flota: {
      title: "Enfonsar la Flota",
      grade: "Nota: 9,60 / 10",
      description: "Joc complet amb backend FastAPI i frontend HTML, CSS i JavaScript. Inclou generació de tauler, dificultat, trets, puntuació, temporitzador i estadístiques de partida.",
      note: "Projecte formatiu amb captura real del frontend funcionant."
    },
    videojuegos: {
      title: "Catàleg Videojocs",
      grade: "Nota: 10 / 10",
      description: "Catàleg interactiu inspirat en Metacritic per consultar videojocs, puntuacions, plataformes i descripcions. La interfície està pensada per a lectura ràpida en mòbil.",
      note: "Projecte qualificat amb la nota màxima."
    },
    heatmap: {
      title: "Cluster Heatmap App",
      grade: "Projecte per a empresa",
      description: "Aplicació bioinformàtica per carregar matrius d'expressió gènica, escalar dades, seleccionar gens i generar un heatmap amb clustering jeràrquic interactiu.",
      note: ""
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
  document.querySelector("[data-skills-list]").innerHTML = skills.map(([icon, label]) => (
    `<span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}" alt="">${label}</span>`
  )).join("");
};

const setLang = (lang) => {
  document.documentElement.lang = lang;
  document.querySelector("[data-lang-toggle]").textContent = ({ es: "EN", en: "CA", ca: "ES" })[lang];
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
  dialog.querySelector("[data-education-mode]").textContent = data.mode;
  dialog.querySelector("[data-education-tags]").textContent = data.tags;
  const courses = dialog.querySelector("[data-education-courses]");
  courses.innerHTML = data.courses ? data.courses.map(([title, hours, status]) => `<article><strong>${title}</strong><span>${hours}</span><small>${status}</small></article>`).join("") : "";
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



