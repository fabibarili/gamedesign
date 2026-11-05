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
  role: "Game Designer",
  photo: "assets/foto.jpg",
  bio: [
    {
      pt: "Game Designer no Brasil com mais de 5 anos de experiência na indústria de jogos mobile. Atuo em todo o ciclo de desenvolvimento — do conceito e design de sistemas ao lançamento global e à gestão de live ops.",
      en: "Game Designer based in Brazil with over 5 years of experience in the mobile gaming industry. My work covers the full lifecycle of game development, from initial concept and systems design to global launch and live operations.",
    },
    {
      pt: "Desenho sistemas e resolvo problemas centrais de design para impulsionar retenção, engajamento e receita, conectando a visão criativa aos objetivos de negócio.",
      en: "I design systems and solve core design problems to drive player retention, engagement and revenue, bridging the gap between creative vision and business goals.",
    },
    {
      pt: "Tenho graduação em Jogos Digitais, mestrado em Indústria Criativa e em Administração de Sistemas Computacionais, e MBA em Game Design.",
      en: "I hold a bachelor's degree in Digital Games, master's degrees in Creative Industry and in Computer Systems Administration, and an MBA in Game Design.",
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
        pt: "Criei e fui owner de novas features do conceito à implementação, com foco em retenção de jogadores e melhorias contínuas de UI/UX.",
        en: "Designed and owned new features from concept to implementation, focusing on player retention and continuous UI/UX improvements.",
      },
      {
        pt: "Gerenciei o balanceamento e a modelagem de economia com fluxos avançados no Google Sheets para otimizar a progressão do jogo.",
        en: "Managed Game Balance and economy modeling using advanced Google Sheets workflows to streamline game progression.",
      },
      {
        pt: "Desenvolvi e executei estratégias de monetização e eventos de LiveOps para jogos live com milhares de jogadores simultâneos.",
        en: "Developed and executed Monetization Strategies and LiveOps events for live titles scaled to thousands of concurrent players.",
      },
      {
        pt: "Usei Game Analytics e KPIs para tomar decisões orientadas a dados, rodando testes A/B para validar features e otimizar a performance do produto.",
        en: "Utilized Game Analytics and KPIs to drive data-informed decisions, running A/B Testing to validate features and optimize product performance.",
      },
      {
        pt: "Fiz benchmarks de mercado para identificar tendências da indústria e trazer boas práticas dos concorrentes para o desenvolvimento.",
        en: "Conducted market benchmarking to identify industry trends and integrate competitive best practices into development.",
      },
      {
        pt: "Criei ferramentas de produtividade para acelerar pipelines de desenvolvimento e otimizar fluxos de trabalho em diferentes áreas.",
        en: "Built custom productivity tools to accelerate development pipelines and optimize workflows across different areas.",
      },
      {
        pt: "Colaborei em times internacionais e multidisciplinares para resolver gargalos complexos de design e manter produtos live de alta performance.",
        en: "Collaborated within international, multidisciplinary teams to solve complex design bottlenecks and sustain high-performing live products.",
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
        pt: "Desenhei mecânicas centrais, progressão e a arquitetura do jogo por meio de um System Design completo.",
        en: "Designed core mechanics, progression, and underlying game architecture through comprehensive System Design.",
      },
      {
        pt: "Concebi e entreguei novas features da ideação à produção, alinhando a direção criativa aos objetivos de engajamento dos jogadores.",
        en: "Conceptualized and delivered new features from ideation to production, aligning creative direction with player engagement goals.",
      },
      {
        pt: "Criei mockups interativos e fluxos de usuário com protótipos no Figma para refinar a UI/UX e alinhar times multidisciplinares.",
        en: "Created interactive mockups and user flows via Prototyping with Figma to refine UI/UX and align multidisciplinary teams.",
      },
      {
        pt: "Estruturei sistemas de balanceamento, modelos matemáticos e ajuste de economia para garantir uma progressão sustentável.",
        en: "Structured Game Balance systems, mathematical models, and economy tuning to ensure sustainable game progression.",
      },
      {
        pt: "Formulei e integrei estratégias de monetização orientadas a dados para aumentar a receita e maximizar o lifetime value (LTV).",
        en: "Formulated and integrated data-driven Monetization Strategies to drive revenue and maximize lifetime value (LTV).",
      },
      {
        pt: "Conduzi testes A/B e acompanhei métricas de performance para validar features, resolver gargalos de design e iterar com base no comportamento dos jogadores.",
        en: "Conducted A/B Testing and monitored performance metrics to validate features, resolve design bottlenecks, and iterate based on live player behavior.",
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
        pt: "Desenvolvimento de jogos com Unity 3D e Unreal",
        en: "Game Development with Unity 3D and Unreal",
      },
      {
        pt: "Desenvolvimento XR",
        en: "XR development",
      },
      {
        pt: "Experiência web 360° com React VR",
        en: "360 web experience using React VR",
      },
      {
        pt: "Gamificação",
        en: "Gamification",
      },
      {
        pt: "Game Design",
        en: "Game Design",
      },
      {
        pt: "Level Design",
        en: "Level Design",
      },
    ],
  },
  {
    period: { pt: "Ago 2018 — Abr 2019", en: "Aug 2018 — Apr 2019" },
    role: { pt: "Professora", en: "Teacher" },
    company: "Senac RS",
    location: "Porto Alegre, BR",
    description: {
      pt: "Aulas no curso de Jogos Digitais sobre:",
      en: "Classes in the Digital Games course about:",
    },
    items: [
      {
        pt: "Game Design",
        en: "Game Design",
      },
      {
        pt: "Programação com Unity",
        en: "Programming using Unity",
      },
      {
        pt: "Gestão de projetos",
        en: "Project management",
      },
    ],
  },
  {
    period: { pt: "Jan 2017 — Abr 2019", en: "Jan 2017 — Apr 2019" },
    role: "Game Designer & Developer",
    company: { pt: "Freelancer", en: "Freelance" },
    location: "Porto Alegre, BR",
    description: {
      pt: "Desenvolvimento de jogos e simulações em realidade virtual e aumentada, com foco em saúde.",
      en: "Game development and virtual/augmented reality simulations focused on health.",
    },
  },
  {
    period: { pt: "Jan 2016 — Jan 2019", en: "Jan 2016 — Jan 2019" },
    role: { pt: "Pesquisa acadêmica", en: "Researcher" },
    company: "Universidade Feevale",
    description: {
      pt: "Pesquisa em jogos, saúde, realidade virtual e realidade aumentada.",
      en: "Research on games, health, virtual reality and augmented reality.",
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
 *  hero        imagem larga do topo da página do jogo (opcional; usa a capa se faltar)
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
    role: "Mid-Game Designer",
    platform: "Android, iOS",
    tools: "Unity, Miro, Asana, Google Sheets",
    tags: ["Puzzle", { pt: "Palavras", en: "Word" }, "Mobile", "Free to Play"],
    cover: "assets/covers/colorwood.webp",
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
            pt: "Conceito e estratégia de mercado: análise aprofundada de concorrentes para definir o core loop e os diferenciais do jogo.",
            en: "Concept & market strategy: deep-dive competitor analysis to define the core loop and unique selling points.",
          },
          {
            pt: "Documentação e UX: GDD completo, fluxos de tela e wireframes priorizando uma jornada intuitiva.",
            en: "System documentation & UX: authored the full GDD and designed end-to-end screen flows and wireframes for an intuitive player journey.",
          },
          {
            pt: "Ferramentas e pipeline: junto aos devs, desenhei uma ferramenta proprietária de criação de fases na Unity e filtros avançados em planilha, acelerando a prototipação e o balanceamento.",
            en: "Tooling & pipeline: with the developers, designed a proprietary level creation tool in Unity plus advanced spreadsheet filters, making level prototyping and balancing much faster.",
          },
          {
            pt: "Game feel: defini a estratégia de feedback háptico e as interações de UI para maximizar o “juice”.",
            en: "Game feel & polish: defined the haptic feedback strategy and UI interactions to maximize satisfaction and “juice”.",
          },
          {
            pt: "Colaboração ágil com Arte, Engenharia e Produto, cumprindo marcos sem comprometer a qualidade.",
            en: "Agile collaboration with Art, Engineering and Product, hitting milestones without compromising quality.",
          },
        ],
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
    role: "Mid-Game Designer",
    platform: "Android, iOS",
    tools: "Miro, Asana, Spreadsheets, Game Analytics, Firebase, Typeform",
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
            en: "Level design: used Game Analytics data to find the main churn issues and proposed a restructure of the early levels.",
          },
          {
            pt: "Testes A/B do novo level design, além de testes de live ops, monetização e dificuldade, baseados em KPIs e hipóteses.",
            en: "A/B tests for the new level design, plus live ops, monetization and difficulty tests based on KPIs and hypotheses.",
          },
          {
            pt: "Pesquisa com usuários (idade, gênero, regiões, perfis e hábitos de compra) para criar estratégias de monetização por tiers.",
            en: "User research (age, gender, regions, player profiles and spending habits) to build tier-based monetization strategies.",
          },
          {
            pt: "Live ops: eventos para aumentar retenção e receita, com base em benchmarks como Royal Match.",
            en: "Live ops: in-game events to raise retention and revenue, based on benchmarks such as Royal Match.",
          },
          {
            pt: "Mapeamento de eventos de analytics para coletar KPIs mais detalhados.",
            en: "Event analytics mapping to collect more detailed KPI data.",
          },
          { pt: "Documentação de todas as features e decisões.", en: "Documentation of every feature and decision." },
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
    id: "music-tower",
    title: "Music Tower: Tap Tiles",
    tagline: {
      pt: "Jogo musical relaxante de guitarra e piano.",
      en: "A relaxing guitar and piano music game.",
    },
    studio: "Infinity Games",
    role: "Mid-Game Designer",
    platform: "Android, iOS",
    tools: "Unity, Figma, Miro, Asana, Spreadsheets, Game Analytics",
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
            en: "FTUE: step-by-step KPI analysis to reduce early churn, with the new version prototyped in Figma.",
          },
          {
            pt: "Level design: balanceamento de dificuldade a partir de métricas das músicas, criando um ritmo envolvente.",
            en: "Level design: balanced difficulty from song metrics to create engaging pacing.",
          },
          {
            pt: "Monetização: análise de todas as features e da receita gerada, com ajustes para entregar mais valor ao jogador.",
            en: "Monetization: analyzed every feature's revenue performance and adjusted them to deliver more value to players.",
          },
          {
            pt: "Pesquisa com usuários no Typeform para descobrir que músicas os jogadores queriam e como melhorar a monetização.",
            en: "Typeform user research to learn which songs players wanted and how to improve monetization.",
          },
          {
            pt: "Testes A/B que abriram novas oportunidades de receita e engajamento.",
            en: "A/B tests that opened new revenue and engagement opportunities.",
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
    id: "pet-shop-fever",
    title: "Pet Shop Fever: Hotel Animal",
    tagline: {
      pt: "Gerenciamento de tempo num hotel para pets.",
      en: "Time management at a hotel for pets.",
    },
    studio: "Tapps Games",
    role: "Game Designer",
    platform: "Android",
    tools: "Unity, Miro, Spreadsheets, Figma, Photoshop, ClickUp, Firebase",
    tags: [{ pt: "Gerenciamento de tempo", en: "Time management" }, "Casual", "Mobile", "Free to Play"],
    cover: "assets/covers/pet-shop-fever.webp",
    hero: "assets/gallery/pet-shop-fever/1.webp",
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
            en: "Reviewed the core mechanics in the time management and dash genres, benchmarking leading games.",
          },
          {
            pt: "Definição de bundles e IAPs e do momento certo de apresentar cada oferta na progressão.",
            en: "Defined bundles and IAPs and when to present each offer during progression.",
          },
          {
            pt: "Refinamento do FTUE com foco em “pick-and-play”, guiado por métricas de produto.",
            en: "Refined the FTUE around “pick-and-play”, guided by product metrics.",
          },
          {
            pt: "Planejamento de roadmap com o time de produto, prototipação de features e documentação.",
            en: "Roadmap planning with the product team, feature prototyping and documentation.",
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
    tools: "Unity, Firebase, Miro, Figma, Spreadsheets, ClickUp",
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
            en: "New features driven by benchmarks of market-leading games and player insights.",
          },
          {
            pt: "Balanceamento entre novas features e a economia do jogo.",
            en: "Balancing new features against the game's economy.",
          },
          {
            pt: "Bundles e IAPs com timing estratégico de ofertas.",
            en: "Bundles and IAPs with strategically timed offers.",
          },
          {
            pt: "Testes A/B identificados a partir de métricas e análise dos resultados.",
            en: "A/B tests identified from metrics, with full analysis of the results.",
          },
          {
            pt: "FTUE “pick-and-play”, prototipação de features e documentação.",
            en: "“Pick-and-play” FTUE, feature prototyping and documentation.",
          },
        ],
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
            en: "Screenwriting: wrote a diverse script covering several subjects, tailored for children.",
          },
          {
            pt: "Experiência de gameplay: alinhar os objetivos de cada tema do roteiro com o gameplay.",
            en: "Gameplay experience: aligned the goals of each script subject with the gameplay.",
          },
          { pt: "Documentação detalhada em todas as etapas.", en: "Detailed documentation at every stage." },
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
    role: "Mid-Game Designer",
    platform: "Android, iOS",
    tools: "Asana, Miro, Spreadsheets",
    tags: ["Idle", "Tower Defense", "Mobile", "Free to Play"],
    cover: "assets/covers/neat-nexus.webp",
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
            en: "Organized core loops, monetization, tower balancing and unlocks; structured how players earn and spend resources.",
          },
          {
            pt: "Definição de vida e poder das torres e do ritmo das fases.",
            en: "Defined tower health and power values and level pacing.",
          },
          {
            pt: "Simulador de fases (inimigos vs. torres) para saber quantas e quais torres o jogador precisa para vencer.",
            en: "Built a level simulator (enemies vs. towers) to know how many and which towers players need to win.",
          },
          {
            pt: "Balanceamento de inimigos (ataque, vida e presença nas fases) e de power-ups.",
            en: "Balanced enemies (attack, health and presence in levels) and power-ups.",
          },
          {
            pt: "Análise de problemas de UI/UX junto ao time de arte e documentação para devs.",
            en: "Analyzed UI/UX issues with the art team and kept developer documentation up to date.",
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
            en: "Level design: built new levels with varied objectives directly in Unity.",
          },
          {
            pt: "Balanceamento de personagens e inimigos para uma experiência desafiadora e divertida.",
            en: "Balanced characters and enemies for a challenging yet enjoyable experience.",
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
    role: "Mid-Game Designer",
    platform: "HTML5 · Poki",
    tools: "Miro, Asana, Spreadsheets, Game Analytics",
    tags: [{ pt: "Tabuleiro", en: "Board game" }, "Multiplayer", "HTML5"],
    cover: "assets/covers/chess.webp",
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
            en: "Game concept and feature set to stand out from competing chess games.",
          },
          {
            pt: "Mockups, UI e UX como referência para o time de arte.",
            en: "Mockups, UI and UX as reference for the art team.",
          },
          {
            pt: "Customização, conquistas (para iniciantes, intermediários e avançados) e leaderboards, com balanceamento de recompensas.",
            en: "Customization, achievements (for beginner, intermediate and advanced players) and leaderboards, with balanced rewards.",
          },
          {
            pt: "Sistemas de multiplayer e replay, e uma feature para incentivar o multiplayer.",
            en: "Multiplayer and replay systems, plus a feature to drive multiplayer engagement.",
          },
          {
            pt: "Power-ups para ajudar iniciantes e criar oportunidades de monetização.",
            en: "Power-ups to help beginners and create monetization opportunities.",
          },
          {
            pt: "FTUE, eventos de analytics no Game Analytics e documentação de todas as telas e features.",
            en: "FTUE, Game Analytics events and documentation for every screen and feature.",
          },
        ],
      },
      {
        heading: { pt: "Oportunidades de engajamento", en: "Engagement opportunity" },
        items: [
          {
            pt: "Match Challenge: oponentes desafiam o jogador para partidas difíceis com recompensas especiais.",
            en: "Match Challenge: opponents challenge players to tough matches with special rewards.",
          },
          {
            pt: "Game Challenge: inspirado na literatura clássica de xadrez, com posições que exigem soluções estratégicas para vencer.",
            en: "Game Challenge: inspired by classic chess literature, with set positions that require strategic solutions to win.",
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
    role: "Mid-Game Designer",
    platform: "HTML5 · Poki",
    tools: "Miro, Asana, Spreadsheets, Game Analytics",
    tags: ["Casual", "Multiplayer", "HTML5"],
    cover: "assets/covers/tic-tac-toe.webp",
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
            en: "Game concept and feature set to stand out from competing tic-tac-toe games.",
          },
          {
            pt: "Mockups, UI e UX como referência para o time de arte.",
            en: "Mockups, UI and UX as reference for the art team.",
          },
          {
            pt: "Customização, leaderboards e balanceamento de monetização.",
            en: "Customization, leaderboards and monetization balancing.",
          },
          {
            pt: "Sistemas de multiplayer e replay, e uma feature para incentivar o multiplayer.",
            en: "Multiplayer and replay systems, plus a feature to drive multiplayer engagement.",
          },
          {
            pt: "FTUE, eventos de analytics no Game Analytics e documentação de todas as telas e features.",
            en: "FTUE, Game Analytics events and documentation for every screen and feature.",
          },
        ],
      },
    ],
  },
];
