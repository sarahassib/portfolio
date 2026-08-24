const translations = {
  fr: {
    skip: "Aller au contenu",
    navProjects: "Projets",
    navExperience: "Expérience",
    navEducation: "Formation",
    navSkills: "Compétences",
    navContact: "Contact",
    heroEyebrow: "Growth Marketing + Automation",
    heroTitle: "L'acquisition pensée pour convertir.",
    heroIntro: "Marketing data-driven, automatisation et exécution technique pour générer des leads qualifiés.",
    viewProjects: "Voir mes projets",
    downloadCv: "Télécharger mon CV",
    visualNote: "De l'attention à la conversion",
    metricLeads: "prospects qualifiés par mois",
    metricCampaigns: "campagnes actives par semaine",
    metricProjects: "projets marketing-tech",
    projectsTitle: "Des projets pensés comme des outils de croissance.",
    projectsIntro: "Chaque projet relie un besoin marketing à une solution concrète, mesurable et simple à utiliser.",
    placeholder: "Ajoutez votre capture dans assets/projects",
    project1Desc: "Plateforme full-stack pour suivre le tunnel Leads, MQL et SQL, calculer le CPL et le ROI, puis exporter des rapports PDF.",
    project2Desc: "Site de restauration responsive avec panier dynamique et commandes automatisées vers WhatsApp.",
    project3Desc: "Landing page à haute conversion avec validation des données et centralisation automatique des leads dans Google Sheets.",
    openProject: "Ouvrir le projet",
    experienceTitle: "Expérience orientée résultats.",
    experienceIntro: "Une pratique qui relie acquisition, contenu, design et maturation commerciale.",
    present: "Aujourd'hui",
    exp1Desc: "Pilotage de Meta Ads, génération de 250 à 300 prospects mensuels, prospection B2B, contenu social et nurturing par WhatsApp et email.",
    exp2Desc: "Création de publications, catalogues et contenus pour les réseaux sociaux avec Canva, Photoshop et Illustrator.",
    exp3Desc: "Conception de packagings pour des compléments alimentaires.",
    educationTitle: "Formation et certifications.",
    educationIntro: "Un parcours construit entre développement digital, systèmes et marketing technique.",
    degree1: "Ingénierie Sécurité et Administration des Réseaux et Systèmes, ENSAB",
    degree2Title: "Technicien Spécialisé",
    degree2: "Développement Digital, OFPPT",
    degree3: "Sciences Physiques, Al Amal",
    certEmptyTitle: "Prochainement",
    certEmptyText: "Les nouvelles certifications ajoutées depuis l'espace admin apparaîtront ici.",
    skillsTitle: "Compétences et outils.",
    contactTitle: "Parlons croissance, automatisation et marketing technique.",
    contactIntro: "Je suis disponible pour des opportunités en Growth Marketing, Acquisition Digitale et Marketing Automation.",
    formName: "Nom",
    formMessage: "Message",
    sendMessage: "Envoyer le message",
    adminLink: "Espace admin",
    themeLight: "Clair",
    themeDark: "Sombre",
    formSuccess: "Votre application email va s'ouvrir avec le message préparé.",
    formError: "Veuillez compléter tous les champs avec une adresse email valide."
  },
  en: {
    skip: "Skip to content",
    navProjects: "Projects",
    navExperience: "Experience",
    navEducation: "Education",
    navSkills: "Skills",
    navContact: "Contact",
    heroEyebrow: "Growth Marketing + Automation",
    heroTitle: "Acquisition built to convert.",
    heroIntro: "Data-driven marketing, automation and technical execution built to generate qualified leads.",
    viewProjects: "View my projects",
    downloadCv: "Download my CV",
    visualNote: "From attention to conversion",
    metricLeads: "qualified prospects per month",
    metricCampaigns: "active campaigns per week",
    metricProjects: "marketing-tech projects",
    projectsTitle: "Projects designed as growth tools.",
    projectsIntro: "Each project connects a marketing need to a practical, measurable and easy-to-use solution.",
    placeholder: "Add your screenshot to assets/projects",
    project1Desc: "A full-stack platform for tracking Leads, MQL and SQL, calculating CPL and ROI, and exporting PDF reports.",
    project2Desc: "A responsive restaurant website with a dynamic cart and automated WhatsApp ordering.",
    project3Desc: "A conversion-focused landing page with data validation and automated lead capture in Google Sheets.",
    openProject: "Open project",
    experienceTitle: "Experience focused on results.",
    experienceIntro: "A practice connecting acquisition, content, design and commercial lead nurturing.",
    present: "Present",
    exp1Desc: "Meta Ads management, 250 to 300 monthly prospects, B2B outreach, social content, and lead nurturing through WhatsApp and email.",
    exp2Desc: "Advertising posts, catalogues and social media content created with Canva, Photoshop and Illustrator.",
    exp3Desc: "Packaging design for dietary supplements.",
    educationTitle: "Education and certifications.",
    educationIntro: "A path built across digital development, systems and technical marketing.",
    degree1: "Security Engineering and Network and Systems Administration, ENSAB",
    degree2Title: "Specialized Technician",
    degree2: "Digital Development, OFPPT",
    degree3: "Physical Sciences, Al Amal",
    certEmptyTitle: "Coming soon",
    certEmptyText: "New certifications added through the admin space will appear here.",
    skillsTitle: "Skills and tools.",
    contactTitle: "Let's discuss growth, automation and marketing technology.",
    contactIntro: "I am open to opportunities in Growth Marketing, Digital Acquisition and Marketing Automation.",
    formName: "Name",
    formMessage: "Message",
    sendMessage: "Send message",
    adminLink: "Admin space",
    themeLight: "Light",
    themeDark: "Dark",
    formSuccess: "Your email app will open with the message ready to send.",
    formError: "Please complete every field and enter a valid email address."
  }
};

