export type PortfolioCase = {
  id?: number;
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  context: string;
  role: string;
  methods: string[];
  outcomes: string[];
  tags: string[];
  cover: string;
  link?: string;
  featured: boolean;
};

export const seedCases: PortfolioCase[] = [
  {
    slug: "protest-strategy-management",
    title: "Protest Strategy Management",
    kicker: "An evolution driven by continuous discovery",
    summary: "Uma narrativa de produto sobre como a descoberta contínua ajuda uma estratégia a evoluir com mais clareza.",
    context: "Este case apresenta a evolução de uma estratégia de produto orientada por continuous discovery.",
    role: "Product Design",
    methods: ["Continuous discovery"],
    outcomes: ["A estratégia evolui a partir de aprendizados contínuos."],
    tags: ["Product Design", "Discovery", "Strategy"],
    cover: "protest",
    link: "https://marcelle-uliano.notion.site/Protest-Strategy-Management-An-Evolution-Driven-by-Continuous-Discovery-5bc5bc4b6a8f838280b381ca80d56889?pvs=25",
    featured: true,
  },
  {
    slug: "attorney-assistant-collaboration",
    title: "Between the System and Real-World Use",
    kicker: "Redesigning attorney-assistant collaboration in government legal offices",
    summary: "Uma investigação sobre a distância entre o sistema e o uso real, olhando para a colaboração entre advogados e assistentes.",
    context: "O projeto observa o uso de sistemas em escritórios jurídicos governamentais e a colaboração entre advogados e assistentes.",
    role: "UX Research · Product Design",
    methods: ["UX Research", "Product Design"],
    outcomes: ["O case conecta o sistema à realidade de quem o utiliza."],
    tags: ["UX Research", "Collaboration", "Government"],
    cover: "legal",
    link: "https://marcelle-uliano.notion.site/Between-the-System-and-Real-World-Use-Redesigning-Attorney-Assistant-Collaboration-in-Government-Le-fe75bc4b6a8f83adad698118e8070641?pvs=25",
    featured: true,
  },
];
