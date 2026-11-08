/*
 * ================================================================
 *  DADOS DA PÁGINA "JUST FOR FUN!" (fun.html)
 *  Edite este arquivo para trocar a descrição, as fotos e os jogos.
 *  Não precisa mexer no HTML.
 *
 *  TRADUÇÃO: qualquer texto pode ser escrito de duas formas:
 *    - "Texto igual nos dois idiomas"
 *    - { pt: "Texto em português", en: "Text in English" }
 * ================================================================
 */

const FUN = {
  // Frase em destaque, logo acima da descrição (deixe "" para esconder).
  quote: {
    pt: "Fabi, faz um jogo nosso?",
    en: "Fabi, can you make a game about us?",
  },

  // Descrição da página — um parágrafo por item da lista.
  intro: [
    {
      pt: "Aqui ficam os jogos que eu faço por diversão, nas horas vagas, só pelo prazer de criar. Sem métricas, sem reunião, sem roadmap.",
      en: "This is where I keep the games I make for fun in my spare time, just for the joy of making them. No metrics, no meetings, no roadmap.",
    },
    {
      pt: "Alguns são experimentos, outros são ideias que não saíam da minha cabeça.",
      en: "Some are experiments, others are ideas that wouldn't leave my head.",
    },
    {
      pt: "Pega um café e escolhe um pra jogar!",
      en: "Grab a coffee and pick one to play!",
    },
  ],

  /*
   * FOTOS — coloque os arquivos em assets/fun/ e liste aqui.
   *   src      caminho da imagem (ex: "assets/fun/foto-1.jpg")
   *   caption  legenda pequena sobre a foto (opcional)
   *   position enquadramento da foto (opcional, ex: "center 30%")
   *   cutout   true para imagem sem fundo (PNG transparente): aparece sem moldura
   * Aparecem até 3 fotos; a primeira é a maior.
   * Enquanto a lista estiver vazia, aparecem molduras de exemplo.
   */
  photos: [
    { src: "assets/fun/fabi-caneca.jpg", alt: { pt: "Fabi segurando uma caneca com carinha emburrada", en: "Fabi holding a mug with a grumpy face" }, position: "center 38%" },
    { src: "assets/fun/fabi-memoji.png", cutout: true, alt: { pt: "Memoji da Fabi atrás de um notebook", en: "Fabi's memoji behind a laptop" } },
  ],

  /*
   * JOGOS — cada item vira um card. Clicar no card abre o jogo.
   *   id       identificador único (sem espaços)
   *   title    nome do jogo
   *   tagline  descrição curta (igual aos projetos da página principal)
   *   cover    banner (ex: "assets/fun/meu-jogo.webp"), proporção 16:10
   *   color    cor de fundo do banner enquanto a imagem carrega
   *   url      link para jogar (itch.io, página no próprio site, etc.)
   *   madeWith ferramenta usada (ex: "Unity", "Godot", "HTML5")
   *   year     ano
   *   tags     lista de etiquetas (ex: ["Puzzle", "Game Jam"])
   */
  games: [
    // {
    //   id: "meu-jogo",
    //   title: "Meu Jogo",
    //   tagline: { pt: "Um puzzle sobre...", en: "A puzzle about..." },
    //   cover: "assets/fun/meu-jogo.webp",
    //   color: "#ffd23f",
    //   url: "https://fabibarili.itch.io/meu-jogo",
    //   madeWith: "Unity",
    //   year: "2026",
    //   tags: ["Puzzle", "Game Jam"],
    // },
    {
      id: "guido-coffee",
      title: "Guido — Aventura do Café",
      tagline: {
        pt: "Plataforma com a Guido: pegue os grãos de café, pule nos cubos de açúcar e chegue à cafeteria.",
        en: "A platformer starring Guido: grab the coffee beans, stomp the sugar cubes and make it to the café.",
      },
      cover: "assets/fun/guido-coffee.png",
      color: "#4fb0f0",
      url: "jogos/guido/",
      madeWith: "HTML5",
      year: "2026",
      tags: [{ pt: "Plataforma", en: "Platformer" }, "Pixel art", "Mobile"],
    },
    {
      id: "missao-casamento",
      title: "Missão Casamento",
      tagline: {
        pt: "Pilote o aviãozinho até o casamento: desvie dos obstáculos e chegue a tempo para o \"sim\".",
        en: "Fly the little plane to the wedding: dodge the obstacles and make it in time for the \"I do\".",
      },
      cover: "assets/fun/pitolo-wedding.png",
      color: "#4fc0ca",
      url: "jogos/missao-casamento/",
      madeWith: "HTML5",
      year: "2026",
      tags: ["Arcade", "Pixel art", "Mobile"],
    },
    {
      id: "bellinha-game",
      title: "Bellinha Game",
      tagline: {
        pt: "Cobre pênaltis com o Messi: arraste para mirar, segure para chutar e engane o goleiro.",
        en: "Take penalties as Messi: drag to aim, hold to shoot and fool the goalkeeper.",
      },
      cover: "assets/fun/bellinha-game.png",
      color: "#0b0f24",
      url: "jogos/bellinha/",
      madeWith: "HTML5",
      year: "2026",
      tags: [{ pt: "Futebol", en: "Football" }, "Pixel art", "Mobile"],
    },
  ],
};
