// ============================================================
// portfolioData.js — Centralized configuration for Lotfi Djebbar's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Lotfi Djebbar",
  firstName: "Lotfi",
  brandName: "Lotfi Djebbar",
  title: "Data Science & AI Engineer",
  location: "Algiers, Algeria",
  phone: "+213 550 45 77 47",
  emails: {
    primary: "lotfi.djebbar@g.enp.edu.dz",
    secondary: "lotfi.djebbar2003@gmail.com",
  },
  summary:
    "Final-year Data Science & AI engineering student at École Nationale Polytechnique d'Alger, specialized in NLP, multi-agent systems, and production data solutions. Built and deployed a multi-agent RAG system for natural-language ERP querying, and authored a from-scratch Transformer encoder for Algerian dialect sentiment classification. Seeking a 5-6 month graduation internship (PFE) starting February 2027 in data & AI solutions.",
  resumeUrl: "/Lotfi_Djebbar_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/LotfiDjebbar",
  linkedin: "https://linkedin.com/in/lotfi-djebbar",
};

export const heroContent = {
  greeting: "Hi, I'm Lotfi Djebbar",
  titleHighlight: "Data Science & AI Engineer",
  subtitle:
    "I build NLP systems, multi-agent RAG pipelines, and data-driven applications using Python, PyTorch, and LangChain.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:lotfi.djebbar@g.enp.edu.dz?subject=Hiring Inquiry – Portfolio&body=Hello Lotfi,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Lotfi_Djebbar_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Lotfi Djebbar</span>, a final-year Data Science & AI engineering student at ENP Algiers, dedicated to building production-grade NLP systems, multi-agent pipelines, and rigorous, research-driven AI solutions.`,
  techStack: ["Python", "PyTorch", "LangChain"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world AI systems",
  description:
    "I follow a structured, research-driven, and highly technical approach to turn ideas into robust, production-ready AI applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by auditing data, understanding requirements, and validating assumptions before writing a single line of model code.",
    },
    {
      number: "02",
      title: "Design",
      text: "Designing clean pipeline architecture — from data ingestion to model serving — with reproducibility and rigor in mind.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building models and multi-agent systems from first principles, benchmarking rigorously against established baselines.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Shipping to production with real performance metrics, thorough documentation, and ongoing monitoring.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "AI / NLP",
      skills: [
        { name: "PyTorch", level: 85 },
        { name: "Transformers & Attention", level: 82 },
        { name: "LangChain", level: 82 },
        { name: "CrewAI", level: 80 },
        { name: "RAG Systems", level: 85 },
        { name: "scikit-learn", level: 78 }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 80 },
        { name: "SQL", level: 82 },
        { name: "C", level: 75 },
        { name: "JavaScript / HTML / CSS", level: 70 },
        { name: "MATLAB", level: 65 }
      ]
    },
    {
      title: "Data & Backend",
      skills: [
        { name: "PostgreSQL", level: 82 },
        { name: "pgvector", level: 78 },
        { name: "Power BI", level: 75 },
        { name: "Excel", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "Linux", level: 78 },
        { name: "LaTeX", level: 82 },
        { name: "Ollama", level: 78 },
        { name: "Odoo 18", level: 70 }
      ]
    }
  ]
};

// Leadership Data
export const leadershipList = [
  {
    title: "IEC & VIC Student Clubs (ENPA)",
    description: "Communication & HR role; organizer of the Business Game and the Algerian Engineering Competition, coordinating logistics and cross-team communication.",
    role: "Communication & HR",
    badge: "Leadership"
  },
  {
    title: "COIL International Program — Foundations of NLP",
    description: "Certificate of Distinction earned in a 30-hour collaborative program spanning five partner universities: Taras Shevchenko National University of Kyiv, Georgia State University, University of Central Arkansas, Karunya Institute of Technology, and ENP Algiers.",
    role: "International Collaboration",
    badge: "Academic"
  }
];

