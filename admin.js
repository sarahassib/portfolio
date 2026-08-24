const storageKey = "sara-portfolio-content";
const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
saved.hero ||= {};
saved.certifications ||= [];
saved.projects ||= [];
saved.experiences ||= [];
saved.skills ||= [];

const heroForm = document.querySelector("#hero-form");
heroForm.heroFr.value = saved.hero.fr || heroForm.heroFr.value;
heroForm.heroEn.value = saved.hero.en || heroForm.heroEn.value;

heroForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saved.hero.fr = heroForm.heroFr.value.trim();
  saved.hero.en = heroForm.heroEn.value.trim();
  localStorage.setItem(storageKey, JSON.stringify(saved));
  heroForm.querySelector(".save-status").textContent = "Modifications enregistrées sur cet appareil.";
});

const certForm = document.querySelector("#cert-form");
const certList = document.querySelector("#cert-admin-list");
const certCount = document.querySelector("#cert-count");

function persist() {
  localStorage.setItem(storageKey, JSON.stringify(saved));
}

function renderDynamicList(listElement, items, labelBuilder, collectionName) {
  listElement.innerHTML = "";
  items.forEach((item, index) => {
    const article = document.createElement("article");
    const label = document.createElement("strong");
    const remove = document.createElement("button");
    label.textContent = labelBuilder(item);
    remove.type = "button";
    remove.className = "cert-remove";
    remove.textContent = "Supprimer";
    remove.addEventListener("click", () => {
      saved[collectionName].splice(index, 1);
      persist();
      renderAllDynamicContent();
    });
    article.append(label, remove);
    listElement.append(article);
  });
}

function renderCertifications() {
  certList.innerHTML = "";
  certCount.textContent = saved.certifications.length;
  if (!saved.certifications.length) {
    certList.innerHTML = "<p class='admin-note'>Aucune certification ajoutée pour le moment.</p>";
    return;
  }
  saved.certifications.forEach((certification, index) => {
    const article = document.createElement("article");
    const info = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const remove = document.createElement("button");
    title.textContent = certification.name;
    meta.textContent = `${certification.issuer}, ${certification.year}`;
    info.append(title, document.createElement("br"), meta);
    remove.type = "button";
    remove.className = "cert-remove";
    remove.textContent = "Supprimer";
    remove.addEventListener("click", () => {
      saved.certifications.splice(index, 1);
      persist();
      renderCertifications();
    });
    article.append(info, remove);
    certList.append(article);
  });
}

certForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(certForm);
  saved.certifications.push({
    name: data.get("name").trim(),
    issuer: data.get("issuer").trim(),
    year: data.get("year").trim(),
    url: data.get("url").trim()
  });
  persist();
  certForm.reset();
  renderCertifications();
});

renderCertifications();

const projectForm = document.querySelector("#project-form");
const experienceForm = document.querySelector("#experience-form");
const skillForm = document.querySelector("#skill-form");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(projectForm);
  saved.projects.push({
    title: data.get("title").trim(),
    descriptionFr: data.get("descriptionFr").trim(),
    descriptionEn: data.get("descriptionEn").trim(),
    tools: data.get("tools").split(",").map((item) => item.trim()).filter(Boolean),
    url: data.get("url").trim(),
    image: data.get("image").trim()
  });
  persist();
  projectForm.reset();
  renderAllDynamicContent();
});

experienceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(experienceForm);
  saved.experiences.push({
    role: data.get("role").trim(),
    company: data.get("company").trim(),
    period: data.get("period").trim(),
    descriptionFr: data.get("descriptionFr").trim(),
    descriptionEn: data.get("descriptionEn").trim()
  });
  persist();
  experienceForm.reset();
  renderAllDynamicContent();
});

skillForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(skillForm);
  saved.skills.push({
    name: data.get("name").trim(),
    items: data.get("items").split(",").map((item) => item.trim()).filter(Boolean)
  });
  persist();
  skillForm.reset();
  renderAllDynamicContent();
});

function renderAllDynamicContent() {
  renderDynamicList(document.querySelector("#project-admin-list"), saved.projects, (item) => item.title, "projects");
  renderDynamicList(document.querySelector("#experience-admin-list"), saved.experiences, (item) => `${item.role} - ${item.company}`, "experiences");
  renderDynamicList(document.querySelector("#skill-admin-list"), saved.skills, (item) => item.name, "skills");
  document.querySelector(".admin-stats article:first-child strong").textContent = 3 + saved.projects.length;
  document.querySelector(".admin-stats article:nth-child(2) strong").textContent = 3 + saved.experiences.length;
  document.querySelector(".admin-stats article:nth-child(3) strong").textContent = 5 + saved.skills.length;
}

renderAllDynamicContent();