const root = document.documentElement;
const languageButton = document.querySelector(".language-toggle");
const themeButton = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function setLanguage(language) {
  const dictionary = translations[language];
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  languageButton.textContent = language === "fr" ? "EN" : "FR";
  localStorage.setItem("sara-language", language);
  document.title = language === "fr"
    ? "Sara Hassib | Growth Marketing & Automation"
    : "Sara Hassib | Growth Marketing and Automation";
  updateThemeLabel(language);
  renderCustomContent(language);
}

function updateThemeLabel(language = root.lang) {
  const theme = root.dataset.theme;
  themeLabel.textContent = theme === "dark" ? translations[language].themeLight : translations[language].themeDark;
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("sara-theme", theme);
  updateThemeLabel();
}

const savedTheme = localStorage.getItem("sara-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
setTheme(savedTheme || preferredTheme);
setLanguage(localStorage.getItem("sara-language") || "fr");

languageButton.addEventListener("click", () => setLanguage(root.lang === "fr" ? "en" : "fr"));
themeButton.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

menuButton.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
  observer.observe(element);
});

const heroVisual = document.querySelector(".hero-visual");
const constellation = document.querySelector(".constellation-canvas");
const constellationContext = constellation.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let constellationWidth = 0;
let constellationHeight = 0;
let constellationFrame = 0;
let constellationNodes = [];
let pointer = { x: 0.5, y: 0.5, active: false };

function makeConstellationNodes(count) {
  return Array.from({ length: count }, (_, index) => ({
    x: 0.08 + Math.random() * 0.84,
    y: 0.07 + Math.random() * 0.75,
    vx: (Math.random() - 0.5) * 0.00016,
    vy: (Math.random() - 0.5) * 0.00016,
    radius: index % 7 === 0 ? 2.2 + Math.random() * 1.4 : 0.8 + Math.random() * 1.5,
    phase: Math.random() * Math.PI * 2,
    star: index % 7 === 0
  }));
}

function resizeConstellation() {
  const box = heroVisual.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  constellationWidth = box.width;
  constellationHeight = box.height;
  constellation.width = Math.round(box.width * ratio);
  constellation.height = Math.round(box.height * ratio);
  constellationContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  constellationNodes = makeConstellationNodes(box.width < 500 ? 30 : 46);
  drawConstellation(performance.now());
}