// Internships / Experience Data
export const internshipsList = [
  {
    organization: "CETELEX Technology (Odoo Silver Partner)",
    role: "AI Engineer — Work-Study Program",
    duration: "September 2025 - May 2026",
    skills: ["Multi-Agent RAG Systems", "Production Deployment", "Semantic Search Pipelines", "Technical Documentation"],
    tech: ["CrewAI", "LangChain", "Qwen2.5 / Ollama", "PostgreSQL", "pgvector", "Odoo 18"]
  },
  {
    organization: "Hikma Pharma & Biscuiterie de Cherchell",
    role: "Industrial Observation Internships",
    duration: "January - June 2025",
    skills: ["Information Systems", "Process Digitalization", "Supply Chain Analysis"],
    tech: ["ERP Systems", "Process Mapping"]
  }
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Research & Writing", icon: "📝", desc: "Authoring rigorous technical reports — from a 40-page production RAG deliverable to a 4-page research-style NLP paper." },
  { name: "Cross-Cultural Collaboration", icon: "🌍", desc: "Working across a 5-university international program spanning Ukraine, the US, India, and Algeria." },
  { name: "Problem Solving", icon: "🧩", desc: "Auditing datasets, catching annotation errors, and rejecting flawed corpora before they compromise a model." },
  { name: "Leadership", icon: "👑", desc: "Coordinating logistics and communication for large-scale student competitions and events." },
  { name: "Adaptability", icon: "🌟", desc: "Moving fluidly between low-level model implementation and high-level agent orchestration frameworks." },
  { name: "Communication", icon: "💬", desc: "Fluent in Arabic, French, and professional English; comfortable presenting technical work to varied audiences." },
  { name: "Analytical Rigor", icon: "🔍", desc: "Quantitative auditing and manual re-annotation to validate results before trusting them." },
  { name: "Time Management", icon: "⏰", desc: "Balancing a demanding engineering curriculum with a work-study role and independent research projects." }
];

export const projects = [
  {
    id: "cetelex-rag",
    number: "01",
    badge: "🚀 Production System",
    title: "Multi-Agent RAG for Odoo ERP",
    description:
      "Designed and deployed to production a multi-agent RAG system enabling natural-language querying of an Odoo 18 ERP at CETELEX Technology. Semantic matching pipeline (cosine similarity + threshold) routes queries between direct SQL template execution and LLM fallback (Qwen2.5 via Ollama), with vector storage via pgvector/PostgreSQL. Achieved 100% execution rate with P50 latency of 0.03s on a CPU-only production VPS.",
    techTags: ["CrewAI", "LangChain", "Qwen2.5", "Ollama", "PostgreSQL", "pgvector", "Odoo 18"],
    links: {},
    isFlagship: true,
  },
  {
    id: "darija-transformer",
    number: "02",
    badge: null,
    title: "Darija Transformer",
    description:
      "A Transformer encoder implemented from scratch — multi-head attention, sinusoidal positional encoding, encoder blocks — without high-level libraries. Achieved 79.42% accuracy (F1 macro 0.794) on a code-switched Arabic/French/Arabizi sentiment corpus, including a quantitative audit of 3 candidate datasets and a rigorous comparison against fine-tuned DziriBERT (124M parameters).",
    techTags: ["PyTorch", "Transformers", "NLP", "Custom BPE Tokenizer"],
    links: {
      github: "https://github.com/LotfiDjebbar/darija-transformer",
    },
    isFlagship: false,
  },
  {
    id: "quiz-generator",
    number: "03",
    badge: null,
    title: "Automatic Quiz Generator from PDF Documents",
    description:
      "A question-generation tool that extracts and generates quizzes directly from PDF documents, benchmarking rule-based approaches against BERT, Flan-T5, and Gemini.",
    techTags: ["NLP", "LLMs", "BERT", "Flan-T5", "Gemini"],
    links: {
      github: "https://github.com/LotfiDjebbar/quizz-generator",
    },
    isFlagship: false,
  },
  {
    id: "agrodatainsight",
    number: "04",
    badge: "🏆 2nd Place",
    title: "AgriDataInsight",
    description:
      "A data-driven solution for the agricultural sector, built under time constraints for Hackathon Algeria 2.0, placing 2nd overall.",
    techTags: ["Data Science", "Python"],
    links: {
      github: "https://github.com/LotfiDjebbar/Agrovisor",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Foundations of NLP — COIL Certificate of Distinction",
      issuer: "Taras Shevchenko Univ. Kyiv & Partners",
      icon: "🧠",
    },
    {
      name: "Prompt Engineering with LLaMA-2",
      issuer: "iXL Consulting",
      icon: "🤖",
    },
    {
      name: "AI Fundamentals",
      issuer: "DataCamp",
      icon: "📊",
    },
    {
      name: "Project & Process Management",
      issuer: "Coursera",
      icon: "📋",
    },
  ],
  viewAllUrl: "https://linkedin.com/in/lotfi-djebbar",
};

export const education = {
  degree: "State Engineering Degree — Industrial Engineering, Data Science & AI",
  institution: "École Nationale Polytechnique d'Alger (ENPA)",
  cgpa: "14.8/20 (S4)",
  graduation: "2029",
  twelfth: "Ranked 32nd of 330 — ENP Constantine Preparatory Classes",
  tenth: "Ranked 17th of 844 — National Entrance Exam",
};

export const footerContent = {
  taglines: [
    "Data Science & AI Engineering",
    "Python · PyTorch · LangChain",
    "NLP & Multi-Agent Systems",
  ],
  credential: "Data Science & AI Engineering Student — ENP Algiers",
  copyright: `© ${new Date().getFullYear()} Lotfi Djebbar | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
