// ============================================================
// portfolioData.js: Centralized, bilingual (FR / EN) content
// for Lotfi Djebbar's portfolio.
//
// - Language-independent info (links, contacts) lives at the top.
// - All translatable text lives in `content.en` and `content.fr`,
//   which share exactly the same shape. Update both when editing.
// ============================================================

export const personalInfo = {
  name: "Lotfi Djebbar",
  firstName: "Lotfi",
  brandName: "Lotfi Djebbar",
  phones: ["+213 550 45 77 47", "+213 780 09 18 25"],
  emails: {
    primary: "lotfi.djebbar@g.enp.edu.dz",
  },
  website: "https://lotfi-djebbar.vercel.app",
  resumeUrls: {
    en: "/Lotfi_Djebbar_Resume.pdf",
    fr: "/Lotfi_Djebbar_CV_FR.pdf",
  },
};

export const socialLinks = {
  github: "https://github.com/LotfiDjebbar",
  linkedin: "https://linkedin.com/in/lotfi-djebbar",
};

const repo = (name) => `${socialLinks.github}/${name}`;

// ------------------------------------------------------------
// Shared (non-translated) pieces reused by both languages
// ------------------------------------------------------------

const technicalSkillLevels = {
  ai: [
    { name: "PyTorch", level: 85 },
    { name: "Transformers & Attention", level: 85 },
    { name: "RAG / LLMs", level: 85 },
    { name: "LangChain", level: 82 },
    { name: "CrewAI", level: 80 },
    { name: "Fine-tuning (BERT, DziriBERT)", level: 78 },
    { name: "Scikit-learn", level: 80 },
  ],
  data: [
    { name: "Pandas / NumPy", level: 88 },
    { name: "SQL / PostgreSQL", level: 82 },
    { name: "pgvector", level: 78 },
    { name: "Power BI", level: 75 },
    { name: "Spark / Hadoop / HDFS", level: 65 },
    { name: "Matplotlib / Seaborn", level: 82 },
  ],
  languages: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 82 },
    { name: "C / C++", level: 78 },
    { name: "JavaScript / HTML / CSS", level: 72 },
    { name: "MATLAB", level: 65 },
  ],
  tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "Docker", level: 72 },
    { name: "Linux", level: 78 },
    { name: "Ollama", level: 78 },
    { name: "React.js / Next.js", level: 72 },
    { name: "Flutter / MongoDB", level: 60 },
    { name: "Odoo 18", level: 70 },
    { name: "LaTeX", level: 85 },
  ],
};

