const { copy, educationDetails, skills } = window.portfolioData;
const email = ["oriolchiva8", "gmail.com"].join("@");
const getLang = () => ["en", "ca"].includes(document.documentElement.lang) ? document.documentElement.lang : "es";
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

document.querySelectorAll("[data-i18n]").forEach((node) => {
  console.assert(copy.es[node.dataset.i18n] && copy.en[node.dataset.i18n], `Missing i18n: ${node.dataset.i18n}`);
});

document.querySelector("[data-search-toggle]").innerHTML = icons.search;
renderSkills();
setThemeButton(document.documentElement.dataset.theme === "dark");
setDeviceButton(document.documentElement.dataset.device === "mobile");

