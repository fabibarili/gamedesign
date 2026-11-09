(function () {
  const $ = (sel) => document.querySelector(sel);

  const UI = {
    pt: {
      htmlLang: "pt-BR",
      navPortfolio: "← Portfólio",
      navGames: "Jogos",
      label: "// projetos pessoais",
      subtitle: "Jogos que eu faço porque fazer jogos é divertido.",
      cta: "Jogos ↓",
      gamesTitle: "Jogos",
      play: "Jogar ▶",
      soon: "Em breve",
      photo: "Foto",
      footer: "feito com café, vinho & curiosidade",
      ticker: ["Protótipos", "Experimentos", "Ideias aleatórias", "Jogos para amigos", "Realizando sonhos"],
    },
    en: {
      htmlLang: "en",
      navPortfolio: "← Portfolio",
      navGames: "Games",
      label: "// side projects",
      subtitle: "Games I make because making games is fun.",
      cta: "Games ↓",
      gamesTitle: "Games",
      play: "Play ▶",
      soon: "Coming soon",
      photo: "Photo",
      footer: "made with coffee, wine & curiosity",
      ticker: ["Prototypes", "Experiments", "Random ideas", "Games for friends", "Making dreams come true"],
    },
  };

  // Mesmo comportamento da página principal: o idioma vale só nesta aba.
  const store = {
    get() { try { return sessionStorage.getItem("lang"); } catch { return null; } },
    set(v) { try { sessionStorage.setItem("lang", v); } catch {} },
  };

  let lang = new URLSearchParams(location.search).get("lang") || store.get() || "en";
  if (!UI[lang]) lang = "en";

  const t = (v) =>
    v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.pt ?? v.en ?? "" : v ?? "";
  const ui = (k) => UI[lang][k];
  const esc = (s) =>
    String(t(s)).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  const CAMERA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.6l1.4-2h7l1.4 2h1.6A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/><circle cx="12" cy="13" r="3.5"/></svg>';

  function renderPhotos() {
    const photos = (FUN.photos || []).slice(0, 3);
    const list = photos.length ? photos : [null, null, null];
    const el = $("#photos");
    el.className = `collage count-${list.length}`;
    el.innerHTML = list.map((p, i) => p
      ? `<figure class="p${i}${p.cutout ? " is-cutout" : ""}"><img src="${esc(p.src)}" alt="${esc(p.alt || p.caption || "Fabi Barili")}"${p.position ? ` style="object-position:${esc(p.position)}"` : ""} />${t(p.caption) ? `<figcaption>${esc(p.caption)}</figcaption>` : ""}</figure>`
      : `<figure class="p${i} is-empty" aria-hidden="true">${CAMERA}</figure>`
    ).join("");
  }

  function renderTicker() {
    const words = ui("ticker");
    const row = words.map((w) => `<span>${esc(w)}</span><span>✦</span>`).join("");
    $("#ticker").innerHTML = row + row + row + row; // repetido para o loop não ter emenda
  }

  // Duas fitas de "proibido" cruzadas sobre a capa, com o texto repetido.
  function tapes(label) {
    const text = Array(8).fill(`<span>${esc(label)}</span>`).join("");
    return `<span class="fun-tape t1" role="img" aria-label="${esc(label)}">${text}</span>` +
      `<span class="fun-tape t2" aria-hidden="true">${text}</span>`;
  }

  function renderGames() {
    const games = FUN.games || [];

    const cards = games.map((g) => {
      const external = /^https?:\/\//.test(g.url || "");
      const soon = !!g.comingSoon;
      const open = soon
        ? `<div class="fun-card is-soon" aria-disabled="true">`
        : `<a class="fun-card" href="${esc(g.url || "#")}"${external ? ' target="_blank" rel="noopener"' : ""}>`;
      return `
      ${open}
        <div class="fun-cover" style="background:${esc(g.color || "var(--line)")}">
          ${g.cover ? `<img src="${esc(g.cover)}" alt="" loading="lazy" />` : ""}
          ${soon ? tapes(ui("soon")) : `<span class="fun-play">${ui("play")}</span>`}
        </div>
        <div class="fun-body">
          <div class="fun-meta"><span>${esc(g.madeWith)}</span></div>
          <h3>${esc(g.title)}</h3>
          ${soon ? "" : `<p>${esc(g.tagline)}</p>`}
          ${g.tags && g.tags.length ? `<div class="tags">${g.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>` : ""}
        </div>
      ${soon ? "</div>" : "</a>"}`;
    });

    $("#games").innerHTML = cards.join("");
  }

  function render() {
    document.documentElement.lang = ui("htmlLang");
    document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = ui(el.dataset.i18n)));
    document.querySelectorAll("[data-lang]").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang))
    );
    $("#intro").innerHTML =
      (t(FUN.quote) ? `<p class="fun-quote">${esc(FUN.quote)}</p>` : "") +
      (FUN.intro || []).map((p) => `<p>${esc(p)}</p>`).join("");
    $("#year").textContent = new Date().getFullYear();
    renderPhotos();
    renderTicker();
    renderGames();
  }

  document.querySelectorAll("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === lang) return;
      lang = btn.dataset.lang;
      store.set(lang);
      render();
    })
  );

  render();
})();
