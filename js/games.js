/*
 * ================================================================
 *  DADOS DO PORTFOLIO / PORTFOLIO DATA
 *  Edite este arquivo para trocar a bio e adicionar/remover jogos.
 *  Não precisa mexer no HTML.
 *
 *  TRADUÇÃO: qualquer texto pode ser escrito de duas formas:
 *    - "Texto igual nos dois idiomas"
 *    - { pt: "Texto em português", en: "Text in English" }
 *
 *  Conteúdo importado de https://www.behance.net/fabibarili
 * ================================================================
 */

const PROFILE = {
  name: "Fabi Barili",
  shortName: "Fabi", // usado na saudação da bio ("Hi, I'm Fabi.")
  role: "Game Designer",
  photo: "assets/foto.jpg",
  bio: [
    {
      pt: "Game Designer com +5 anos de experiência, baseada no Brasil. Atuo em todo o ciclo de desenvolvimento, do conceito, design de sistemas, lançamento e a gestão do Live Ops.",
      en: "Game Designer with 5+ years of experience, based in Brazil. I work across the full development cycle, from concept and systems design to launch and Live Ops management.",
    },
    {
      pt: "Trabalho na identificação de problemas e busco a solução deles através de conceitos de game design, pesquisa de mercado e métricas do jogo, sempre buscando entregar a melhor experiência para os jogadores conectada aos objetivos do negócio. Experiência em trabalho remoto com equipes multiculturais.",
      en: "I identify problems and solve them through game design principles, market research and game metrics, always aiming to deliver the best possible player experience while staying connected to business goals. Experienced in working remotely with multicultural teams.",
    },
    {
      pt: "Graduada em Jogos Digitais, Mestre em Indústria Criativa e com MBA em Game Design. Atualmente estudando novas formas de fazer jogos com o uso da Inteligência Artificial, sempre mantendo a autonomia nas decisões e a criatividade como aliada às novas tecnologias.",
      en: "I hold a degree in Digital Games, a Master's in Creative Industry and an MBA in Game Design. I'm currently exploring new ways of making games with Artificial Intelligence, while keeping ownership of decisions and treating creativity as an ally to new technologies.",
    },
  ],
  email: "fabibarili@gmail.com",
  // Coloque seu currículo em assets/ e troque o caminho (ex: "assets/cv.pdf").
  // Deixe "" para esconder o botão. Pode ser { pt: "assets/cv-pt.pdf", en: "assets/cv-en.pdf" }
  cv: "assets/cv.pdf",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/fabibarili/" },
  ],
};

/*
 * EXPERIÊNCIA — aparece na seção "Experiência" da página inicial,
 * na ordem em que está aqui (coloque a mais recente primeiro).
 *
 *  period      período (ex: "2024 — Atual")
 *  role        cargo
 *  company     empresa / estúdio / instituição
 *  location    cidade ou "Remoto" (opcional)
 *  description resumo do que você fez (opcional)
 *  items       lista de tópicos (opcional, aparece abaixo da descrição)
 *
 *  Fonte: perfil do LinkedIn (linkedin.com/in/fabibarili).
 */
