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
      navFun: "Just for fun!",
      studio: "Estúdio",
      video: "Vídeo",
      hello: "Oi, eu sou",
      seeGames: "Projetos ↓",
      downloadCv: "Baixar CV ↓",
      games: "Projetos",
      projects: (n) => `${n} projeto${n === 1 ? "" : "s"}`,
      contactTitle: "Qual experiência vamos criar?",
      photoOf: (n) => `Foto de ${n}`,
      back: "← Todos os projetos",
      year: "Ano",
      role: "Papel",
      team: "Time",
      platform: "Plataforma",
      tools: "Ferramentas",
      playVideo: "Assistir ao vídeo",
      getItOn: "Disponível no",
      downloadOn: "Baixar na",
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
      navFun: "Just for fun!",
      studio: "Studio",
      video: "Video",
      hello: "Hi, I'm",
      seeGames: "Projects ↓",
      downloadCv: "Download CV ↓",
      games: "Projects",
      projects: (n) => `${n} project${n === 1 ? "" : "s"}`,
      contactTitle: "What experience will we create next?",
      photoOf: (n) => `Photo of ${n}`,
      back: "← All projects",
      year: "Year",
      role: "Role",
      team: "Team",
      platform: "Platform",
      tools: "Tools",
      playVideo: "Play video",
      getItOn: "Get it on",
      downloadOn: "Download on the",
      prev: "← Previous",
      next: "Next →",
      notFound: "Project not found",
      notFoundText: "This project doesn't exist or was removed.",
      backToGames: "Back to projects",
    },
  };

  // O idioma escolhido vale só enquanto a pessoa navega nesta aba;
  // toda nova visita abre em inglês (o padrão do site).
  const store = {
    get() { try { return sessionStorage.getItem("lang"); } catch { return null; } },
    set(v) { try { sessionStorage.setItem("lang", v); } catch {} },
  };
  try { localStorage.removeItem("lang"); } catch {}

  // Português desativado por enquanto: o site fica só em inglês e o
  // seletor de idioma é escondido. Troque para true para reativar.
  const PT_ENABLED = false;

  let lang = new URLSearchParams(location.search).get("lang") || store.get() || "en";
  if (!UI[lang] || (!PT_ENABLED && lang === "pt")) lang = "en";
  if (!PT_ENABLED) document.querySelectorAll(".lang-switch").forEach((el) => el.remove());

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
  const STORE_ICONS = {
    google: '<path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>',
    apple: '<path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>',
  };
  // Selo da loja (Google Play / App Store) ou botão comum
  const storeLink = (l) =>
    STORE_ICONS[l.store]
      ? `<a class="store-badge" href="${esc(l.url)}" target="_blank" rel="noopener" aria-label="${esc(l.label)}">
          <svg viewBox="0 0 24 24" aria-hidden="true">${STORE_ICONS[l.store]}</svg>
          <span><small>${ui(l.store === "apple" ? "downloadOn" : "getItOn")}</small>${esc(l.label)}</span>
        </a>`
      : linkBtn(l);
  const toolList = (tools) =>
    String(t(tools) || "").split(",").map((x) => x.trim()).filter(Boolean);

  const tagList = (tags) =>
    `<div class="tags">${(tags || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;

  // ---------- Render ----------
  function renderShared() {
    document.documentElement.lang = ui("htmlLang");
    document.querySelectorAll("[data-name]").forEach((el) => (el.textContent = PROFILE.name));
    document.querySelectorAll("[data-short-name]").forEach((el) => (el.textContent = PROFILE.shortName || PROFILE.name));
    document.querySelectorAll("[data-role]").forEach((el) => (el.textContent = t(PROFILE.role)));
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();
  }

  function renderHome() {
    document.title = "Fabi Barili - Game Designer";
    $("#bio").innerHTML = PROFILE.bio.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#photo").src = PROFILE.photo;
    $("#photo").alt = ui("photoOf")(PROFILE.name);
    $("#hero-links").innerHTML = PROFILE.links.map((l) => linkBtn(l)).join("");
    const contactLinks = $("#contact-links");
    if (contactLinks) contactLinks.innerHTML = PROFILE.links.map((l) => linkBtn(l)).join("");

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
      document.title = "Fabi Barili - Game Designer";
      gameEl.innerHTML = `
        <div class="not-found">
          <h1 class="game-title">${ui("notFound")}</h1>
          <p class="game-tagline">${ui("notFoundText")}</p>
          <a class="btn primary" href="index.html#projetos">${ui("backToGames")}</a>
        </div>`;
      return;
    }

    document.title = "Fabi Barili - Game Designer";
    const prev = GAMES[(idx - 1 + GAMES.length) % GAMES.length];
    const next = GAMES[(idx + 1) % GAMES.length];

    const facts = [
      [ui("studio"), g.studio],
      [ui("year"), g.year],
      [ui("role"), g.role],
      [ui("team"), g.team],
      [ui("platform"), g.platform],
    ].filter(([, v]) => t(v));

    // Ferramentas entram logo depois da seção "Responsabilidades"
    // (ou da primeira seção com lista, se não houver uma com esse título)
    const sections = g.sections || [];
    let toolsAt = sections.findIndex((s) => typeof H !== "undefined" && s.heading === H.role);
    if (toolsAt < 0) toolsAt = sections.findIndex((s) => s.items && s.items.length);
    if (toolsAt < 0) toolsAt = sections.length - 1;
    const tools = toolList(g.tools);
    const toolsHtml = tools.length ? `
            <section class="game-section reveal">
              <h2>${ui("tools")}</h2>
              <div class="tool-tags">${tools.map((x) => `<span class="tool-tag">${esc(x)}</span>`).join("")}</div>
            </section>` : "";

    gameEl.innerHTML = `
      <a class="back" href="index.html#projetos">${ui("back")}</a>
      <div class="game-hero reveal" style="background:${esc(g.color)}">
        ${g.hero || g.cover ? `<img src="${esc(g.hero || g.cover)}" alt="${esc(g.title)}"${g.heroPosition ? ` style="object-position:${esc(g.heroPosition)}"` : ""} />` : ""}
      </div>
      <div class="game-layout">
        <article>
          <h1 class="game-title">${esc(g.title)}</h1>
          <p class="game-tagline">${esc(g.tagline)}</p>
          ${sections.map((s, i) => `
            <section class="game-section reveal">
              <h2>${esc(s.heading)}</h2>
              ${t(s.body) ? `<p>${esc(s.body)}</p>` : ""}
              ${s.items && s.items.length ? `<ul>${s.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
            </section>${i === toolsAt ? toolsHtml : ""}`).join("")}
          ${!sections.length ? toolsHtml : ""}
          ${g.video ? `
            <section class="game-section reveal">
              <h2>${ui("video")}</h2>
              <div class="video">
                <button type="button" class="video-play" data-video="${esc(encodeURIComponent(g.video))}" aria-label="${ui("playVideo")}: ${esc(g.title)}">
                  <img src="https://i.ytimg.com/vi/${encodeURIComponent(g.video)}/hqdefault.jpg" alt="" loading="lazy" />
                  <span class="play-icon" aria-hidden="true"></span>
                </button>
              </div>
            </section>` : ""}
        </article>
        <aside class="facts">
          <dl>${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
          ${g.links && g.links.length ? `<div class="store-links">${g.links.map(storeLink).join("")}</div>` : ""}
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
  }

  // Clique no vídeo (o vídeo toca na própria página)
  const gameRoot = $("#game");
  if (gameRoot) {
    gameRoot.addEventListener("click", (ev) => {
      const play = ev.target.closest(".video-play");
      if (play) {
        const id = play.dataset.video;
        play.parentElement.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1" title="${play.getAttribute("aria-label")}" referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
      }
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
