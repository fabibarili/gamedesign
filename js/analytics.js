// Google Analytics 4 compartilhado por todas as páginas do site e pelos jogos.
// Para trocar ou desligar o analytics, altere só este arquivo.
(function () {
  var GA_ID = "G-WJKXWX9Q6J"; // ID da métrica do GA4

  // Fica desligado enquanto o ID não for preenchido.
  if (!/^G-[A-Z0-9]+$/.test(GA_ID) || GA_ID === "G-XXXXXXXXXX") return;

  // Só mede o site publicado, não testes locais.
  var host = location.hostname.replace(/^www\./, "");
  if (host !== "fabibarili.com") return;

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
})();