const EXPERIENCE = [
  {
    period: { pt: "Out 2023 — Atual", en: "Oct 2023 — Present" },
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    company: "Infinity Games",
    location: { pt: "Remoto · Portugal", en: "Remote · Portugal" },
    // Uma lista de itens vira tópicos (bullets); um texto único vira parágrafo
    items: [
      {
        pt: "Fui owner de novas features do conceito à implementação, com foco em retenção de jogadores e iteração contínua de UI/UX.",
        en: "Owned new features from concept through implementation, focused on player retention and continuous UI/UX iteration.",
      },
      {
        pt: "Fui responsável pelo balanceamento, tuning e modelagem da economia do jogo, usando planilhas avançadas (Google Sheets) para otimizar os sistemas de progressão.",
        en: "Owned game balancing, tuning and in-game economy modeling, using advanced spreadsheet models (Google Sheets) to optimize progression systems.",
      },
      {
        pt: "Desenhei e executei estratégias de monetização e eventos de LiveOps para jogos live-service com milhares de jogadores simultâneos.",
        en: "Designed and ran monetization strategies and LiveOps events for live-service games with thousands of concurrent players.",
      },
      {
        pt: "Conduzi decisões de design orientadas a dados com analytics (GameAnalytics) e KPIs, rodando testes A/B para validar hipóteses de design e otimizar a performance do produto.",
        en: "Drove data-driven design decisions using analytics (GameAnalytics) and KPIs, running A/B tests to validate design hypotheses and optimize product performance.",
      },
      {
        pt: "Fiz pesquisa de mercado e benchmarking de concorrentes para acompanhar as tendências da indústria e trazer boas práticas para o game design.",
        en: "Conducted market research and competitive benchmarking to track industry trends and bring best practices into game design.",
      },
      {
        pt: "Criei ferramentas internas para agilizar os pipelines de produção e de conteúdo e otimizar fluxos de trabalho entre as diferentes áreas.",
        en: "Built internal tools to streamline production and content pipelines and optimize workflows across disciplines.",
      },
      {
        pt: "Trabalhei com times internacionais e multidisciplinares para resolver problemas complexos de design e manter produtos live de alta performance.",
        en: "Partnered with international, cross-functional teams to solve complex design problems and maintain high-performing live products.",
      },
      {
        pt: "Apliquei um fluxo de trabalho AI-native para criar ferramentas de design que otimizam tarefas, analisam o comportamento e os dados dos jogadores e mantêm dashboards diários de KPIs para monitorar a saúde do jogo, preservando o julgamento criativo, a autoria do design e a tomada de decisão.",
        en: "Applied an AI-native workflow to build design tools that optimize tasks, analyze player behavior and data, and maintain daily KPI dashboards to monitor game health, while keeping creative judgment, design ownership and decision-making.",
      },
    ],
  },
  {
    period: { pt: "Mai 2021 — Out 2023", en: "May 2021 — Oct 2023" },
    role: "Game Designer",
    company: "Tapps Games",
    location: { pt: "Remoto · São Paulo, BR", en: "Remote · São Paulo, BR" },
    items: [
      {
        pt: "Desenhei as mecânicas de core gameplay, os sistemas de progressão e a arquitetura de sistemas do jogo por meio de um systems design completo.",
        en: "Designed core gameplay mechanics, progression systems and the overall game systems architecture through full systems design.",
      },
      {
        pt: "Fui owner e fiz o ship de novas features do conceito à produção, alinhando a visão do jogo aos objetivos de engajamento dos jogadores.",
        en: "Owned and shipped new features from concept through production, aligning the game's vision with player engagement goals.",
      },
      {
        pt: "Criei protótipos, mockups interativos e user flows no Figma para iterar na UI/UX e alinhar os times multidisciplinares.",
        en: "Created prototypes, interactive mockups and user flows in Figma to iterate on UI/UX and build alignment across cross-functional teams.",
      },
      {
        pt: "Defini o balanceamento, os modelos matemáticos e o tuning da economia do jogo para garantir sistemas de progressão sustentáveis.",
        en: "Defined game balance, mathematical models and in-game economy tuning to ensure sustainable progression systems.",
      },
      {
        pt: "Desenhei e integrei estratégias de monetização orientadas a dados para aumentar a receita e maximizar KPIs de monetização como o lifetime value (LTV).",
        en: "Designed and integrated data-driven monetization strategies to grow revenue and maximize monetization KPIs such as lifetime value (LTV).",
      },
      {
        pt: "Conduzi testes A/B e acompanhei métricas-chave e KPIs para validar hipóteses de design, resolver problemas de design e iterar com base no comportamento dos jogadores.",
        en: "Ran A/B tests and tracked key metrics and KPIs to validate design hypotheses, solve design problems and iterate based on player behavior.",
      },
    ],
  },
  {
    period: { pt: "Abr 2019 — Mai 2021", en: "Apr 2019 — May 2021" },
    role: "Game Developer",
    company: "Hogarth",
    location: { pt: "Remoto · Porto Alegre, BR", en: "Remote · Porto Alegre, BR" },
    items: [
      {
        pt: "Desenvolvimento de jogos com Unity 3D e Unreal para clientes nacionais e internacionais.",
        en: "Game development with Unity 3D and Unreal for national and international clients.",
      },
      {
        pt: "Desenvolvimento XR para experiências de clientes.",
        en: "XR development for client experiences.",
      },
      {
        pt: "Experiência web 360° com React VR.",
        en: "360° web experience built with React VR.",
      },
      {
        pt: "Game Design e Level Design para projetos internos.",
        en: "Game Design and Level Design for internal projects.",
      },
    ],
  },
  {
    period: { pt: "Ago 2018 — Abr 2019", en: "Aug 2018 — Apr 2019" },
    role: { pt: "Professora", en: "Teacher" },
    company: "Senac RS",
    location: "Porto Alegre, BR",
    description: {
      pt: "Ministrei aulas no curso de Jogos Digitais do Senac, ensinando os conceitos e conhecimentos relacionados a Game Design, Programação em Unity e Gestão de Projetos.",
      en: "Taught in Senac's Digital Games program, covering the concepts and skills of Game Design, Unity Programming and Project Management.",
    },
  },
  {
    period: { pt: "Jan 2017 — Abr 2019", en: "Jan 2017 — Apr 2019" },
    role: "Game Designer & Developer",
    company: { pt: "Freelancer", en: "Freelance" },
    location: "Porto Alegre, BR",
    description: {
      pt: "Atuei como Game Designer e Game Developer em projetos voltados à realidade virtual e aumentada, com temas relacionados à saúde.",
      en: "Worked as a Game Designer and Game Developer on virtual and augmented reality projects with health-related themes.",
    },
  },
  {
    period: { pt: "Jan 2016 — Jan 2019", en: "Jan 2016 — Jan 2019" },
    role: { pt: "Pesquisa acadêmica", en: "Researcher" },
    company: "Universidade Feevale",
    description: {
      pt: "Desenvolvi pesquisa científica na área de jogos digitais, saúde, realidade virtual e aumentada. Publiquei artigos científicos em eventos nacionais e internacionais.",
      en: "Conducted scientific research in digital games, health, and virtual and augmented reality, and published scientific papers at national and international conferences.",
    },
  },
];