const mailtoHire = (subject, body) =>
  `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// ============================================================
// ENGLISH
// ============================================================
const en = {
  meta: {
    title: "Lotfi Djebbar | Data Science & AI",
    description:
      "Portfolio of Lotfi Djebbar, final-year Data Science & AI engineering student at ENP Algiers: NLP, Transformers, multi-agent RAG systems and production data solutions.",
  },

  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Education", href: "#education" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hireMe: "Hire Me",
    hireMailto: mailtoHire(
      "Opportunity – Portfolio",
      "Hello Lotfi,\n\nI came across your portfolio and would like to discuss an opportunity with you.\n\nBest regards,"
    ),
    langLabel: "Passer en français",
  },

  hero: {
    greeting: "Hi, I'm Lotfi Djebbar",
    titleHighlight: "Final-Year Data Science & AI Engineering Student",
    subtitle:
      "Graduating from ENP Algiers in 2027. I build NLP models, multi-agent RAG systems and data-driven platforms, from research to production.",
    ctaPrimary: "View My Work",
    ctaSecondary: "Contact Me",
    ctaResume: "Download Resume",
    playReel: "Play Reel",
    pause: "Pause",
  },

  about: {
    heading: "Hello!",
    bioIntro: "Hi, my name is",
    bio:
      "a final-year State Engineering student in Data Science & AI at École Nationale Polytechnique d'Alger. I combine strong mathematical foundations, a research-driven mindset and hands-on industry experience: author of a from-scratch Transformer encoder for code-switched Algerian dialect (arXiv preprint), I deployed a multi-agent RAG system in production at CETELEX and I'm currently building a supplier performance platform at Stellantis El Djazaïr.",
    goals: [
      "Open to a 6-month end-of-studies internship (PFE) starting January–February 2027.",
      "Aiming for an AI / Data Science master's degree in France from September 2027.",
    ],
    avatarAlt: "Lotfi Djebbar, Data Science & AI engineering student",
    stats: [
      { value: "17th / 844", label: "National entrance exam" },
      { value: "79.4%", label: "Darija Transformer accuracy" },
      { value: "2 × 2nd", label: "Hackathon & AEC 2026" },
    ],
  },

  education: {
    badge: "Background",
    heading: "Education & Languages",
    description: "An engineering track built on mathematics, data and research.",
    items: [
      {
        school: "École Nationale Polytechnique d'Alger (ENPA)",
        location: "Algiers, Algeria",
        degree: "State Engineering Degree (5-year), Industrial Engineering, Data Science & AI track",
        period: "2024 – 2027",
        points: [
          "Ranked 17th of 844 in the national entrance exam to the engineering cycle.",
          "Specialty GPA: 14.04/20 (S3), 14.8/20 (S4).",
          "Core modules: Machine Learning, Deep Learning, NLP, Business Intelligence, Data Mining, Big Data.",
          "6-month end-of-studies project (PFE) from January–February 2027.",
        ],
      },
      {
        school: "École Nationale Polytechnique de Constantine (ENPC)",
        location: "Constantine, Algeria",
        degree: "Preparatory Classes in Science & Technology",
        period: "2022 – 2024",
        points: ["Ranked 39th of 194 students."],
      },
      {
        school: "Algerian Baccalaureate",
        location: "Algeria",
        degree: "With highest honours, Très bien (16.17/20)",
        period: "2022",
        points: [],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "Native" },
      { name: "French", level: "C1 (TCF 565/699, Sept. 2026)" },
      { name: "English", level: "Professional (IELTS Academic 7.0, Oct. 2026)" },
    ],
    publicationTitle: "Publication",
    publication: {
      authors: "L. Djebbar.",
      title:
        "Darija Transformer: A From-Scratch Transformer Encoder for Algerian Dialect Sentiment Classification.",
      venue: "Preprint submitted to arXiv (cs.CL), November 2026, under moderation.",
      link: repo("darija-transformer"),
      linkLabel: "Code & paper",
    },
  },

  technicalSkills: {
    badge: "Technical Stack",
    heading: "My Skillset",
    description:
      "Languages, frameworks, data tools and platforms I use to take AI projects from notebook to production.",
    categories: [
      { title: "AI / NLP", skills: technicalSkillLevels.ai },
      { title: "Data & BI", skills: technicalSkillLevels.data },
      { title: "Languages", skills: technicalSkillLevels.languages },
      { title: "Frameworks & Tools", skills: technicalSkillLevels.tools },
    ],
  },

  process: {
    badge: "My Process",
    heading: "Here's how I turn ideas into real-world AI systems",
    description:
      "A structured, research-driven and highly technical approach to building robust, production-ready AI applications.",
    cards: [
      {
        number: "01",
        title: "Research",
        text: "I start by auditing data, understanding requirements and validating assumptions before writing a single line of model code.",
      },
      {
        number: "02",
        title: "Design",
        text: "Clean pipeline architecture, from data ingestion to model serving, designed with reproducibility and rigor in mind.",
      },
      {
        number: "03",
        title: "Develop",
        text: "Building models and multi-agent systems from first principles, benchmarking rigorously against established baselines.",
      },
      {
        number: "04",
        title: "Deploy",
        text: "Shipping to production with real performance metrics, thorough documentation and ongoing monitoring.",
      },
    ],
    endText: "Ready to ship!",
  },

  projects: {
    badge: "Projects & Competitions",
    heading: ["Work that speaks", "for itself"],
    description:
      "Research, production systems and competition projects in NLP, RAG, data science and web.",
    githubLabel: "GitHub",
    demoLabel: "Live Site",
    inProgressLabel: "In progress",
    exploreAll: "Explore All My Repositories",
    list: [
      {
        id: "cetelex-rag",
        badge: "Production System",
        title: "Multi-Agent RAG for Odoo ERP",
        description:
          "Designed and deployed to production at CETELEX Technology a multi-agent RAG system that lets users query an Odoo 18 ERP in natural language. A semantic matching pipeline (cosine similarity + threshold) routes each query either to a direct SQL template or to an LLM fallback (Qwen2.5 via Ollama), with vector storage in pgvector/PostgreSQL. 100% execution rate and 0.03 s median latency (P50) on a CPU-only VPS; delivered with a 40-page LaTeX technical report.",
        techTags: ["CrewAI", "LangChain", "Qwen2.5", "Ollama", "PostgreSQL", "pgvector", "Odoo 18"],
        links: {},
        isFlagship: true,
      },
      {
        id: "darija-transformer",
        badge: "arXiv Preprint",
        title: "Darija Transformer",
        description:
          "Transformer encoder implemented from scratch (multi-head attention, sinusoidal positional encoding, encoder blocks) without high-level libraries: 79.42% accuracy (macro F1 0.794) on a code-switched Arabic/French/Arabizi sentiment corpus. Quantitative audit of 3 candidate corpora (2 rejected for invalid dialect labels), 12k byte-level BPE tokenizer, rigorous comparison with fine-tuned DziriBERT (124M params) on an identical split, and manual re-annotation of 90 errors revealing ~31% label noise in the source corpus.",
        techTags: ["PyTorch", "Transformers", "NLP", "Byte-level BPE", "DziriBERT"],
        links: { github: repo("darija-transformer") },
        isFlagship: true,
      },
      {
        id: "neogam",
        badge: "2nd Place · AEC 2026",
        title: "NeoGAM: AI Insurance Expansion Dashboard",
        description:
          "Decision-support tool built for the Algerian Engineering Competition 2026, identifying the most promising locations for new insurance agencies across Algeria's 1,540 municipalities. AI-based predictive scoring of municipalities, interactive geospatial visualizations, an expansion-scenario simulator and a RAG chatbot powered by Google Gemini.",
        techTags: ["Machine Learning", "Geospatial", "RAG", "Gemini", "Dashboard"],
        links: { github: repo("NeoGam") },
        isFlagship: false,
      },
      {
        id: "stellantis-suppliers",
        badge: "Stellantis El Djazaïr",
        title: "Supplier Management Platform",
        description:
          "Centralized platform giving Stellantis buyers a consolidated, end-to-end view of the entire supplier base, with advanced search, filtering and analytics. Includes supplier performance KPIs for objective comparison and an order-tracking module showing the exact status of every purchase order, from issuance to delivery.",
        techTags: ["KPIs", "Data Analytics", "Supplier Performance", "Web Platform"],
        links: {},
        inProgress: true,
        isFlagship: false,
      },
      {
        id: "atelier-transformers",
        badge: "Workshop",
        title: "Encoder-Decoder Transformers Workshop",
        description:
          "Designed and co-led a deep-learning workshop (in French) for 18 AI students at ENPA: encoder-decoder architecture, cross-attention, Query/Key/Value, greedy / beam search / sampling decoding, teacher forcing, T5, BART, NLLB-200, Whisper. Includes a French–English translation Colab notebook with MarianMT and the “Transformer Grand Prix”, a live interactive competition with a leaderboard.",
        techTags: ["Transformers", "MarianMT", "Hugging Face", "Colab", "Teaching"],
        links: { github: repo("atelier-transformers") },
        isFlagship: false,
      },
      {
        id: "quiz-generator",
        badge: null,
        title: "Automatic Quiz Generator from PDFs",
        description:
          "Question-generation tool that builds quizzes directly from PDF documents, comparing rule-based approaches with BERT, Flan-T5 and Gemini.",
        techTags: ["NLP", "LLMs", "BERT", "Flan-T5", "Gemini"],
        links: { github: repo("quizz-generator") },
        isFlagship: false,
      },
      {
        id: "haba-institute",
        badge: "Freelance",
        title: "Haba Institute Website",
        description:
          "Developed and deployed the institute's website with Next.js, and set up and administer its professional email infrastructure (~15 accounts).",
        techTags: ["Next.js", "React", "Deployment", "Email Admin"],
        links: { demo: "https://habainstitute.com" },
        isFlagship: false,
      },
      {
        id: "agridatainsight",
        badge: "2nd Place · Hackathon",
        title: "AgriDataInsight",
        description:
          "Data-driven solution for the agricultural sector, built as a team under time constraints at Hackathon Algeria 2.0, where we placed 2nd.",
        techTags: ["Data Science", "Python", "Agriculture"],
        links: { github: repo("Agrovisor") },
        isFlagship: false,
      },
    ],
  },

  experience: {
    heading: "Work Experience",
    description: "Industry roles where I applied AI and data engineering to real business problems.",
    skillsLabel: "Key Contributions:",
    techLabel: "Technologies:",
    list: [
      {
        organization: "Stellantis El Djazaïr",
        role: "Engineering Intern, Supplier Management Platform",
        duration: "Sept. 2026 – Present",
        type: "Internship",
        skills: [
          "Centralized platform with an end-to-end view of all suppliers",
          "Supplier performance KPIs for objective comparison",
          "Purchase-order tracking from issuance to delivery",
        ],
        tech: ["Data Analytics", "KPIs", "Web Platform"],
      },
      {
        organization: "Haba Institute",
        role: "Web Developer (part-time)",
        duration: "2026 – Present",
        type: "Part-time",
        skills: [
          "Built and deployed habainstitute.com",
          "Set up and administer professional email (~15 accounts)",
        ],
        tech: ["Next.js", "React", "Hosting", "Email"],
      },
      {
        organization: "CETELEX Technology (Odoo Silver Partner)",
        role: "AI Engineer (work-study)",
        duration: "Sept. 2025 – May 2026",
        type: "Work-study",
        skills: [
          "Multi-agent RAG system for natural-language ERP querying",
          "Semantic routing: SQL templates vs. LLM fallback",
          "100% execution rate, P50 latency 0.03 s on CPU-only VPS",
          "40-page LaTeX report, defense and full documentation",
        ],
        tech: ["CrewAI", "LangChain", "Qwen2.5 / Ollama", "PostgreSQL", "pgvector", "Odoo 18"],
      },
      {
        organization: "Hikma Pharma & Biscuiterie de Cherchell",
        role: "Industrial Observation Internships",
        duration: "Jan. – June 2025",
        type: "Internship",
        skills: ["Information systems", "Process digitalization", "Supply chain"],
        tech: ["ERP Systems", "Process Mapping"],
      },
    ],
  },

  leadership: {
    badge: "Activities",
    heading: "Leadership & Engagement",
    description: "Teaching, organizing events and collaborating internationally.",
    list: [
      {
        title: "Deep Learning Workshop: Encoder-Decoder Transformers",
        role: "Designer & co-host · ENPA, Nov. 2026",
        badge: "Teaching",
        description:
          "Co-designed and led a French-language workshop for 18 AI students, with slides, a MarianMT translation notebook and the live “Transformer Grand Prix” competition.",
      },
      {
        title: "IEC & VIC Student Clubs (ENPA)",
        role: "Communication & HR · since Sept. 2024",
        badge: "Leadership",
        description:
          "Communication and HR team member; co-organizer of the Business Game and the Algerian Engineering Competition 2025.",
      },
      {
        title: "COIL: Foundations of NLP",
        role: "International program · April 2026",
        badge: "Academic",
        description:
          "Certificate with distinction (30 h) in an international program with Taras Shevchenko National University of Kyiv, Georgia State University, University of Central Arkansas, Karunya Institute and ENP Algiers.",
      },
    ],
  },

  certificates: {
    heading: "Certifications",
    description: "Certifications and programs that complement my engineering training.",
    viewAll: "View on LinkedIn",
    list: [
      {
        name: "Foundations of NLP: From Text Preprocessing to Sentiment Analysis (with distinction)",
        issuer: "COIL · Kyiv, Georgia State, UCA, Karunya, ENP Algiers",
        icon: "academic",
      },
      {
        name: "Professional Certificate in Project & Process Management",
        issuer: "MTF Institute via Udemy · 2025",
        icon: "clipboard",
      },
      {
        name: "Prompt Engineering with LLaMA-2",
        issuer: "iXL Consulting · 2025",
        icon: "chip",
      },
      {
        name: "TCF: French C1 (565/699)",
        issuer: "France Éducation international · 2026",
        icon: "language",
      },
      {
        name: "IELTS Academic: 7.0",
        issuer: "British Council / IDP · 2026",
        icon: "language",
      },
    ],
  },

  softSkills: {
    badge: "Core Competencies",
    heading: "Professional Soft Skills",
    description: "Traits that make me an effective engineer, researcher and communicator.",
    list: [
      { name: "Research & Writing", icon: "writing", desc: "From a 40-page production RAG report to an arXiv research paper." },
      { name: "Teaching", icon: "chat", desc: "Designed and led a Transformers workshop for 18 AI students, in French." },
      { name: "Problem Solving", icon: "puzzle", desc: "Auditing datasets and rejecting flawed corpora before they compromise a model." },
      { name: "Leadership", icon: "flag", desc: "Organizing large student competitions such as the Algerian Engineering Competition." },
      { name: "Cross-Cultural Collaboration", icon: "globe", desc: "International program across Ukraine, the US, India and Algeria." },
      { name: "Adaptability", icon: "refresh", desc: "From low-level model code to agent orchestration, web platforms and industry KPIs." },
      { name: "Analytical Rigor", icon: "search", desc: "Manual re-annotation revealed ~31% label noise in a public corpus." },
      { name: "Time Management", icon: "clock", desc: "Balancing engineering studies, an internship, part-time work and research." },
    ],
  },

  contact: {
    bigWord: "Contact",
    reachMe: "Reach Me",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    message: "Type your message here",
    permission: "I give permission to contact me at this email address.",
    responseNote: "Your message will be sent directly to my inbox. I typically respond within 24–48 hours.",
    urgent: "For urgent inquiries, reach me at",
    send: "Send Message",
    sending: "Sending...",
    sent: "Sent Successfully",
    failed: "Failed, try again",
    mailSubject: "Portfolio contact from",
  },

  footer: {
    taglines: ["Data Science & AI Engineering", "Python · PyTorch · LangChain", "NLP · RAG · Multi-Agent Systems"],
    credential: "Data Science & AI Engineering Student · ENP Algiers",
    viewWork: "View Work",
    available: "Open to PFE internships & master's programs",
    contact: "Contact",
    explore: "Explore My GitHub",
    builtWith: "Built with React",
  },
};

// ============================================================
// FRANÇAIS
// ============================================================
const fr = {
  meta: {
    title: "Lotfi Djebbar | Data Science & IA",
    description:
      "Portfolio de Lotfi Djebbar, élève ingénieur en dernière année, Science des données et IA à l'ENP d'Alger : TAL, Transformers, systèmes RAG multi-agents et solutions data en production.",
  },

  nav: {
    links: [
      { label: "Accueil", href: "#home" },
      { label: "À propos", href: "#about" },
      { label: "Formation", href: "#education" },
      { label: "Compétences", href: "#skills" },
      { label: "Projets", href: "#projects" },
      { label: "Expérience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hireMe: "Me contacter",
    hireMailto: mailtoHire(
      "Opportunité – Portfolio",
      "Bonjour Lotfi,\n\nJ'ai découvert votre portfolio et j'aimerais échanger avec vous au sujet d'une opportunité.\n\nCordialement,"
    ),
    langLabel: "Switch to English",
  },

  hero: {
    greeting: "Bonjour, je suis Lotfi Djebbar",
    titleHighlight: "Élève ingénieur en Data Science & IA, en dernière année",
    subtitle:
      "Je termine mes études d'ingénieur à l'ENP d'Alger en 2027. Je conçois des modèles de TAL, des systèmes RAG multi-agents et des plateformes pilotées par les données, de la recherche à la production.",
    ctaPrimary: "Voir mes projets",
    ctaSecondary: "Me contacter",
    ctaResume: "Télécharger mon CV",
    playReel: "Lancer la vidéo",
    pause: "Pause",
  },

  about: {
    heading: "Bonjour !",
    bioIntro: "Je m'appelle",
    bio:
      "élève ingénieur d'État en dernière année, spécialité Science des données et Intelligence artificielle, à l'École Nationale Polytechnique d'Alger. J'allie de solides bases mathématiques, une démarche orientée recherche et une expérience concrète en entreprise : auteur d'un encodeur Transformer conçu de zéro pour le dialecte algérien à alternance codique (prépublication arXiv), j'ai mis en production un système RAG multi-agents chez CETELEX et je développe actuellement une plateforme de performance fournisseurs chez Stellantis El Djazaïr.",
    goals: [
      "Disponible pour un projet de fin d'études (PFE) de 6 mois à partir de janvier–février 2027.",
      "Je souhaite poursuivre un master en IA / Science des données en France à la rentrée 2027.",
    ],
    avatarAlt: "Lotfi Djebbar, élève ingénieur en Data Science & IA",
    stats: [
      { value: "17e / 844", label: "Concours national" },
      { value: "79,4 %", label: "Exactitude Darija Transformer" },
      { value: "2 × 2e", label: "Hackathon & AEC 2026" },
    ],
  },

  education: {
    badge: "Parcours",
    heading: "Formation & Langues",
    description: "Un cursus d'ingénieur fondé sur les mathématiques, les données et la recherche.",
    items: [
      {
        school: "École Nationale Polytechnique d'Alger (ENPA)",
        location: "Alger, Algérie",
        degree: "Diplôme d'ingénieur d'État (cursus de 5 ans), Génie industriel, option Science des données et IA",
        period: "2024 – 2027",
        points: [
          "Classé 17e sur 844 au concours national d'accès au cycle ingénieur.",
          "Moyennes de spécialité : 14,04/20 (S3), 14,8/20 (S4).",
          "Modules principaux : Machine Learning, Deep Learning, TAL (NLP), Business Intelligence, Data Mining, Big Data.",
          "Projet de fin d'études (PFE) de 6 mois à partir de janvier–février 2027.",
        ],
      },
      {
        school: "École Nationale Polytechnique de Constantine (ENPC)",
        location: "Constantine, Algérie",
        degree: "Classes préparatoires en sciences et technologies",
        period: "2022 – 2024",
        points: ["Classé 39e sur 194 étudiants."],
      },
      {
        school: "Baccalauréat algérien",
        location: "Algérie",
        degree: "Mention Très bien (16,17/20)",
        period: "2022",
        points: [],
      },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "Langue maternelle" },
      { name: "Français", level: "C1 (TCF 565/699, sept. 2026)" },
      { name: "Anglais", level: "Professionnel (IELTS Academic 7,0, oct. 2026)" },
    ],
    publicationTitle: "Publication",
    publication: {
      authors: "L. Djebbar.",
      title:
        "Darija Transformer: A From-Scratch Transformer Encoder for Algerian Dialect Sentiment Classification.",
      venue: "Prépublication soumise à arXiv (cs.CL), novembre 2026, en cours de modération.",
      link: repo("darija-transformer"),
      linkLabel: "Code & article",
    },
  },

  technicalSkills: {
    badge: "Stack technique",
    heading: "Mes compétences",
    description:
      "Langages, frameworks, outils data et plateformes que j'utilise pour mener un projet d'IA du notebook à la production.",
    categories: [
      { title: "IA / TAL", skills: technicalSkillLevels.ai },
      { title: "Données & BI", skills: technicalSkillLevels.data },
      { title: "Langages", skills: technicalSkillLevels.languages },
      { title: "Frameworks & outils", skills: technicalSkillLevels.tools },
    ],
  },

  process: {
    badge: "Ma démarche",
    heading: "Comment je transforme une idée en système d'IA concret",
    description:
      "Une approche structurée, orientée recherche et rigoureuse pour construire des applications d'IA robustes et prêtes pour la production.",
    cards: [
      {
        number: "01",
        title: "Recherche",
        text: "J'audite d'abord les données, je clarifie les besoins et je valide les hypothèses avant d'écrire la moindre ligne de code.",
      },
      {
        number: "02",
        title: "Conception",
        text: "Une architecture de pipeline claire, de l'ingestion des données au service du modèle, pensée pour la reproductibilité.",
      },
      {
        number: "03",
        title: "Développement",
        text: "Des modèles et des systèmes multi-agents construits à partir des principes fondamentaux, comparés rigoureusement aux références.",
      },
      {
        number: "04",
        title: "Déploiement",
        text: "Mise en production avec des métriques réelles, une documentation complète et un suivi continu.",
      },
    ],
    endText: "Prêt pour la prod !",
  },

  projects: {
    badge: "Projets & compétitions",
    heading: ["Des projets qui", "parlent d'eux-mêmes"],
    description:
      "Recherche, systèmes en production et projets de compétition en TAL, RAG, science des données et web.",
    githubLabel: "GitHub",
    demoLabel: "Voir le site",
    inProgressLabel: "En cours",
    exploreAll: "Voir tous mes dépôts",
    list: [
      {
        id: "cetelex-rag",
        badge: "Système en production",
        title: "RAG multi-agents pour l'ERP Odoo",
        description:
          "Conception et mise en production chez CETELEX Technology d'un système RAG multi-agents permettant d'interroger un ERP Odoo 18 en langage naturel. Un pipeline de correspondance sémantique (similarité cosinus + seuil) oriente chaque requête vers une requête SQL type ou vers un LLM (Qwen2.5 via Ollama), avec stockage vectoriel pgvector/PostgreSQL. Taux d'exécution de 100 % et latence médiane (P50) de 0,03 s sur un VPS sans GPU ; livré avec un rapport technique LaTeX de 40 pages.",
        techTags: ["CrewAI", "LangChain", "Qwen2.5", "Ollama", "PostgreSQL", "pgvector", "Odoo 18"],
        links: {},
        isFlagship: true,
      },
      {
        id: "darija-transformer",
        badge: "Prépublication arXiv",
        title: "Darija Transformer",
        description:
          "Encodeur Transformer implémenté de zéro (attention multi-têtes, encodage positionnel sinusoïdal, blocs d'encodeur) sans bibliothèque de haut niveau : 79,42 % d'exactitude (F1 macro 0,794) sur un corpus de sentiments à alternance codique arabe/français/arabizi. Audit quantitatif de 3 corpus (2 rejetés pour étiquettes dialectales invalides), tokenizer BPE au niveau des octets (12k), comparaison rigoureuse avec DziriBERT affiné (124M de paramètres) sur un découpage identique, et réannotation manuelle de 90 erreurs révélant environ 31 % d'erreurs d'annotation dans le corpus source.",
        techTags: ["PyTorch", "Transformers", "TAL", "BPE octets", "DziriBERT"],
        links: { github: repo("darija-transformer") },
        isFlagship: true,
      },
      {
        id: "neogam",
        badge: "2e place · AEC 2026",
        title: "NeoGAM : expansion de l'assurance pilotée par l'IA",
        description:
          "Outil d'aide à la décision réalisé pour l'Algerian Engineering Competition 2026, identifiant les implantations les plus prometteuses pour de nouvelles agences d'assurance parmi les 1 540 communes d'Algérie. Score prédictif des communes par IA, visualisations géospatiales interactives, simulateur de scénarios d'expansion et chatbot RAG basé sur Google Gemini.",
        techTags: ["Machine Learning", "Géospatial", "RAG", "Gemini", "Tableau de bord"],
        links: { github: repo("NeoGam") },
        isFlagship: false,
      },
      {
        id: "stellantis-suppliers",
        badge: "Stellantis El Djazaïr",
        title: "Plateforme de gestion des fournisseurs",
        description:
          "Plateforme centralisée offrant aux acheteurs Stellantis une vue consolidée et de bout en bout de l'ensemble des fournisseurs, avec recherche, filtrage et analyse avancés. Indicateurs de performance (KPI) pour comparer objectivement les fournisseurs et module de suivi donnant le statut exact de chaque bon de commande, de l'émission à la livraison.",
        techTags: ["KPI", "Analyse de données", "Performance fournisseurs", "Plateforme web"],
        links: {},
        inProgress: true,
        isFlagship: false,
      },
      {
        id: "atelier-transformers",
        badge: "Atelier",
        title: "Atelier Transformers encodeur-décodeur",
        description:
          "Conception et animation, en binôme, d'un atelier de deep learning en français pour 18 étudiants en IA à l'ENPA : architecture encodeur-décodeur, attention croisée, Query/Key/Value, décodage greedy / beam search / échantillonnage, teacher forcing, T5, BART, NLLB-200, Whisper. Notebook Colab de traduction français–anglais avec MarianMT et « Transformer Grand Prix », une compétition interactive en direct avec classement.",
        techTags: ["Transformers", "MarianMT", "Hugging Face", "Colab", "Pédagogie"],
        links: { github: repo("atelier-transformers") },
        isFlagship: false,
      },
      {
        id: "quiz-generator",
        badge: null,
        title: "Générateur automatique de quiz à partir de PDF",
        description:
          "Outil de génération de questions à partir de documents PDF, comparant des approches à base de règles, BERT, Flan-T5 et Gemini.",
        techTags: ["TAL", "LLM", "BERT", "Flan-T5", "Gemini"],
        links: { github: repo("quizz-generator") },
        isFlagship: false,
      },
      {
        id: "haba-institute",
        badge: "Freelance",
        title: "Site web de Haba Institute",
        description:
          "Développement et mise en ligne du site de l'institut avec Next.js ; mise en place et administration de la messagerie professionnelle (environ 15 comptes).",
        techTags: ["Next.js", "React", "Déploiement", "Messagerie"],
        links: { demo: "https://habainstitute.com" },
        isFlagship: false,
      },
      {
        id: "agridatainsight",
        badge: "2e place · Hackathon",
        title: "AgriDataInsight",
        description:
          "Solution fondée sur les données pour le secteur agricole, réalisée en équipe et en temps limité lors du Hackathon Algeria 2.0, où nous avons obtenu la 2e place.",
        techTags: ["Science des données", "Python", "Agriculture"],
        links: { github: repo("Agrovisor") },
        isFlagship: false,
      },
    ],
  },

  experience: {
    heading: "Expérience professionnelle",
    description: "Des postes en entreprise où j'ai appliqué l'IA et l'ingénierie des données à des problèmes concrets.",
    skillsLabel: "Réalisations :",
    techLabel: "Technologies :",
    list: [
      {
        organization: "Stellantis El Djazaïr",
        role: "Stagiaire ingénieur, plateforme de gestion des fournisseurs",
        duration: "Sept. 2026 – aujourd'hui",
        type: "Stage",
        skills: [
          "Plateforme centralisée avec une vue de bout en bout des fournisseurs",
          "Indicateurs de performance (KPI) pour comparer les fournisseurs",
          "Suivi des bons de commande, de l'émission à la livraison",
        ],
        tech: ["Analyse de données", "KPI", "Plateforme web"],
      },
      {
        organization: "Haba Institute",
        role: "Développeur web (temps partiel)",
        duration: "2026 – aujourd'hui",
        type: "Temps partiel",
        skills: [
          "Développement et mise en ligne de habainstitute.com",
          "Administration de la messagerie professionnelle (~15 comptes)",
        ],
        tech: ["Next.js", "React", "Hébergement", "Messagerie"],
      },
      {
        organization: "CETELEX Technology (partenaire Odoo Silver)",
        role: "Ingénieur IA (alternance)",
        duration: "Sept. 2025 – mai 2026",
        type: "Alternance",
        skills: [
          "Système RAG multi-agents pour interroger un ERP en langage naturel",
          "Routage sémantique : requêtes SQL types ou recours à un LLM",
          "Taux d'exécution de 100 %, latence P50 de 0,03 s sans GPU",
          "Rapport LaTeX de 40 pages, soutenance et documentation complète",
        ],
        tech: ["CrewAI", "LangChain", "Qwen2.5 / Ollama", "PostgreSQL", "pgvector", "Odoo 18"],
      },
      {
        organization: "Hikma Pharma & Biscuiterie de Cherchell",
        role: "Stages d'observation",
        duration: "Janv. – juin 2025",
        type: "Stage",
        skills: ["Systèmes d'information", "Digitalisation des processus", "Chaîne logistique"],
        tech: ["ERP", "Cartographie des processus"],
      },
    ],
  },

  leadership: {
    badge: "Activités",
    heading: "Animation & vie associative",
    description: "Enseigner, organiser des événements et collaborer à l'international.",
    list: [
      {
        title: "Atelier Deep Learning : Transformers encodeur-décodeur",
        role: "Conception & animation · ENPA, nov. 2026",
        badge: "Pédagogie",
        description:
          "Atelier en français conçu et animé en binôme pour une promotion de 18 étudiants en IA : présentation, notebook de traduction avec MarianMT et compétition en direct « Transformer Grand Prix ».",
      },
      {
        title: "Clubs étudiants IEC et VIC (ENPA)",
        role: "Communication & RH · depuis sept. 2024",
        badge: "Leadership",
        description:
          "Pôle communication et ressources humaines ; organisation du Business Game et de l'Algerian Engineering Competition 2025.",
      },
      {
        title: "COIL: Foundations of NLP",
        role: "Programme international · avril 2026",
        badge: "Académique",
        description:
          "Certificat avec distinction (30 h) dans un programme international avec l'Université nationale Taras Chevtchenko de Kyiv, Georgia State University, University of Central Arkansas, Karunya Institute et l'ENP d'Alger.",
      },
    ],
  },

  certificates: {
    heading: "Certifications",
    description: "Certifications et programmes qui complètent ma formation d'ingénieur.",
    viewAll: "Voir sur LinkedIn",
    list: [
      {
        name: "Foundations of NLP: From Text Preprocessing to Sentiment Analysis (avec distinction)",
        issuer: "COIL · Kyiv, Georgia State, UCA, Karunya, ENP Alger",
        icon: "academic",
      },
      {
        name: "Certificat professionnel en gestion de projets et de processus",
        issuer: "MTF Institute via Udemy · 2025",
        icon: "clipboard",
      },
      {
        name: "Prompt Engineering with LLaMA-2",
        issuer: "iXL Consulting · 2025",
        icon: "chip",
      },
      {
        name: "TCF : français niveau C1 (565/699)",
        issuer: "France Éducation international · 2026",
        icon: "language",
      },
      {
        name: "IELTS Academic : 7,0",
        issuer: "British Council / IDP · 2026",
        icon: "language",
      },
    ],
  },

  softSkills: {
    badge: "Savoir-être",
    heading: "Compétences transversales",
    description: "Les qualités qui font de moi un ingénieur, un chercheur et un communicant efficace.",
    list: [
      { name: "Recherche & rédaction", icon: "writing", desc: "D'un rapport RAG de 40 pages à un article de recherche soumis à arXiv." },
      { name: "Pédagogie", icon: "chat", desc: "Conception et animation d'un atelier Transformers pour 18 étudiants en IA." },
      { name: "Résolution de problèmes", icon: "puzzle", desc: "Auditer les données et écarter les corpus défaillants avant qu'ils ne faussent un modèle." },
      { name: "Leadership", icon: "flag", desc: "Organisation de grandes compétitions étudiantes comme l'Algerian Engineering Competition." },
      { name: "Travail interculturel", icon: "globe", desc: "Programme international entre l'Ukraine, les États-Unis, l'Inde et l'Algérie." },
      { name: "Adaptabilité", icon: "refresh", desc: "Du code bas niveau des modèles aux agents, aux plateformes web et aux KPI industriels." },
      { name: "Rigueur analytique", icon: "search", desc: "Une réannotation manuelle a révélé ~31 % d'erreurs d'étiquetage dans un corpus public." },
      { name: "Gestion du temps", icon: "clock", desc: "Concilier études d'ingénieur, stage, travail à temps partiel et recherche." },
    ],
  },

  contact: {
    bigWord: "Contact",
    reachMe: "Écrivez-moi",
    firstName: "Prénom",
    lastName: "Nom",
    email: "E-mail",
    message: "Votre message",
    permission: "J'accepte d'être recontacté(e) à cette adresse e-mail.",
    responseNote: "Votre message arrive directement dans ma boîte de réception. Je réponds généralement sous 24 à 48 h.",
    urgent: "Pour une demande urgente, écrivez-moi à",
    send: "Envoyer",
    sending: "Envoi...",
    sent: "Message envoyé",
    failed: "Échec, réessayez",
    mailSubject: "Contact portfolio de",
  },

  footer: {
    taglines: ["Science des données & IA", "Python · PyTorch · LangChain", "TAL · RAG · Systèmes multi-agents"],
    credential: "Élève ingénieur Science des données & IA · ENP Alger",
    viewWork: "Voir mes projets",
    available: "Ouvert aux PFE et aux masters",
    contact: "Contact",
    explore: "Voir mon GitHub",
    builtWith: "Réalisé avec React",
  },
};

export const content = { en, fr };

// EmailJS Configuration
// Reads Vite environment variables (prefixed with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