function drawStar(x, y, radius, opacity) {
  constellationContext.save();
  constellationContext.translate(x, y);
  constellationContext.strokeStyle = `rgba(235, 245, 255, ${opacity})`;
  constellationContext.lineWidth = 1;
  constellationContext.beginPath();
  constellationContext.moveTo(-radius * 2.7, 0);
  constellationContext.lineTo(radius * 2.7, 0);
  constellationContext.moveTo(0, -radius * 2.7);
  constellationContext.lineTo(0, radius * 2.7);
  constellationContext.stroke();
  constellationContext.beginPath();
  constellationContext.arc(0, 0, radius, 0, Math.PI * 2);
  constellationContext.fillStyle = `rgba(255, 255, 255, ${Math.min(opacity + 0.2, 1)})`;
  constellationContext.fill();
  constellationContext.restore();
}

function drawConstellation(time) {
  constellationContext.clearRect(0, 0, constellationWidth, constellationHeight);
  const pointerX = pointer.x * constellationWidth;
  const pointerY = pointer.y * constellationHeight;

  constellationNodes.forEach((node) => {
    if (!reduceMotion.matches) {
      node.x += node.vx;
      node.y += node.vy;
      if (node.x < 0.04 || node.x > 0.96) node.vx *= -1;
      if (node.y < 0.04 || node.y > 0.82) node.vy *= -1;
    }
  });

  for (let i = 0; i < constellationNodes.length; i += 1) {
    const first = constellationNodes[i];
    const firstX = first.x * constellationWidth;
    const firstY = first.y * constellationHeight;
    for (let j = i + 1; j < constellationNodes.length; j += 1) {
      const second = constellationNodes[j];
      const secondX = second.x * constellationWidth;
      const secondY = second.y * constellationHeight;
      const distance = Math.hypot(firstX - secondX, firstY - secondY);
      if (distance < 118) {
        constellationContext.beginPath();
        constellationContext.moveTo(firstX, firstY);
        constellationContext.lineTo(secondX, secondY);
        constellationContext.strokeStyle = `rgba(111, 169, 255, ${(1 - distance / 118) * 0.32})`;
        constellationContext.lineWidth = 0.75;
        constellationContext.stroke();
      }
    }

    if (pointer.active) {
      const pointerDistance = Math.hypot(firstX - pointerX, firstY - pointerY);
      if (pointerDistance < 150) {
        constellationContext.beginPath();
        constellationContext.moveTo(firstX, firstY);
        constellationContext.lineTo(pointerX, pointerY);
        constellationContext.strokeStyle = `rgba(153, 195, 255, ${(1 - pointerDistance / 150) * 0.42})`;
        constellationContext.stroke();
      }
    }
  }

  constellationNodes.forEach((node) => {
    const x = node.x * constellationWidth;
    const y = node.y * constellationHeight;
    const twinkle = reduceMotion.matches ? 0.78 : 0.55 + Math.sin(time * 0.0017 + node.phase) * 0.28;
    if (node.star) {
      drawStar(x, y, node.radius, twinkle);
    } else {
      constellationContext.beginPath();
      constellationContext.arc(x, y, node.radius, 0, Math.PI * 2);
      constellationContext.fillStyle = `rgba(224, 239, 255, ${twinkle})`;
      constellationContext.fill();
    }
  });

  if (!reduceMotion.matches) constellationFrame = requestAnimationFrame(drawConstellation);
}

heroVisual.addEventListener("pointermove", (event) => {
  const bounds = heroVisual.getBoundingClientRect();
  pointer = { x: (event.clientX - bounds.left) / bounds.width, y: (event.clientY - bounds.top) / bounds.height, active: true };
});
heroVisual.addEventListener("pointerleave", () => { pointer.active = false; });
new ResizeObserver(() => {
  cancelAnimationFrame(constellationFrame);
  resizeConstellation();
}).observe(heroVisual);