/*
 * Cada jogo vira um card na página inicial e uma página de detalhes
 * em game.html?id=<id>.
 *
 * Campos:
 *  id          identificador único usado na URL (sem espaços)
 *  title       nome do jogo
 *  tagline     frase curta que aparece no card
 *  studio      estúdio / desenvolvedora
 *  year        ano (opcional)
 *  role        seu papel no projeto
 *  platform    plataformas
 *  tools       ferramentas usadas (viram tags depois das Responsabilidades)
 *  tags        características do jogo (gênero, modelo, plataforma) — aparecem só no card
 *  cover       imagem de capa do card (assets/...)
 *  hero        imagem do banner no topo da página do jogo (opcional; usa a capa se faltar).
 *              Todos os banners têm o mesmo formato largo (1272 × 448) e a imagem
 *              preenche o quadro; partes que não cabem são cortadas.
 *  heroPosition  qual parte da imagem fica visível no banner (opcional;
 *              padrão "center"; ex: "center 40%" mostra um pouco mais do topo)
 *  color       cor de fundo (aparece enquanto a imagem carrega)
 *  video       ID de um vídeo do YouTube (opcional)
 *  links       botões: googlePlay(url) / appStore(url) viram o selo da loja;
 *              { label, url } vira um botão comum (ex: site do jogo)
 *  sections    blocos de texto: { heading, body } e/ou { heading, items: [...] }
 */
const googlePlay = (url) => ({ store: "google", label: "Google Play", url });
const appStore = (url) => ({ store: "apple", label: "App Store", url });

const H = {
  overview: { pt: "Sobre o jogo", en: "About the game" },
  role: { pt: "Responsabilidades", en: "Responsibilities" },
};

