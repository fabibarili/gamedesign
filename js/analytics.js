/* Google Tag Manager / Google Analytics com banner de consentimento (LGPD/GDPR).
   O Google só é carregado depois que a pessoa clica em "Aceitar".
   GA_ID aceita um contêiner do Tag Manager (GTM-...) ou uma tag do GA4 (G-...). */
(function () {
  const GA_ID = "GTM-NMN64BRK";
  const KEY = "analytics-consent"; // "granted" | "denied"

  if (!/^(GTM|G)-[A-Z0-9]+$/.test(GA_ID)) return;
  const isGTM = GA_ID.startsWith("GTM-");

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch {} },
  };

  const pt = (document.documentElement.lang || "").toLowerCase().startsWith("pt");
  const T = pt
    ? {
        text: "Uso o Google Analytics para saber quantas pessoas visitam o portfólio. Tudo bem?",
        accept: "Aceitar",
        decline: "Recusar",
        settings: "Cookies",
      }
    : {
        text: "I use Google Analytics to see how many people visit this portfolio. Is that okay?",
        accept: "Accept",
        decline: "Decline",
        settings: "Cookies",
      };

  let loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    const s = document.createElement("script");
    s.async = true;
    if (isGTM) {
      dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      s.src = "https://www.googletagmanager.com/gtm.js?id=" + GA_ID;
    } else {
      gtag("config", GA_ID);
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    }
    document.head.appendChild(s);
  }

  function clearGACookies() {
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (!name.startsWith("_ga")) return;
      const host = location.hostname;
      [host, "." + host, "." + host.replace(/^www\./, "")].forEach((d) => {
        document.cookie = name + "=; Max-Age=0; path=/; domain=" + d;
      });
      document.cookie = name + "=; Max-Age=0; path=/";
    });
  }

  function showBanner() {
    if (document.querySelector(".consent")) return;
    const box = document.createElement("div");
    box.className = "consent";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    box.setAttribute("aria-label", T.settings);
    box.innerHTML =
      '<p class="consent-text"></p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="btn" data-choice="denied"></button>' +
      '<button type="button" class="btn primary" data-choice="granted"></button>' +
      "</div>";
    box.querySelector(".consent-text").textContent = T.text;
    box.querySelector('[data-choice="denied"]').textContent = T.decline;
    box.querySelector('[data-choice="granted"]').textContent = T.accept;
    box.addEventListener("click", (e) => {
      const choice = e.target.closest("[data-choice]")?.dataset.choice;
      if (!choice) return;
      const before = store.get();
      store.set(choice);
      box.remove();
      if (choice === "granted") loadGA();
      else if (before === "granted") { clearGACookies(); location.reload(); }
    });
    document.body.appendChild(box);
  }

  // Link discreto no rodapé para mudar a escolha depois.
  function addSettingsLink() {
    const footer = document.querySelector("footer .container") || document.querySelector("footer");
    if (!footer || footer.querySelector(".consent-link")) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "consent-link";
    b.textContent = T.settings;
    b.addEventListener("click", showBanner);
    footer.appendChild(b);
  }

  function init() {
    const choice = store.get();
    if (choice === "granted") loadGA();
    else if (choice !== "denied") showBanner();
    addSettingsLink();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