const metrics = document.querySelector(".metrics");
const countObserver = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return;
  metrics.querySelectorAll("strong[data-count-max]").forEach((counter) => {
    const min = Number(counter.dataset.countMin || 0);
    const max = Number(counter.dataset.countMax);
    const start = performance.now();
    const duration = 1100;
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const high = Math.round(max * eased);
      counter.textContent = min ? `${Math.round(min * eased)}-${high}` : String(high);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
  countObserver.disconnect();
}, { threshold: 0.45 });
countObserver.observe(metrics);

const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const message = data.get("message").trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const dictionary = translations[root.lang];

  if (!name || !message || !validEmail) {
    status.textContent = dictionary.formError;
    return;
  }

  status.textContent = dictionary.formSuccess;
  const subject = encodeURIComponent(`Portfolio contact - ${name}`);
  const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
  window.location.href = `mailto:sarahassib687@gmail.com?subject=${subject}&body=${body}`;
});

document.querySelector("#year").textContent = new Date().getFullYear();

function applyAdminContent() {
  const saved = JSON.parse(localStorage.getItem("sara-portfolio-content") || "{}");
  if (!saved.hero) return;
  Object.entries(saved.hero).forEach(([language, value]) => {
    if (translations[language] && value.trim()) translations[language].heroTitle = value.trim();
  });
  setLanguage(root.lang);
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderCustomContent(language = root.lang) {
  const content = JSON.parse(localStorage.getItem("sara-portfolio-content") || "{}");
  document.querySelectorAll("[data-custom-content]").forEach((element) => element.remove());

  (content.projects || []).forEach((project) => {
    const article = createElement("article", "project reveal is-visible");
    article.dataset.customContent = "true";
    const media = createElement("div", "project-media");
    const image = document.createElement("img");
    image.src = `assets/projects/${project.image}`;
    image.alt = project.title;
    const placeholder = createElement("div", "media-placeholder");
    placeholder.append(createElement("span", "", project.image), createElement("small", "", translations[language].placeholder));
    image.addEventListener("error", () => { image.hidden = true; placeholder.hidden = false; });
    media.append(image, placeholder);
    const copy = createElement("div", "project-copy");
    copy.append(createElement("p", "project-type", "New project"), createElement("h3", "", project.title), createElement("p", "", language === "fr" ? project.descriptionFr : project.descriptionEn));
    const tags = createElement("ul", "tag-list");
    (project.tools || []).forEach((tool) => tags.append(createElement("li", "", tool)));
    const link = createElement("a", "text-link", translations[language].openProject);
    link.href = project.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    copy.append(tags, link);
    article.append(media, copy);
    document.querySelector("#projects-list").append(article);
  });

  (content.experiences || []).forEach((experience) => {
    const article = createElement("article", "timeline-item reveal is-visible");
    article.dataset.customContent = "true";
    article.append(
      createElement("div", "timeline-date", experience.period),
      createElement("h3", "", experience.role),
      createElement("p", "company", experience.company),
      createElement("p", "", language === "fr" ? experience.descriptionFr : experience.descriptionEn)
    );
    document.querySelector("#experience-list").append(article);
  });

  (content.skills || []).forEach((skill) => {
    const article = createElement("article", "skill-group reveal is-visible");
    article.dataset.customContent = "true";
    article.append(createElement("h3", "", skill.name), createElement("p", "", (skill.items || []).join(", ")));
    document.querySelector("#skills-grid").append(article);
  });

  const certifications = content.certifications || [];
  if (certifications.length) {
    const panel = document.querySelector("#certifications-list");
    panel.querySelector("h3").textContent = language === "fr" ? "Certifications" : "Certifications";
    const intro = panel.querySelector("p");
    intro.textContent = "";
    const list = createElement("div", "cert-list");
    list.dataset.customContent = "true";
    certifications.forEach((certification) => {
      const item = createElement(certification.url ? "a" : "div", "cert-item");
      if (certification.url) {
        item.href = certification.url;
        item.target = "_blank";
        item.rel = "noreferrer";
      }
      item.append(createElement("strong", "", certification.name), createElement("span", "", `${certification.issuer}, ${certification.year}`));
      list.append(item);
    });
    panel.append(list);
  }
}

applyAdminContent();
