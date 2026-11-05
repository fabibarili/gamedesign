(function () {
  const $ = (sel) => document.querySelector(sel);

  // ---------- Idioma / Language ----------
  const UI = {
    pt: {
      htmlLang: "pt-BR",
      navAbout: "Sobre",
      navGames: "Projetos",
      navExperience: "Experiência",
      experience: "Experiência",
      navContact: "Contato",
      studio: "Estúdio",
      video: "Vídeo",
      hello: "Oi, eu sou",
      seeGames: "Ver projetos ↓",
      downloadCv: "Baixar CV ↓",
      games: "Projetos",
      projects: (n) => `${n} projeto${n === 1 ? "" : "s"}`,
      contactTitle: "Vamos conversar?",
      contactText: "Disponível para oportunidades, colaborações e game jams.",
      photoOf: (n) => `Foto de ${n}`,
      back: "← Todos os projetos",
      year: "Ano",
      role: "Papel",
      team: "Time",
      platform: "Plataforma",
      tools: "Ferramentas",
      gallery: "Galeria",
      prev: "← Anterior",
      next: "Próximo →",
      notFound: "Projeto não encontrado",
      notFoundText: "Esse projeto não existe ou foi removido.",
      backToGames: "Voltar para os projetos",
    },
    en: {
      htmlLang: "en",
      navAbout: "About",
      navGames: "Projects",
      navExperience: "Experience",
      experience: "Experience",
      navContact: "Contact",
      studio: "Studio",
      video: "Video",
      hello: "Hi, I'm",
      seeGames: "See projects ↓",
      downloadCv: "Download CV ↓",
      games: "Projects",
      projects: (n) => `${n} project${n === 1 ? "" : "s"}`,
      contactTitle: "Let's talk?",
      contactText: "Open to opportunities, collaborations and game jams.",
      photoOf: (n) => `Photo of ${n}`,
      back: "← All projects",
      year: "Year",
      role: "Role",
      team: "Team",
      platform: "Platform",
      tools: "Tools",
      gallery: "Gallery",
      prev: "← Previous",
      next: "Next →",
      notFound: "Project not found",
      notFoundText: "This project doesn't exist or was removed.",
      backToGames: "Back to projects",
    },
  };

  const store = {
    get() { try { return localStorage.getItem("lang"); } catch { return null; } },
    set(v) { try { localStorage.setItem("lang", v); } catch {} },
  };

  let lang =
    new URLSearchParams(location.search).get("lang") ||
    store.get() ||
    ((navigator.language || "").toLowerCase().startsWith("pt") ? "pt" : "en");
  if (!UI[lang]) lang = "pt";

  // Texto traduzível: string simples ou { pt, en }
  const t = (v) =>
    v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.pt ?? v.en ?? "" : v ?? "";
  const ui = (k) => UI[lang][k];

  const esc = (s) =>
    String(t(s)).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  const linkBtn = (l, cls = "btn") =>
    `<a class="${cls}" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`;
  const tagList = (tags) =>
    `<div class="tags">${(tags || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;

  // ---------- Render ----------
  function renderShared() {
    document.documentElement.lang = ui("htmlLang");
    document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = PROFILE.name));
    document.querySelectorAll("[data-role]").forEach((el) => (el.textContent = t(PROFILE.role)));
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function renderHome() {
    document.title = `${PROFILE.name} · Game Design Portfolio`;
    $("#bio").innerHTML = PROFILE.bio.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#photo").src = PROFILE.photo;
    $("#photo").alt = ui("photoOf")(PROFILE.name);
    $("#hero-links").innerHTML = PROFILE.links.map((l) => linkBtn(l)).join("");

    const cv = $("#cv");
    if (cv) {
      cv.hidden = !t(PROFILE.cv);
      if (t(PROFILE.cv)) cv.href = t(PROFILE.cv);
    }

    const email = $("#email");
    email.href = `mailto:${PROFILE.email}`;
    email.textContent = PROFILE.email;

    $("#games-count").textContent = ui("projects")(GAMES.length);
    $("#games").innerHTML = GAMES.map(
      (g) => `
      <a class="card reveal" href="game.html?id=${encodeURIComponent(g.id)}">
        <div class="cover" style="background:${esc(g.color)}">
          ${g.cover ? `<img src="${esc(g.cover)}" alt="" loading="lazy" />` : ""}
        </div>
        <div class="card-body">
          <div class="card-meta"><span>${esc(g.studio || g.role)}</span><span>${esc(g.year || g.platform)}</span></div>
          <h3>${esc(g.title)}</h3>
          <p>${esc(g.tagline)}</p>
          ${tagList(g.tags)}
        </div>
      </a>`
    ).join("");

    const exp = typeof EXPERIENCE !== "undefined" ? EXPERIENCE : [];
    const list = $("#experience");
    // Mantém abertos os itens que já estavam abertos (ex.: ao trocar de idioma)
    const open = new Set(
      [...list.querySelectorAll('.exp-trigger[aria-expanded="true"]')].map((b) => b.dataset.i)
    );
    $("#experiencia").hidden = !exp.length;
    list.innerHTML = exp.map((e, i) => {
      const isOpen = open.has(String(i));
      const meta = [t(e.period), t(e.location)].filter(Boolean).map((x) => esc(x));
      return `
      <li class="exp-item reveal${isOpen ? " open" : ""}">
        <h3>
          <button class="exp-trigger" type="button" data-i="${i}" aria-expanded="${isOpen}" aria-controls="exp-panel-${i}" id="exp-btn-${i}">
            <span class="exp-title">${esc(e.role)} <span class="exp-arrow" aria-hidden="true">→</span> <span class="exp-company">${esc(e.company)}</span></span>
            <span class="exp-icon" aria-hidden="true"></span>
          </button>
        </h3>
        <div class="exp-panel" id="exp-panel-${i}" role="region" aria-labelledby="exp-btn-${i}">
          <div class="exp-panel-inner">
            <div class="exp-body">
              ${meta.length ? `<p class="exp-meta"><strong>${meta[0]}</strong>${meta[1] ? ` · ${meta[1]}` : ""}</p>` : ""}
              ${t(e.description) ? `<p>${esc(e.description)}</p>` : ""}
              ${e.items && e.items.length ? `<ul class="exp-list">${e.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
            </div>
          </div>
        </div>
      </li>`;
    }).join("");
  }

  function renderGame(gameEl) {
    const id = new URLSearchParams(location.search).get("id");
    const idx = GAMES.findIndex((g) => g.id === id);
    const g = GAMES[idx];

    if (!g) {
      document.title = `${ui("notFound")} · ${PROFILE.name}`;
      gameEl.innerHTML = `
        <div class="not-found">
          <h1 class="game-title">${ui("notFound")}</h1>
          <p class="game-tagline">${ui("notFoundText")}</p>
          <a class="btn primary" href="index.html#projetos">${ui("backToGames")}</a>
        </div>`;
      return;
    }

    document.title = `${t(g.title)} · ${PROFILE.name}`;
    const prev = GAMES[(idx - 1 + GAMES.length) % GAMES.length];
    const next = GAMES[(idx + 1) % GAMES.length];

    const facts = [
      [ui("studio"), g.studio],
      [ui("year"), g.year],
      [ui("role"), g.role],
      [ui("team"), g.team],
      [ui("platform"), g.platform],
      [ui("tools"), g.tools],
    ].filter(([, v]) => t(v));

    gameEl.innerHTML = `
      <a class="back" href="index.html#projetos">${ui("back")}</a>
      <div class="game-hero reveal${g.hero ? "" : " contain"}" style="background:${esc(g.color)}">
        ${g.hero || g.cover ? `<img src="${esc(g.hero || g.cover)}" alt="${esc(g.title)}" />` : ""}
      </div>
      <div class="game-layout">
        <article>
          <h1 class="game-title">${esc(g.title)}</h1>
          <p class="game-tagline">${esc(g.tagline)}</p>
          ${(g.sections || []).map((s) => `
            <section class="game-section reveal">
              <h2>${esc(s.heading)}</h2>
              ${t(s.body) ? `<p>${esc(s.body)}</p>` : ""}
              ${s.items && s.items.length ? `<ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
            </section>`).join("")}
          ${g.video ? `
            <section class="game-section reveal">
              <h2>${ui("video")}</h2>
              <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(g.video)}" title="${esc(g.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
            </section>` : ""}
          ${g.gallery && g.gallery.length ? `
            <section class="game-section reveal">
              <h2>${ui("gallery")}</h2>
              <div class="gallery">${g.gallery.map((src) => `<a href="${esc(src)}" target="_blank" rel="noopener"><img src="${esc(src)}" alt="" loading="lazy" /></a>`).join("")}</div>
            </section>` : ""}
        </article>
        <aside class="facts">
          <dl>${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          ${tagList(g.tags)}
          ${g.links && g.links.length ? `<div class="hero-links">${g.links.map((l, i) => linkBtn(l, i === 0 ? "btn primary" : "btn")).join("")}</div>` : ""}
        </aside>
      </div>
      ${GAMES.length > 1 ? `
      <nav class="game-nav">
        <a href="game.html?id=${encodeURIComponent(prev.id)}">${ui("prev")}<strong>${esc(prev.title)}</strong></a>
        <a href="game.html?id=${encodeURIComponent(next.id)}">${ui("next")}<strong>${esc(next.title)}</strong></a>
      </nav>` : ""}`;
  }

  // ---------- Reveal on scroll ----------
  let io;
  function setupReveal(instant) {
    const els = document.querySelectorAll(".reveal");
    if (instant || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    io = io || new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
  }

  function render(instant) {
    renderShared();
    if ($("#games")) renderHome();
    const gameEl = $("#game");
    if (gameEl) renderGame(gameEl);
    setupReveal(instant);
    // Imagens muito largas (banners) ocupam a linha inteira da galeria
    document.querySelectorAll(".gallery img").forEach((img) => {
      const mark = () => img.naturalWidth / img.naturalHeight > 1.9 && img.parentElement.classList.add("wide");
      img.complete ? mark() : img.addEventListener("load", mark, { once: true });
    });
  }

  // Acordeão da experiência: clique abre/fecha cada cargo
  const expList = $("#experience");
  if (expList) {
    expList.addEventListener("click", (ev) => {
      const btn = ev.target.closest(".exp-trigger");
      if (!btn) return;
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      btn.closest(".exp-item").classList.toggle("open", !isOpen);
    });
  }

  // Troca de idioma sem recarregar a página
  document.querySelectorAll("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      store.set(lang);
      render(true);
    })
  );

  render(false);
})();
