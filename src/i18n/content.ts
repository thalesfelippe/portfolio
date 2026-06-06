import type { Language } from './languages'
import { resumeFiles } from './resumeFiles'

type TranslationContent = {
  about: {
    eyebrow: string
    paragraphs: string[]
    snapshot: {
      label: string
      value: string
    }[]
    snapshotTitle: string
    title: string
    usuallySolveTitle: string
    usuallySolve: string[]
  }
  experience: {
    eyebrow: string
    title: string
    subtitle: string
    featuredProjectLabel: string
    stackLabel: string
    viewLess: string
    viewMore: string
    items: {
      company: string
      companyContext?: string
      context: string
      featuredProject?: string
      highlights: string[]
      location: string
      period: string
      role: string
      skills: string[]
      type?: string
    }[]
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    stackLabel: string
    highlightsLabel: string
    linkLabel: string
    items: {
      name: string
      category: string
      description: string
      longDescription: string
      cover?: {
        alt: string
        src?: string
      }
      stack: string[]
      highlights: string[]
      href: string
    }[]
  }
  stack: {
    eyebrow: string
    title: string
    subtitle: string
    categories: {
      name: string
      items: string[]
    }[]
  }
  whyWorkWithMe: {
    eyebrow: string
    title: string
    subtitle: string
    items: {
      description: string
      title: string
    }[]
  }
  resumeSection: {
    eyebrow: string
    title: string
    subtitle: string
    buttons: {
      description: string
      label: string
      href: string
      tags: string[]
      title: string
    }[]
  }
  availability: string
  contactTitle: string
  contactSubtitle: string
  contactCta: string
  email: string
  github: string
  headline: string
  introLabel: string
  languageName: string
  languageToggleLabel: string
  linkedin: string
  navAbout: string
  navContact: string
  navExperience: string
  navHome: string
  navProjects: string
  navStack: string
  onlineLabel: string
  projectsCta: string
  resume: string
  resumeCta: string
  role: string
  heroTitleLead: string
  heroTitleAccent: string
  heroProfileCard: {
    title: string
    cards: {
      label: string
      value: string
    }[]
    logs: string[]
  }
  subheadline: string
  switchLanguage: string
  systemLabel: string
  themeDark: string
  themeLight: string
  themeSwitchToDark: string
  themeSwitchToLight: string
  visualLabel: string
}

export const stackBadges = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Django',
  'APIs',
  'Webhooks',
] as const