const GAMES = [
  {
    id: "colorwood-associations",
    title: "Colorwood Associations Words",
    tagline: {
      pt: "Puzzle de associação de palavras, calmo e inteligente.",
      en: "A calm yet clever word association puzzle.",
    },
    studio: "Burny Games & Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "Android, iOS",
    tools: "Unity, Miro, Asana, Google Sheets, Amplitude, Figma, Claude Code",
    tags: ["Puzzle", { pt: "Palavras", en: "Word" }, "Mobile", "Free to Play"],
    cover: "assets/covers/colorwood.webp",
    hero: "assets/gallery/colorwood/banner.webp",
    color: "#e9dcc7",
    video: "ZLbdQBRAxnI",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=games.burny.associations.word.puzzle"),
      appStore("https://apps.apple.com/us/app/associations-colorwood-game/id6749696890"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um jogo de associação que convida o jogador a desacelerar e pensar de forma criativa. Cada fase apresenta palavras que parecem não ter relação — até que a lógica escondida começa a aparecer. Feito para quem ama linguagem, reconhecimento de padrões e aquele momento de “aha!”.",
          en: "An association game that invites you to slow down and think creatively. Each level presents a set of words that seem unrelated — until you uncover the hidden logic behind them. Designed for those who love language, pattern recognition and that rewarding “aha” moment.",
        },
      },
      {
        heading: { pt: "Principais contribuições", en: "Key contributions" },
        items: [
          {
            pt: "Conceito e estratégia de mercado: pesquisa de mercado e análise de concorrentes aprofundadas para definir o core loop, a visão do jogo e seus diferenciais.",
            en: "Concept & Market Strategy: Led in-depth market research and competitive analysis to define the core loop, game vision and unique selling points (USPs).",
          },
          {
            pt: "Documentação e UX/UI: Game Design Document (GDD) completo, user flows e wireframes priorizando uma experiência intuitiva para o jogador.",
            en: "Documentation & UX/UI: Authored the full Game Design Document (GDD), user flows and wireframes, prioritizing an intuitive player experience.",
          },
          {
            pt: "Ferramentas e pipeline: em parceria com a engenharia, desenhei uma ferramenta proprietária de level design na Unity e filtros avançados em planilha, agilizando a prototipação e o balanceamento do jogo.",
            en: "Tools & Pipeline: Partnered with engineering to design a proprietary Unity level design tool and advanced spreadsheet filters, streamlining prototyping and game balancing.",
          },
          {
            pt: "Game feel: defini a estratégia de feedback háptico e as interações de UI/UX para maximizar o “juice” e a experiência do jogador.",
            en: "Game Feel: Defined the haptic feedback strategy and UI/UX interactions to maximize “juice” and player satisfaction.",
          },
          {
            pt: "Colaboração multidisciplinar: colaboração ágil com Arte, Engenharia e Produto, cumprindo os milestones com alta qualidade.",
            en: "Cross-functional Collaboration: Worked in agile cycles with Art, Engineering and Product, hitting milestones while maintaining high quality.",
          },
        ],
      },
    ],
  },
  {
    id: "pet-shop-fever",
    title: "Pet Shop Fever: Hotel Animal",
    tagline: {
      pt: "Gerenciamento de tempo num hotel para pets.",
      en: "Time management at a hotel for pets.",
    },
    studio: "Tapps Games",
    role: "Game Designer",
    platform: "Android",
    tools: "Unity, Miro, Google Sheets, Figma, Photoshop, ClickUp, Firebase",
    tags: [{ pt: "Gerenciamento de tempo", en: "Time management" }, "Casual", "Mobile", "Free to Play"],
    cover: "assets/covers/pet-shop-fever.webp",
    hero: "assets/gallery/pet-shop-fever/1.webp",
    heroPosition: "center 55%",
    color: "#bfe3f2",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=com.tapps.virtual.pet.hotel.games.world"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "No seu hotel para pets você precisa dar banho, tosar e cuidar da saúde dos animais — mas seja rápido, antes que algum pet saia do controle!",
          en: "At your pet hotel you bathe, groom and look after the animals' health — but be quick, before a pet gets out of control!",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Revisão do core gameplay nos gêneros time management e dash, com benchmark de jogos do gênero.",
            en: "Competitive Analysis: Benchmarked top time management and dash games to review and refine the core mechanics.",
          },
          {
            pt: "Definição de bundles e IAPs e do momento certo de apresentar cada oferta na progressão.",
            en: "Monetization: Designed bundles and IAP offers, defining when each offer appears along the progression curve.",
          },
          {
            pt: "Refinamento do FTUE com foco em “pick-and-play”, guiado por métricas de produto.",
            en: "FTUE: Redesigned onboarding around a “pick-and-play” approach, iterating based on product metrics.",
          },
          {
            pt: "Planejamento de roadmap com o time de produto, prototipação de features e documentação.",
            en: "Roadmap & Prototyping: Planned the feature roadmap with Product, and owned feature prototyping and design documentation.",
          },
        ],
      },
    ],
  },
  {
    id: "dino-quest-2",
    title: "Dino Quest 2",
    tagline: {
      pt: "Escave fósseis e monte seu museu de dinossauros.",
      en: "Dig up fossils and build your dinosaur museum.",
    },
    studio: "Tapps Games",
    role: "Game Designer",
    platform: "Android, iOS",
    tools: "Unity, Firebase, Miro, Figma, Google Sheets, ClickUp",
    tags: [{ pt: "Coleção", en: "Collection" }, "Casual", "Mobile", "Free to Play"],
    cover: "assets/covers/dino-quest-2.webp",
    hero: "assets/gallery/dino-quest-2/1.webp",
    color: "#cfe7b8",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=com.tapps.games.dig.dinoquest2"),
      appStore("https://apps.apple.com/br/app/dino-quest-2-museu-jur%C3%A1ssico/id1580107903"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Explore o mundo em busca de fósseis, faça escavações e descubra novas espécies para expor no seu museu. Quanto mais descobertas, mais visitantes no seu parque jurássico!",
          en: "Explore the world searching for fossils, go on digs and discover new species to display in your museum. The more discoveries, the more visitors to your Jurassic park!",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Novas features a partir de benchmark de jogos líderes de mercado e insights de jogadores.",
            en: "Feature Design: Designed new features informed by competitive benchmarking and player insights.",
          },
          {
            pt: "Balanceamento entre novas features e a economia do jogo.",
            en: "Economy Balancing: Balanced new features against the in-game economy to keep progression sustainable.",
          },
          {
            pt: "Bundles e IAPs com timing estratégico de ofertas.",
            en: "Monetization: Designed bundles and IAP offers with strategically timed placements.",
          },
          {
            pt: "Testes A/B identificados a partir de métricas e análise dos resultados.",
            en: "A/B Testing: Identified test opportunities from metrics and ran full post-test analysis.",
          },
          {
            pt: "FTUE “pick-and-play”, prototipação de features e documentação.",
            en: "FTUE & Prototyping: Designed a “pick-and-play” FTUE, and owned feature prototyping and documentation.",
          },
        ],
      },
    ],
  },
  {
    id: "music-tower",
    title: "Music Tower: Tap Tiles",
    tagline: {
      pt: "Jogo musical relaxante de guitarra e piano.",
      en: "A relaxing guitar and piano music game.",
    },
    studio: "Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "Android, iOS",
    tools: "Unity, Figma, Miro, Asana, Google Sheets, Game Analytics",
    tags: [{ pt: "Música", en: "Music" }, "Casual", "Mobile", "Free to Play"],
    cover: "assets/covers/music-tower.webp",
    hero: "assets/gallery/music-tower/1.webp",
    color: "#f3c6d6",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=com.twelvemoments.musicparty"),
      appStore("https://apps.apple.com/us/app/music-tower-tap-tiles/id1510739277"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um jogo simples e divertido para tocar músicas relaxantes na guitarra e no piano, enquanto você decora sua torre com itens fofos de diorama.",
          en: "A simple, fun game for playing relaxing music on guitar and piano while you decorate your tower with cute diorama items.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "FTUE: análise passo a passo com KPIs para reduzir o churn inicial, com protótipo da nova versão no Figma.",
            en: "FTUE: Ran a step-by-step funnel analysis of onboarding KPIs to reduce early churn, and prototyped the redesigned flow in Figma.",
          },
          {
            pt: "Level design: balanceamento de dificuldade a partir de métricas das músicas, criando um ritmo envolvente.",
            en: "Level Design: Tuned the difficulty curve using song-level metrics to create engaging pacing.",
          },
          {
            pt: "Monetização: análise de todas as features e da receita gerada, com ajustes para entregar mais valor ao jogador.",
            en: "Monetization: Audited each feature's revenue performance and reworked them to deliver more value to players.",
          },
          {
            pt: "Pesquisa com usuários no Typeform para descobrir que músicas os jogadores queriam e como melhorar a monetização.",
            en: "Player Research: Ran Typeform surveys to learn which songs players wanted and where monetization could improve.",
          },
          {
            pt: "Testes A/B que abriram novas oportunidades de receita e engajamento.",
            en: "A/B Testing: Ran tests that unlocked new revenue and engagement opportunities.",
          },
        ],
      },
      {
        heading: { pt: "Estratégias de monetização", en: "Monetization strategies" },
        body: {
          pt: "Mapeei todos os pontos de monetização (IAP e rewarded ads) e quais posicionamentos de anúncio tinham mais engajamento. Com isso e com benchmarks, propus reestruturar algumas features para valorizar os rewarded ads e criar novos IAPs para aumentar o ticket médio diário.",
          en: "I mapped every monetization point (IAP and rewarded ads) and which ad placements had the most engagement. With that and benchmark research, I proposed restructuring some features to strengthen rewarded ads and adding new IAPs to raise average daily revenue.",
        },
      },
      {
        heading: "FTUE",
        body: {
          pt: "Os KPIs mostravam churn durante o tutorial: algumas features não eram bem explicadas e o FTUE era longo demais. Reduzimos passos, deixamos o jogador jogar mais entre cada etapa e criamos uma “linha do tempo” que mostra a importância de cada feature.",
          en: "KPIs showed churn during the FTUE: some features weren't clearly explained and it took too long. We cut steps, let players play more between each one, and created a “timeline” showing why each feature matters.",
        },
      },
    ],
  },
  {
    id: "energy-anti-stress-loops",
    title: "Energy: Anti-Stress Loops",
    tagline: {
      pt: "Puzzle relaxante de conectar linhas de energia.",
      en: "A relaxing puzzle about connecting lines of energy.",
    },
    studio: "Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "Android, iOS",
    tools: "Miro, Asana, Google Sheets, Game Analytics, Firebase, Typeform",
    tags: ["Puzzle", { pt: "Relaxante", en: "Relaxing" }, "Mobile", "Free to Play"],
    cover: "assets/covers/energy.webp",
    hero: "assets/gallery/energy/1.webp",
    color: "#1b1d3a",
    video: "TsyCw8zXRrs",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=com.infinitygames.loopenergy"),
      appStore("https://apps.apple.com/us/app/energy-anti-stress-loops/id1301967636"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um puzzle calmante que ajuda a aliviar a ansiedade: resolva os quebra-cabeças conectando as linhas de energia, aumentando o foco e relaxando ao mesmo tempo.",
          en: "A calming, anxiety-relieving puzzle game: solve the puzzles by connecting lines of energy, boosting your focus while relaxing at the same time.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Level design: análise com dados do Game Analytics para encontrar os principais pontos de churn e proposta de reestruturação das fases iniciais.",
            en: "Level Design: Used GameAnalytics data to pinpoint the main churn points, and restructured the early-game levels.",
          },
          {
            pt: "Testes A/B do novo level design, além de testes de live ops, monetização e dificuldade, baseados em KPIs e hipóteses.",
            en: "A/B Testing: Tested the new level design, plus LiveOps, monetization and difficulty changes, based on KPIs and design hypotheses.",
          },
          {
            pt: "Pesquisa com usuários (idade, gênero, regiões, perfis e hábitos de compra) para criar estratégias de monetização por tiers.",
            en: "Player Research: Segmented players by age, gender, region, profile and spending habits to build tier-based monetization strategies.",
          },
          {
            pt: "Live ops: eventos para aumentar retenção e receita, com base em benchmarks como Royal Match.",
            en: "LiveOps: Designed in-game events to boost retention and revenue, benchmarked against top titles such as Royal Match.",
          },
          {
            pt: "Mapeamento de eventos de analytics para coletar KPIs mais detalhados.",
            en: "Analytics: Mapped analytics events to capture more granular KPI data.",
          },
          { pt: "Documentação de todas as features e decisões.", en: "Documentation: Documented every feature and design decision." },
        ],
      },
      {
        heading: { pt: "Análise de churn por fase", en: "Level churn analysis" },
        body: {
          pt: "Usei os dados das fases nos principais países do jogo para identificar um padrão de churn e organizei tudo numa planilha. Ao analisar as semelhanças visuais entre as fases, encontramos um padrão a ser corrigido e rodamos um teste A/B com o novo level design — o churn nas fases mais problemáticas caiu.",
          en: "I used level data from the game's main countries to find a churn pattern and organized it in a spreadsheet. By analyzing visual similarities between levels we found a pattern to fix and ran an A/B test with a new level design — churn dropped on the most problematic levels.",
        },
      },
      {
        heading: { pt: "Pesquisa com usuários", en: "User research" },
        body: {
          pt: "Com o Firebase identificamos faixa etária, gênero e regiões predominantes, e com uma pesquisa no Typeform (perguntas qualitativas e quantitativas) encontramos lacunas no jogo e oportunidades de novas features, monetização e engajamento.",
          en: "Using Firebase we identified the main age range, gender and regions, and a Typeform survey (qualitative and quantitative questions) revealed gaps in the game and opportunities for new features, monetization and engagement.",
        },
      },
    ],
  },
  {
    id: "baneville",
    title: "Baneville",
    tagline: {
      pt: "Jogo educativo para estudantes, professores e comunidade.",
      en: "An educational game for students, teachers and the community.",
    },
    studio: "Gray Company",
    role: { pt: "Game Designer & Roteirista", en: "Game Designer & Writer" },
    platform: "Web, Android, iOS",
    tools: "Unity",
    tags: [{ pt: "Educativo", en: "Educational" }, { pt: "Narrativa", en: "Narrative" }, "Web & Mobile"],
    cover: "assets/covers/baneville.webp",
    hero: "assets/gallery/baneville/2.webp",
    color: "#2b3a55",
    video: "so12PGPdolA",
    links: [
      { label: { pt: "Site do jogo", en: "Game website" }, url: "https://baneville.educacao.rs.gov.br/" },
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Baneville é um jogo educativo que busca envolver estudantes, professores e a comunidade com os temas trabalhados pela CIPAVE. Disponível na Web, Android e iOS.",
          en: "Baneville is an educational game that engages students, teachers and the community with the themes addressed by CIPAVE. Available on Web, Android and iOS.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Roteiro: escrita de um roteiro diverso, cobrindo vários temas, voltado para crianças.",
            en: "Narrative Design: Wrote a diverse, child-friendly script covering multiple educational subjects.",
          },
          {
            pt: "Experiência de gameplay: alinhar os objetivos de cada tema do roteiro com o gameplay.",
            en: "Gameplay Experience: Aligned each subject's learning goals with the gameplay.",
          },
          { pt: "Documentação detalhada em todas as etapas.", en: "Documentation: Produced detailed design documentation at every stage of development." },
        ],
      },
    ],
  },
  {
    id: "neat-nexus",
    title: "Neat Nexus: Idle Tower Defense",
    tagline: {
      pt: "Tower defense simples, mas desafiador.",
      en: "A simple yet challenging tower defense.",
    },
    studio: "Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "Android, iOS",
    tools: "Asana, Miro, Google Sheets",
    tags: ["Idle", "Tower Defense", "Mobile", "Free to Play"],
    cover: "assets/covers/neat-nexus.webp",
    hero: "assets/gallery/neat-nexus/1.webp",
    heroPosition: "center 40%",
    color: "#10141f",
    video: "vBNBuzEfT-U",
    links: [
      googlePlay("https://play.google.com/store/apps/details?id=com.infinitygames.NeatNexus"),
      appStore("https://apps.apple.com/us/app/neat-nexus-idle-tower-defense/id1670950808"),
    ],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um jogo de estratégia e tower defense: use torres e upgrades variados para impedir que os inimigos cheguem à sua base.",
          en: "A strategy and tower defense game: use a variety of towers and upgrades to stop enemies from reaching your base.",
        },
      },
      {
        heading: H.role,
        body: {
          pt: "Entrei no projeto com o desenvolvimento já em andamento. Meu foco foi balanceamento, level design e justiça entre inimigos e torres.",
          en: "I joined after development had started. My focus was balancing, level design and fairness between enemies and towers.",
        },
        items: [
          {
            pt: "Organização dos core loops, monetização, balanceamento e desbloqueio de torres; estrutura de como o jogador ganha e gasta recursos.",
            en: "Systems Design: Structured the core loop, monetization, tower unlocks and resource economy (how players earn and spend).",
          },
          {
            pt: "Definição de vida e poder das torres e do ritmo das fases.",
            en: "Balancing: Defined tower health and power values, and the pacing of each level.",
          },
          {
            pt: "Simulador de fases (inimigos vs. torres) para saber quantas e quais torres o jogador precisa para vencer.",
            en: "Level Simulator: Built an enemies-vs-towers simulator to determine how many towers, and which ones, players need to win each level.",
          },
          {
            pt: "Balanceamento de inimigos (ataque, vida e presença nas fases) e de power-ups.",
            en: "Enemy & Power-up Tuning: Balanced enemy stats (attack, health and spawn presence) and power-ups.",
          },
          {
            pt: "Análise de problemas de UI/UX junto ao time de arte e documentação para devs.",
            en: "UX & Documentation: Identified UI/UX issues with the art team, and kept developer documentation up to date.",
          },
        ],
      },
      {
        heading: { pt: "Balanceamento da economia", en: "Game economy balancing" },
        body: {
          pt: "Ao derrotar inimigos, o jogador pode colocar mais torres durante a fase, e ao final compra novas torres para a próxima partida. Por isso era essencial simular quais torres estariam disponíveis em cada fase, garantindo que fosse possível vencer e criando um ritmo que desafia o jogador aos poucos.",
          en: "Defeating enemies lets players place more towers during a level, and after it they buy new towers for the next run. So it was essential to simulate which towers would be available in each level, making sure it could be won and building pacing that gradually challenges the player.",
        },
      },
    ],
  },
  {
    id: "gaiah",
    title: "Gaiah",
    tagline: {
      pt: "Monstros de RPG no mapa do mundo real.",
      en: "RPG monsters on the real-world map.",
    },
    studio: "Julian Collin",
    role: { pt: "Game Designer (freelancer)", en: "Game Designer (freelance)" },
    team: { pt: "Freelance · 2 meses", en: "Freelance · 2 months" },
    platform: "iOS",
    tags: ["RPG", { pt: "Geolocalização", en: "Location-based" }, "Mobile"],
    cover: "assets/covers/gaiah.webp",
    hero: "assets/gallery/gaiah/1.webp",
    heroPosition: "center 40%",
    color: "#1d2b22",
    links: [],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um jogo mobile em que monstros de mundos fantásticos de RPG aparecem no mapa real — na sua rua, no shopping, nas praças — prontos para a batalha.",
          en: "A mobile game where monsters from fantasy RPG worlds appear on the real-world map — on your street, at the mall, in squares — ready to battle.",
        },
      },
      {
        heading: H.role,
        body: {
          pt: "Freelance de 2 meses corrigindo a experiência de gameplay, melhorando as informações do jogo e o fluxo de telas.",
          en: "Two-month freelance contract fixing the gameplay experience and improving in-game information and screen flow.",
        },
      },
    ],
  },
  {
    id: "city-crush",
    title: "City Crush",
    tagline: {
      pt: "Aventura e destruição com monstros colecionáveis.",
      en: "Adventure and destruction with collectible monsters.",
    },
    studio: "SouthBox",
    role: "Game Designer",
    platform: "Mobile",
    tools: "Unity",
    tags: [{ pt: "Aventura", en: "Adventure" }, "Casual", "Mobile", "Free to Play"],
    cover: "assets/covers/city-crush.webp",
    hero: "assets/gallery/city-crush/1.webp",
    color: "#3a2a4d",
    links: [],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "Um jogo free-to-play de aventura e destruição: o jogador enfrenta desafios e coleciona monstros que o ajudam a derrotar os inimigos.",
          en: "A free-to-play adventure and destruction game: players take on challenges and collect monsters that help them defeat enemies.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Level design: criação de novas fases com objetivos variados direto na Unity.",
            en: "Level Design: Built new levels with varied objectives directly in Unity.",
          },
          {
            pt: "Balanceamento de personagens e inimigos para uma experiência desafiadora e divertida.",
            en: "Balancing: Tuned character and enemy stats for a challenging yet enjoyable experience.",
          },
        ],
      },
    ],
  },
  {
    id: "chess-multiplayer",
    title: "Chess Multiplayer",
    tagline: {
      pt: "O xadrez clássico com features de engajamento.",
      en: "Classic chess with features built for engagement.",
    },
    studio: "Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "HTML5 · Poki",
    tools: "Miro, Asana, Google Sheets, Game Analytics",
    tags: [{ pt: "Tabuleiro", en: "Board game" }, "Multiplayer", "HTML5"],
    cover: "assets/covers/chess.webp",
    hero: "assets/gallery/chess/1.webp",
    color: "#22252e",
    links: [],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "O clássico jogo de tabuleiro com features pensadas para engajamento e retenção.",
          en: "The classic board game with features designed for player engagement and retention.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Conceito do jogo e definição de features para se destacar dos concorrentes.",
            en: "Game Concept: Defined the concept and feature set to differentiate it from competing chess games.",
          },
          {
            pt: "Mockups, UI e UX como referência para o time de arte.",
            en: "UI/UX: Created mockups and UI/UX flows as reference for the art team.",
          },
          {
            pt: "Customização, conquistas (para iniciantes, intermediários e avançados) e leaderboards, com balanceamento de recompensas.",
            en: "Meta Systems: Designed customization, achievements (for beginner, intermediate and advanced players) and leaderboards, with balanced rewards.",
          },
          {
            pt: "Sistemas de multiplayer e replay, e uma feature para incentivar o multiplayer.",
            en: "Multiplayer: Designed multiplayer and replay systems, plus a feature to drive multiplayer engagement.",
          },
          {
            pt: "Power-ups para ajudar iniciantes e criar oportunidades de monetização.",
            en: "Power-ups: Designed power-ups that support beginners and create monetization opportunities.",
          },
          {
            pt: "FTUE, eventos de analytics no Game Analytics e documentação de todas as telas e features.",
            en: "FTUE & Analytics: Owned the FTUE, GameAnalytics event mapping and documentation for every screen and feature.",
          },
        ],
      },
      {
        heading: { pt: "Oportunidades de engajamento", en: "Engagement opportunity" },
        items: [
          {
            pt: "Match Challenge: oponentes desafiam o jogador para partidas difíceis com recompensas especiais.",
            en: "Match Challenge: Opponents challenge players to tough matches with special rewards.",
          },
          {
            pt: "Game Challenge: inspirado na literatura clássica de xadrez, com posições que exigem soluções estratégicas para vencer.",
            en: "Game Challenge: Puzzles inspired by classic chess literature, with set positions that require strategic solutions to win.",
          },
        ],
      },
    ],
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    tagline: {
      pt: "O jogo da velha clássico, com novas features.",
      en: "The classic game, with a few new twists.",
    },
    studio: "Infinity Games",
    role: { pt: "Game Designer Pleno", en: "Mid-Level Game Designer" },
    platform: "HTML5 · Poki",
    tools: "Miro, Asana, Google Sheets, Game Analytics",
    tags: ["Casual", "Multiplayer", "HTML5"],
    cover: "assets/covers/tic-tac-toe.webp",
    hero: "assets/gallery/tic-tac-toe/1.webp",
    color: "#171c45",
    links: [],
    sections: [
      {
        heading: H.overview,
        body: {
          pt: "O jogo da velha clássico, desenvolvido com features diferentes para aumentar o engajamento.",
          en: "The classic Tic Tac Toe, developed with some different features to increase player engagement.",
        },
      },
      {
        heading: H.role,
        items: [
          {
            pt: "Conceito do jogo e definição de features para se destacar dos concorrentes.",
            en: "Game Concept: Defined the concept and feature set to differentiate it from competing tic-tac-toe games.",
          },
          {
            pt: "Mockups, UI e UX como referência para o time de arte.",
            en: "UI/UX: Created mockups and UI/UX flows as reference for the art team.",
          },
          {
            pt: "Customização, leaderboards e balanceamento de monetização.",
            en: "Meta & Monetization: Designed customization and leaderboards, and balanced monetization.",
          },
          {
            pt: "Sistemas de multiplayer e replay, e uma feature para incentivar o multiplayer.",
            en: "Multiplayer: Designed multiplayer and replay systems, plus a feature to drive multiplayer engagement.",
          },
          {
            pt: "FTUE, eventos de analytics no Game Analytics e documentação de todas as telas e features.",
            en: "FTUE & Analytics: Owned the FTUE, GameAnalytics event mapping and documentation for every screen and feature.",
          },
        ],
      },
    ],
  },
];