export const translations = {
  en: {
    languageName: 'English',
    languageToggleLabel: 'Switch language',
    switchLanguage: 'Português',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSwitchToLight: 'Switch to light theme',
    themeSwitchToDark: 'Switch to dark theme',
    navAbout: 'About',
    navHome: 'Home',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navStack: 'Stack',
    navContact: 'Contact',
    resume: 'Resume',
    resumeCta: 'Download Resume',
    role: 'Full Stack Developer',
    heroTitleLead: 'Full Stack Developer',
    heroTitleAccent: 'for products, APIs\nand digital operations.',
    heroProfileCard: {
      title: 'thales.dev - engineering profile',
      cards: [
        { label: 'FRONT-END', value: 'React · Next.js' },
        { label: 'BACK-END', value: 'Python · Django' },
        { label: 'INTEGRATIONS', value: 'APIs · Webhooks' },
        { label: 'DELIVERY', value: 'CI/CD · Docker' },
      ],
      logs: [
        '$ deploy full-stack-profile',
        '✓ product mindset',
        '✓ clean interfaces',
        '✓ reliable APIs',
        '✓ maintainable systems',
      ],
    },
    availability: 'Open to remote opportunities',
    introLabel: 'Professional portfolio',
    headline: 'Full Stack Developer for products, APIs and digital operations.',
    subheadline:
      'I build web applications that connect interfaces, back-end services, integrations and business rules into reliable systems for product and operations.',
    projectsCta: 'View Projects',
    contactTitle: 'Let’s build something?',
    contactSubtitle:
      'I’m open to full stack opportunities, product work, integrations and web systems that need clear execution and reliable engineering.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contactCta: 'Contact Me',
    email: 'Email',
    visualLabel: 'Portfolio system visual summary',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
    about: {
      eyebrow: 'About me',
      title: 'I turn business flows into reliable web systems.',
      paragraphs: [
        'I’m a Full Stack Developer with experience since 2021 building web applications for product, fintech, SaaS and operational environments.',
        'My work usually sits between interface, back-end, APIs and business rules. I’ve built negotiation journeys, operational dashboards, real-time chats, WhatsApp/CRM integrations, payment flows, fiscal workflows, electronic signatures, webhooks and asynchronous routines.',
        'I like working close to the problem: understanding how the operation works, simplifying complex flows and delivering software that is useful for users, reliable for teams and easier to maintain over time.',
      ],
      snapshotTitle: 'Profile snapshot',
      snapshot: [
        { label: 'Since', value: '2021' },
        { label: 'Focus', value: 'Full Stack · Front-end · Back-end' },
        { label: 'Core', value: 'React · Next.js · TypeScript · Python · Django' },
        { label: 'Domains', value: 'Fintech · SaaS · Operations' },
      ],
      usuallySolveTitle: 'What I usually solve',
      usuallySolve: [
        'Product flows',
        'Dashboards',
        'APIs & Webhooks',
        'Operational systems',
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional journey',
      subtitle: '',
      featuredProjectLabel: 'Featured project',
      stackLabel: 'Stack & skills',
      viewLess: 'View less',
      viewMore: 'View more',
      items: [
        {
          company: 'Clube Fácil',
          companyContext:
            'Clube Fácil is a benefits and health services management platform connecting members, dependents, partner clinics, contracts, charges, and appointments in a centralized administrative operation.',
          context:
            'Returned to the project in a new evolution phase of the platform, taking on broader deliveries in back-end, integrations, asynchronous processing, management dashboards, electronic contract signing, and reliability of financial workflows.',
          featuredProject:
            'Clube Fácil Administrative Platform - modernization of operational and financial workflows connecting GalaxPay, eNotas, DocuSign, Celery/Redis, and analytical dashboards.',
          highlights: [
            'Evolved plan benefits, including free appointments, covered specialties, price tables, and family benefits for members and dependents.',
            'Improved appointment and exam check-in flows with multiple exams, member/private pricing, savings calculation, and receipt generation.',
            'Reworked analytical dashboards with MRR, delinquency, churn, base growth, appointment revenue, average ticket, margin, and sales/unit performance.',
            'Strengthened GalaxPay integration for customers, cards, subscriptions, payments, webhooks, manual settlement, refunds, payment booklets, adjustments, cancellations, and reconciliation.',
            'Improved eNotas / NFS-e and DocuSign integrations for invoices, fiscal recovery, contract envelopes, multiple signers, webhooks, resend flow, and signed document downloads.',
            'Built Celery/Redis routines on Heroku plus governance improvements with logs, financial traceability, POST/CSRF protection, session control, and query/report optimizations.',
          ],
          location: 'Rio de Janeiro, Brazil · Remote',
          period: 'Jan 2026 - Present',
          role: 'Full Stack Developer',
          skills: [
            'Python',
            'Django',
            'Django REST Framework',
            'MySQL',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Webhooks',
            'GalaxPay',
            'eNotas/NFS-e',
            'DocuSign',
            'Heroku',
          ],
          type: 'Independent Contractor',
        },
        {
          company: 'Acrux Capital',
          companyContext:
            'Acrux Capital operates in the Brazilian financial market, focused on illiquid assets such as Seed & Venture Capital, judicial assets, distressed credits, and Real Estate.',
          context:
            'After working as a Front-End Developer, evolved into a Full Stack role, taking on back-end, integrations, APIs, and observability across management applications and dashboards.',
          featuredProject:
            'DataHub Connect - internal platform focused on debt negotiation, guided journeys, operational chat, dashboards, and CRM integrations.',
          highlights: [
            'Worked full stack on management applications and dashboards with React/TypeScript on the front-end and Django/DRF on the back-end.',
            'Evolved the operator chat by adding reports and management panels for operation tracking, volume, and performance.',
            'Rebuilt Saiu Acordo end-to-end with a new front-end, UX and conversion improvements, component architecture, states, forms, APIs, integrations, webhooks, asynchronous queues, and monitoring.',
            'Connected product, operation, and management needs into clearer workflows and more reliable daily operations.',
          ],
          location: 'Rio de Janeiro, Brazil · Remote',
          period: 'Aug 2025 - May 2026',
          role: 'Full Stack Developer',
          skills: [
            'React',
            'TypeScript',
            'Django',
            'Django REST Framework',
            'APIs',
            'Webhooks',
            'Async Queues',
            'Observability',
          ],
          type: 'Independent Contractor',
        },
        {
          company: 'Acrux Capital',
          companyContext:
            'Acrux Capital operates in the Brazilian financial market, focused on illiquid assets such as Seed & Venture Capital, judicial assets, distressed credits, and Real Estate.',
          context:
            'Worked as a Front-End Developer building and evolving web interfaces for financial products, connecting business rules to clear and reliable user experiences.',
          featuredProject:
            'Saiu Acordo - web platform created to help consumers negotiate debts and improve their credit situation through guided agreements and discounts with creditors.',
          highlights: [
            'Developed React/TypeScript interfaces for management applications and the Saiu Acordo platform.',
            'Implemented an operator chat integrated with Z-API/WhatsApp and Piperun CRM using WebSockets.',
            'Improved negotiation flows, forms, and user journeys with focus on clarity, friction reduction, and conversion.',
            'Optimized responsiveness, performance, accessibility, and Core Web Vitals across multiple devices.',
            'Collaborated closely with product, design, and business teams to prioritize improvements with real operational impact.',
          ],
          location: 'Rio de Janeiro, Brazil · Remote',
          period: 'May 2023 - Aug 2025',
          role: 'Front-End Developer',
          skills: [
            'React',
            'TypeScript',
            'WebSockets',
            'Z-API',
            'WhatsApp',
            'Piperun CRM',
            'UX',
            'Accessibility',
            'Core Web Vitals',
          ],
          type: 'Independent Contractor',
        },
        {
          company: 'Clube Fácil',
          companyContext:
            'Clube Fácil is a benefits and health services management platform connecting members, dependents, partner clinics, contracts, charges, and appointments in a centralized administrative operation.',
          context:
            'Worked as a Full Stack Developer evolving the administrative and financial system, including contracts, payments, reports, check-in, external integrations, and internal user experience.',
          featuredProject:
            'Clube Fácil Administrative Platform - system for managing members, dependents, contracts, clinics, charges, and appointments.',
          highlights: [
            'Built dashboards and reports for memberships, payments, invoices, check-ins, daily cash flow, and administrative indicators.',
            'Worked on GalaxPay integration for contracts, recurring charges, payment slips, booklets, payments, adjustments, and transaction failure recovery.',
            'Evolved financial workflows with interest, surcharges, refunds, payment methods, invoices, and split payment rules.',
            'Implemented eNotas / NFS-e integration for invoice issuing, API responses, webhooks, and invoice status linked to payments.',
            'Improved appointment check-in, registrations, contracts, validations, membership numbers, add-ons, migrated clients, operational logs, and visual refinements.',
          ],
          location: 'Rio de Janeiro, Brazil · Remote',
          period: 'Dec 2024 - Sep 2025',
          role: 'Full Stack Developer',
          skills: [
            'Python',
            'Django',
            'Django REST Framework',
            'MySQL',
            'PostgreSQL',
            'GalaxPay',
            'eNotas/NFS-e',
            'RD Conversas',
            'Webhooks',
            'Heroku',
          ],
          type: 'Independent Contractor',
        },
        {
          company: 'Art Lab Desenvolvimento',
          companyContext:
            'Art Lab is a creative studio focused on software development and digital solutions for clients from different industries.',
          context:
            'Worked as a Front-End Developer building and maintaining institutional websites and web apps, ensuring responsive interfaces and consistent experiences across devices and browsers.',
          featuredProject:
            'Cimtia Ads - a TV media buying web app later sold to Record TV.',
          highlights: [
            'Built and maintained responsive institutional websites and web apps focused on usability and smooth navigation.',
            'Worked end-to-end from layout to code in collaboration with design, management, and marketing teams.',
            'Delivered front-end interfaces for client projects across different business needs.',
          ],
          location: 'Florianópolis, Brazil · On-site',
          period: 'Feb 2021 - Feb 2022',
          role: 'Front-End Developer',
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Responsive Design',
            'UI',
            'Web Apps',
          ],
          type: 'Independent Contractor',
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected public work.',
      subtitle:
        'Public projects I can share, with a focus on product flows, conversion, institutional presence and operational web apps.',
      stackLabel: 'Stack',
      highlightsLabel: 'Highlights',
      linkLabel: 'View project',
      items: [
        {
          name: 'Saiu Acordo',
          category: 'Debt negotiation platform',
          description:
            'Financial platform created to help users negotiate debts through a clear, guided and conversion-focused journey.',
          longDescription:
            'Saiu Acordo is a debt negotiation platform designed to turn a sensitive financial flow into a simpler, more transparent and conversion-oriented experience. The project combines a responsive interface, guided steps, payment integrations, CRM connections and conversion events to support both end users and operations teams.',
          cover: {
            alt: 'Saiu Acordo platform homepage',
            src: '/projects/Saiuacordo.png',
          },
          stack: [
            'React',
            'TypeScript',
            'Tailwind',
            'Laravel',
            'Twilio',
            'Asaas',
            'RD Station',
            'Webhooks',
            'Docker',
            'GCP',
          ],
          highlights: [
            'Guided negotiation flow',
            'UX and conversion improvements',
            'Payment and CRM integrations',
            'Responsive and accessible interface',
            'Reduced friction in forms and journeys',
            'Proposal and funnel status tracking',
          ],
          href: 'https://saiuacordo.com.br/',
        },
        {
          name: 'Cimtia Ads',
          category: 'TV media buying web app',
          description:
            'Web app for exploring inventory and requesting TV advertising placements, later sold to Record TV.',
          longDescription:
            'Cimtia Ads is a web application created for inventory consultation and TV advertising placement requests. The product organizes media information, supports review before submission and provides an advertiser area to track request history and status.',
          cover: {
            alt: 'Cimtia Ads web app interface',
            src: '/projects/CimtiaAds.png',
          },
          stack: ['React', 'TypeScript', 'Node.js', 'Firebase'],
          highlights: [
            'Responsive interface',
            'Advertiser area',
            'Operational workflow',
            'Inventory exploration with filters',
            'Purchase request with review step',
            'Simple technical base for maintenance and evolution',
          ],
          href: 'https://www.cimtiaads.com.br/',
        },
        {
          name: 'AMC Construções',
          category: 'Institutional website',
          description:
            'Institutional website update with new real estate developments and blog reactivation within the brand’s native theme.',
          longDescription:
            'Maintenance and evolution project for the AMC Construções institutional website, focused on content updates, organization of new developments, blog reactivation and visual adjustments to improve navigation and brand presentation.',
          cover: {
            alt: 'AMC Construções institutional website',
            src: '/projects/amc.png',
          },
          stack: [
            'HTML',
            'CSS',
            'Unsemantic CSS',
            'JavaScript',
            'jQuery',
            'Google Maps API',
          ],
          highlights: [
            'New development pages and layouts',
            'Blog enabled within the existing theme',
            'Responsiveness review',
            'Lightweight JavaScript/jQuery refactoring',
            'Visual bug fixes',
            'On-page SEO with titles, meta tags and images',
          ],
          href: 'https://www.amc.eng.br/',
        },
        {
          name: 'Paraíso Feminino',
          category: 'E-book sales page',
          description:
            'Conversion-focused landing page for selling an e-book, with social proof, benefits, chapters, testimonials, gallery, promotional countdown and FAQ.',
          longDescription:
            'Paraíso Feminino is a sales page created to present and sell an e-book through a direct, visual and conversion-oriented experience. The landing page organizes the offer into strategic sections, combining social proof, benefits, testimonials, gallery, promotional countdown and FAQ, with clear CTAs distributed throughout the journey.',
          cover: {
            alt: 'Paraíso Feminino e-book sales page',
            src: '/projects/ParaisoFeminino.png',
          },
          stack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
            'Swiper.js',
          ],
          highlights: [
            'Section architecture guided by copy and clear CTAs',
            'Hero with social proof and objective value proposition',
            'Swiper carousels and subtle microinteractions',
            'Promotional countdown and conversion anchors',
            'Accordion FAQ and visually highlighted testimonials',
            'Semantic structure, performance and SEO with optimized assets',
          ],
          href: 'https://produtos.paraisofeminino.com.br/codigodeestilo-v1/',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Tools I use to build and evolve web products.',
      subtitle:
        'A practical stack for interfaces, APIs, integrations, data routines and operational systems.',
      categories: [
        {
          name: 'Front-end',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind',
            'shadcn/ui',
            'HTML',
            'CSS',
          ],
        },
        {
          name: 'Back-end',
          items: [
            'Python',
            'Django',
            'Django REST Framework',
            'Node.js',
            'Laravel',
            'REST APIs',
          ],
        },
        {
          name: 'Integrations',
          items: [
            'GalaxPay',
            'Asaas',
            'eNotas/NFS-e',
            'DocuSign',
            'Z-API',
            'Twilio',
            'RD Station',
            'CRMs',
            'Webhooks',
          ],
        },
        {
          name: 'Data & Async',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Pandas'],
        },
        {
          name: 'DevOps',
          items: ['Docker', 'GitHub Actions', 'CI/CD', 'Heroku', 'GCP'],
        },
      ],
    },
    whyWorkWithMe: {
      eyebrow: 'What I bring to the table',
      title: 'How I usually help teams',
      subtitle: '',
      items: [
        {
          title: 'Product clarity',
          description:
            'I try to understand the goal behind each feature before writing code, so the solution makes sense for users and for the business.',
        },
        {
          title: 'End-to-end execution',
          description:
            'I can move across front-end, back-end, APIs and integrations without losing sight of the full product flow.',
        },
        {
          title: 'Complex flows made simpler',
          description:
            'I’m comfortable working with business rules, payments, fiscal workflows, CRMs, WhatsApp, webhooks and operational processes.',
        },
        {
          title: 'Operation-aware development',
          description:
            'I build dashboards, automations and internal tools with attention to how teams will use and maintain them day to day.',
        },
        {
          title: 'Maintainable delivery',
          description:
            'I care about clear structure, readable code and decisions that make the system easier to evolve after the first release.',
        },
      ],
    },
    resumeSection: {
      eyebrow: 'Resume',
      title: 'Choose the resume that fits the role.',
      subtitle:
        'I keep different versions focused on full stack, front-end and back-end opportunities.',
      buttons: [
        {
          description:
            'Broader profile focused on product flows, APIs, integrations, dashboards and operational systems.',
          label: 'Download Full Stack Resume',
          href: resumeFiles.en.fullStack,
          tags: ['Product', 'APIs', 'Operations'],
          title: 'Full Stack',
        },
        {
          description:
            'Focused on React, Next.js, TypeScript, responsive interfaces, UX, performance and product journeys.',
          label: 'Download Front-End Resume',
          href: resumeFiles.en.frontEnd,
          tags: ['React', 'Next.js', 'UX'],
          title: 'Front-End',
        },
        {
          description:
            'Focused on Python, Django/DRF, APIs, databases, webhooks, integrations and asynchronous routines.',
          label: 'Download Back-End Resume',
          href: resumeFiles.en.backEnd,
          tags: ['Python', 'Django', 'APIs'],
          title: 'Back-End',
        },
      ],
    },
  },
  pt: {
    languageName: 'Português',
    languageToggleLabel: 'Alternar idioma',
    switchLanguage: 'English',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    themeSwitchToLight: 'Alternar para tema claro',
    themeSwitchToDark: 'Alternar para tema escuro',
    navAbout: 'Sobre',
    navHome: 'Início',
    navExperience: 'Experiência',
    navProjects: 'Projetos',
    navStack: 'Stack',
    navContact: 'Contato',
    resume: 'Currículo',
    resumeCta: 'Baixar currículo',
    role: 'Full Stack Developer',
    heroTitleLead: 'Full Stack Developer',
    heroTitleAccent: 'para produtos, APIs\ne operações digitais.',
    heroProfileCard: {
      title: 'thales.dev - perfil de engenharia',
      cards: [
        { label: 'FRONT-END', value: 'React · Next.js' },
        { label: 'BACK-END', value: 'Python · Django' },
        { label: 'INTEGRAÇÕES', value: 'APIs · Webhooks' },
        { label: 'ENTREGA', value: 'CI/CD · Docker' },
      ],
      logs: [
        '$ deploy perfil-full-stack',
        '✓ visão de produto',
        '✓ interfaces limpas',
        '✓ APIs confiáveis',
        '✓ sistemas manuteníveis',
      ],
    },
    availability: 'Aberto a oportunidades remotas',
    introLabel: 'Portfólio profissional',
    headline: 'Full Stack Developer para produtos, APIs e operações digitais.',
    subheadline:
      'Desenvolvo aplicações web que conectam interfaces, back-end, integrações e regras de negócio em sistemas confiáveis para produto e operação.',
    projectsCta: 'Ver projetos',
    contactTitle: 'Vamos construir algo?',
    contactSubtitle:
      'Estou aberto a oportunidades full stack, projetos de produto, integrações e sistemas web que precisam de execução clara e engenharia confiável.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contactCta: 'Fale comigo',
    email: 'E-mail',
    visualLabel: 'Resumo visual do sistema do portfólio',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
    about: {
      eyebrow: 'Sobre mim',
      title: 'Transformo fluxos de negócio em sistemas web confiáveis.',
      paragraphs: [
        'Sou Full Stack Developer com experiência desde 2021 construindo aplicações web para ambientes de produto, fintech, SaaS e operação.',
        'Minha atuação costuma ficar entre interface, back-end, APIs e regras de negócio. Já desenvolvi jornadas de negociação, dashboards operacionais, chats em tempo real, integrações com WhatsApp/CRM, fluxos de pagamento, emissão fiscal, assinatura eletrônica, webhooks e rotinas assíncronas.',
        'Gosto de trabalhar perto do problema: entender como a operação funciona, simplificar fluxos complexos e entregar software útil para quem usa, confiável para quem opera e mais fácil de manter ao longo do tempo.',
      ],
      snapshotTitle: 'Resumo do perfil',
      snapshot: [
        { label: 'Desde', value: '2021' },
        { label: 'Foco', value: 'Full Stack · Front-end · Back-end' },
        { label: 'Core', value: 'React · Next.js · TypeScript · Python · Django' },
        { label: 'Domínios', value: 'Fintech · SaaS · Operação' },
      ],
      usuallySolveTitle: 'O que costumo resolver',
      usuallySolve: [
        'Fluxos de produto',
        'Dashboards',
        'APIs & Webhooks',
        'Sistemas operacionais',
      ],
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Trajetória profissional',
      subtitle: '',
      featuredProjectLabel: 'Projeto em destaque',
      stackLabel: 'Stack e habilidades',
      viewLess: 'Ver menos',
      viewMore: 'Ver mais',
      items: [
        {
          company: 'Clube Fácil',
          companyContext:
            'A Clube Fácil é uma plataforma de gestão de benefícios e serviços de saúde, conectando associados, dependentes, clínicas parceiras, contratos, cobranças e atendimentos em uma operação administrativa centralizada.',
          context:
            'Retornei ao projeto em uma nova fase de evolução da plataforma, assumindo entregas em back-end, integrações, processamento assíncrono, dashboards gerenciais, assinatura digital de contratos e robustez dos fluxos financeiros.',
          featuredProject:
            'Plataforma Administrativa Clube Fácil - modernização de fluxos operacionais e financeiros conectando GalaxPay, eNotas, DocuSign, Celery/Redis e dashboards analíticos.',
          highlights: [
            'Evoluí o modelo de benefícios dos planos, incluindo consultas gratuitas, especialidades cobertas, tabelas de preços e benefício família para titulares e dependentes.',
            'Melhorei o check-in de consultas e exames, com múltiplos exames, cálculo de valores para particular/associado, economia obtida e emissão de recibos.',
            'Reestruturei dashboards analíticos com MRR, inadimplência, churn, crescimento da base, receita de consultas, ticket médio, margem e performance por vendedor/unidade.',
            'Fortaleci a integração com GalaxPay em clientes, cartões, assinaturas, pagamentos, webhooks, baixa manual, estornos, carnês, reajustes, cancelamentos e conciliação.',
            'Aprimorei integrações com eNotas / NFS-e e DocuSign para notas fiscais, recuperação fiscal, envelopes, múltiplos signatários, webhooks, reenvio e download de documentos.',
            'Desenvolvi rotinas com Celery/Redis em Heroku e melhorias de governança com logs, rastreabilidade financeira, POST/CSRF, controle de sessão e otimizações de consultas/relatórios.',
          ],
          location: 'Rio de Janeiro, Brasil · Remoto',
          period: 'jan de 2026 - o momento',
          role: 'Desenvolvedor Full Stack',
          skills: [
            'Python',
            'Django',
            'Django REST Framework',
            'MySQL',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Webhooks',
            'GalaxPay',
            'eNotas/NFS-e',
            'DocuSign',
            'Heroku',
          ],
          type: 'Autônomo',
        },
        {
          company: 'Acrux Capital',
          companyContext:
            'A Acrux Capital atua no mercado financeiro brasileiro com foco em ativos ilíquidos, como Seed & Venture Capital, ativos judiciais, créditos estressados e Real Estate.',
          context:
            'Após atuar como Front-End, evoluí para um papel Full Stack, assumindo back-end, integrações, APIs e observabilidade em aplicações de gestão e dashboards.',
          featuredProject:
            'DataHub Connect - plataforma interna focada em negociação de dívidas, jornadas guiadas, chat operacional, dashboards e integrações com CRMs.',
          highlights: [
            'Atuei full stack em aplicações de gestão e dashboards, com front-end em React/TypeScript e back-end em Django/DRF.',
            'Evoluí o chat de operadores com relatórios e painéis gerenciais para acompanhamento de operação, volume e performance.',
            'Reestruturei o Saiu Acordo de ponta a ponta com novo front-end, melhorias de UX/conversão, arquitetura de componentes, estados, formulários, APIs, integrações, webhooks, filas assíncronas e monitoramento.',
            'Conectei necessidades de produto, operação e gestão em fluxos mais claros e confiáveis para o dia a dia.',
          ],
          location: 'Rio de Janeiro, Brasil · Remoto',
          period: 'ago de 2025 - mai de 2026',
          role: 'Desenvolvedor Full Stack',
          skills: [
            'React',
            'TypeScript',
            'Django',
            'Django REST Framework',
            'APIs',
            'Webhooks',
            'Async Queues',
            'Observability',
          ],
          type: 'Autônomo',
        },
        {
          company: 'Acrux Capital',
          companyContext:
            'A Acrux Capital atua no mercado financeiro brasileiro com foco em ativos ilíquidos, como Seed & Venture Capital, ativos judiciais, créditos estressados e Real Estate.',
          context:
            'Atuei como Desenvolvedor Front-End criando e evoluindo interfaces web para produtos financeiros, conectando regras de negócio a uma experiência clara e confiável para o usuário final.',
          featuredProject:
            'Saiu Acordo - plataforma web criada para ajudar consumidores a negociar dívidas e melhorar sua situação de crédito, oferecendo um ambiente guiado para acordos e descontos com credores.',
          highlights: [
            'Desenvolvi interfaces em React/TypeScript para aplicações de gestão e para a plataforma Saiu Acordo.',
            'Implementei chat para operadores integrado à Z-API/WhatsApp e Piperun CRM com WebSockets.',
            'Refinei fluxos de negociação, formulários e jornadas com foco em clareza, redução de atrito e conversão.',
            'Otimizei responsividade, performance, acessibilidade e Core Web Vitals em múltiplos dispositivos.',
            'Colaborei com produto, design e negócio para priorizar melhorias com impacto real na operação.',
          ],
          location: 'Rio de Janeiro, Brasil · Remoto',
          period: 'mai de 2023 - ago de 2025',
          role: 'Desenvolvedor Front-End',
          skills: [
            'React',
            'TypeScript',
            'WebSockets',
            'Z-API',
            'WhatsApp',
            'Piperun CRM',
            'UX',
            'Accessibility',
            'Core Web Vitals',
          ],
          type: 'Autônomo',
        },
        {
          company: 'Clube Fácil',
          companyContext:
            'A Clube Fácil é uma plataforma de gestão de benefícios e serviços de saúde, conectando associados, dependentes, clínicas parceiras, contratos, cobranças e atendimentos em uma operação administrativa centralizada.',
          context:
            'Atuei como Desenvolvedor Full Stack na evolução do sistema administrativo e financeiro, trabalhando em contratos, pagamentos, relatórios, check-in, integrações externas e melhorias para os usuários internos da operação.',
          featuredProject:
            'Plataforma Administrativa Clube Fácil - sistema web para gestão de associados, dependentes, contratos, clínicas, cobranças e atendimentos.',
          highlights: [
            'Desenvolvi dashboards e relatórios para adesões, pagamentos, faturas, check-ins, caixa diário e indicadores administrativos.',
            'Atuei na integração com GalaxPay para contratos, cobranças recorrentes, boletos, carnês, pagamentos, reajustes e recuperação de falhas.',
            'Evoluí fluxos financeiros com juros, acréscimos, estornos, meios de pagamento, faturas e regras de split de pagamentos.',
            'Implementei integração com eNotas / NFS-e para emissão de notas fiscais, respostas da API, webhooks e status das notas vinculadas aos pagamentos.',
            'Melhorei check-in, cadastros, contratos, validações, matrícula, adicionais, clientes migrados, logs operacionais e refinamentos visuais.',
          ],
          location: 'Rio de Janeiro, Brasil · Remoto',
          period: 'dez de 2024 - set de 2025',
          role: 'Desenvolvedor Full Stack',
          skills: [
            'Python',
            'Django',
            'Django REST Framework',
            'MySQL',
            'PostgreSQL',
            'GalaxPay',
            'eNotas/NFS-e',
            'RD Conversas',
            'Webhooks',
            'Heroku',
          ],
          type: 'Autônomo',
        },
        {
          company: 'Art Lab Desenvolvimento',
          companyContext:
            'A Art Lab é um estúdio criativo focado em desenvolvimento de software e soluções digitais para clientes de diferentes segmentos.',
          context:
            'Atuei como Desenvolvedor Front-End na construção e manutenção de sites institucionais e web apps, garantindo interfaces responsivas e experiência consistente em diferentes dispositivos e navegadores.',
          featuredProject:
            'Cimtia Ads - web app para compra de mídia em TV, posteriormente vendido à Record TV.',
          highlights: [
            'Desenvolvi e mantive sites institucionais e web apps responsivos, com foco em usabilidade e navegação fluida.',
            'Atuei ponta a ponta, do layout ao código, em colaboração com design, gestão e marketing.',
            'Entreguei interfaces front-end para projetos de clientes com diferentes necessidades de negócio.',
          ],
          location: 'Florianópolis, Brasil · Presencial',
          period: 'fev de 2021 - fev de 2022',
          role: 'Desenvolvedor Front-End',
          skills: [
            'React',
            'TypeScript',
            'JavaScript',
            'HTML',
            'CSS',
            'Responsive Design',
            'UI',
            'Web Apps',
          ],
          type: 'Autônomo',
        },
      ],
    },
    projects: {
      eyebrow: 'Projetos',
      title: 'Projetos públicos selecionados.',
      subtitle:
        'Trabalhos que posso compartilhar publicamente, com foco em fluxos de produto, conversão, presença institucional e aplicações web operacionais.',
      stackLabel: 'Stack',
      highlightsLabel: 'Destaques',
      linkLabel: 'Ver projeto',
      items: [
        {
          name: 'Saiu Acordo',
          category: 'Plataforma de negociação de dívidas',
          description:
            'Plataforma financeira criada para ajudar usuários a negociar dívidas por meio de uma jornada guiada, clara e focada em conversão.',
          longDescription:
            'O Saiu Acordo é uma plataforma de negociação de dívidas pensada para transformar um fluxo financeiro sensível em uma experiência mais simples, transparente e orientada à conversão. O projeto combina interface responsiva, etapas guiadas, integrações com meios de pagamento, CRM e eventos de conversão para apoiar tanto o usuário final quanto a operação.',
          cover: {
            alt: 'Tela inicial da plataforma Saiu Acordo',
            src: '/projects/Saiuacordo.png',
          },
          stack: [
            'React',
            'TypeScript',
            'Tailwind',
            'Laravel',
            'Twilio',
            'Asaas',
            'RD Station',
            'Webhooks',
            'Docker',
            'GCP',
          ],
          highlights: [
            'Fluxo guiado de negociação',
            'Melhorias de UX e conversão',
            'Integrações com pagamento e CRM',
            'Interface responsiva e acessível',
            'Redução de atrito em formulários e jornadas',
            'Acompanhamento de propostas e status do funil',
          ],
          href: 'https://saiuacordo.com.br/',
        },
        {
          name: 'Cimtia Ads',
          category: 'Web app para compra de mídia em TV',
          description:
            'Web app para explorar inventário e solicitar veiculações de publicidade em TV, posteriormente vendido à Record TV.',
          longDescription:
            'O Cimtia Ads é uma aplicação web criada para consulta de inventário e solicitação de compra de espaços publicitários em TV. O produto organiza informações de mídia, facilita a revisão antes do envio e oferece uma área para anunciantes acompanharem histórico e status das solicitações.',
          cover: {
            alt: 'Tela da plataforma Cimtia Ads',
            src: '/projects/CimtiaAds.png',
          },
          stack: ['React', 'TypeScript', 'Node.js', 'Firebase'],
          highlights: [
            'Interface responsiva',
            'Área para anunciantes',
            'Fluxo operacional',
            'Exploração de inventário com filtros',
            'Solicitação de compra com revisão',
            'Base técnica simples para manutenção e evolução',
          ],
          href: 'https://www.cimtiaads.com.br/',
        },
        {
          name: 'AMC Construções',
          category: 'Site institucional',
          description:
            'Atualização do site institucional com inclusão de novos empreendimentos e reativação do blog no tema nativo da marca.',
          longDescription:
            'Projeto de manutenção e evolução do site institucional da AMC Construções, com foco em atualização de conteúdo, organização de novos empreendimentos, reativação do blog e ajustes visuais para melhorar a navegação e a apresentação da marca.',
          cover: {
            alt: 'Site institucional da AMC Construções',
            src: '/projects/amc.png',
          },
          stack: [
            'HTML',
            'CSS',
            'Unsemantic CSS',
            'JavaScript',
            'jQuery',
            'Google Maps API',
          ],
          highlights: [
            'Cadastro e layout de novos empreendimentos',
            'Blog habilitado no tema próprio',
            'Revisão de responsividade',
            'Refatoração leve em JavaScript/jQuery',
            'Correção de bugs visuais',
            'SEO on-page com títulos, meta tags e imagens',
          ],
          href: 'https://www.amc.eng.br/',
        },
        {
          name: 'Paraíso Feminino',
          category: 'Página de vendas de e-book',
          description:
            'Landing page focada em conversão para venda de e-book, com prova social, benefícios, capítulos, depoimentos, galeria, contador promocional e FAQ.',
          longDescription:
            'O Paraíso Feminino é uma página de vendas desenvolvida para apresentar e vender um e-book por meio de uma experiência direta, visual e orientada à conversão. A landing page organiza a oferta em seções estratégicas, combina prova social, benefícios, depoimentos, galeria, contador promocional e FAQ, além de CTAs claros distribuídos ao longo da jornada.',
          cover: {
            alt: 'Página de vendas Paraíso Feminino',
            src: '/projects/ParaisoFeminino.png',
          },
          stack: [
            'HTML',
            'CSS',
            'Bootstrap',
            'JavaScript',
            'Swiper.js',
          ],
          highlights: [
            'Arquitetura de seções orientada à copy e CTAs claros',
            'Hero com prova social e proposta de valor objetiva',
            'Carrosséis com Swiper e microinterações sutis',
            'Contagem regressiva promocional e âncoras para conversão',
            'FAQ em acordeão e depoimentos com destaque visual',
            'Estrutura semântica, performance e SEO com assets otimizados',
          ],
          href: 'https://produtos.paraisofeminino.com.br/codigodeestilo-v1/',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Ferramentas que uso para construir e evoluir produtos web.',
      subtitle:
        'Uma stack prática para interfaces, APIs, integrações, rotinas de dados e sistemas operacionais.',
      categories: [
        {
          name: 'Front-end',
          items: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind',
            'shadcn/ui',
            'HTML',
            'CSS',
          ],
        },
        {
          name: 'Back-end',
          items: [
            'Python',
            'Django',
            'Django REST Framework',
            'Node.js',
            'Laravel',
            'REST APIs',
          ],
        },
        {
          name: 'Integrações',
          items: [
            'GalaxPay',
            'Asaas',
            'eNotas/NFS-e',
            'DocuSign',
            'Z-API',
            'Twilio',
            'RD Station',
            'CRMs',
            'Webhooks',
          ],
        },
        {
          name: 'Dados & Async',
          items: ['PostgreSQL', 'MySQL', 'Redis', 'Celery', 'Pandas'],
        },
        {
          name: 'DevOps',
          items: ['Docker', 'GitHub Actions', 'CI/CD', 'Heroku', 'GCP'],
        },
      ],
    },
    whyWorkWithMe: {
      eyebrow: 'O que eu levo para o time',
      title: 'Como costumo ajudar',
      subtitle: '',
      items: [
        {
          title: 'Clareza de produto',
          description:
            'Busco entender o objetivo por trás de cada entrega antes de escrever código, para que a solução faça sentido para o usuário e para o negócio.',
        },
        {
          title: 'Execução de ponta a ponta',
          description:
            'Consigo atuar entre front-end, back-end, APIs e integrações sem perder a visão do fluxo completo do produto.',
        },
        {
          title: 'Fluxos complexos mais simples',
          description:
            'Tenho facilidade em trabalhar com regras de negócio, pagamentos, emissão fiscal, CRMs, WhatsApp, webhooks e processos operacionais.',
        },
        {
          title: 'Desenvolvimento olhando para a operação',
          description:
            'Construo dashboards, automações e ferramentas internas pensando em como os times vão usar e manter aquilo no dia a dia.',
        },
        {
          title: 'Entrega fácil de evoluir',
          description:
            'Valorizo estrutura clara, código legível e decisões que tornam o sistema mais simples de manter depois da primeira entrega.',
        },
      ],
    },
    resumeSection: {
      eyebrow: 'Currículo',
      title: 'Escolha o currículo mais alinhado à vaga.',
      subtitle:
        'Mantenho versões direcionadas para oportunidades full stack, front-end e back-end.',
      buttons: [
        {
          description:
            'Perfil mais amplo, com foco em fluxos de produto, APIs, integrações, dashboards e sistemas operacionais.',
          label: 'Baixar currículo Full Stack',
          href: resumeFiles.pt.fullStack,
          tags: ['Produto', 'APIs', 'Operação'],
          title: 'Full Stack',
        },
        {
          description:
            'Foco em React, Next.js, TypeScript, interfaces responsivas, UX, performance e jornadas de produto.',
          label: 'Baixar currículo Front-End',
          href: resumeFiles.pt.frontEnd,
          tags: ['React', 'Next.js', 'UX'],
          title: 'Front-End',
        },
        {
          description:
            'Foco em Python, Django/DRF, APIs, bancos de dados, webhooks, integrações e rotinas assíncronas.',
          label: 'Baixar currículo Back-End',
          href: resumeFiles.pt.backEnd,
          tags: ['Python', 'Django', 'APIs'],
          title: 'Back-End',
        },
      ],
    },
  },
} satisfies Record<Language, TranslationContent>
