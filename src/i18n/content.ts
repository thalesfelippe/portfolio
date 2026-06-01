import type { Language } from './languages'

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
  resumeUnavailable: string
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
    resumeUnavailable: 'Resume download will be enabled when a resume file is provided.',
    role: 'Full Stack Developer',
    heroTitleLead: 'Full Stack Developer',
    heroTitleAccent: 'building reliable web\nproducts.',
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
    headline: 'Full Stack Developer building reliable web products.',
    subheadline:
      'I build web applications for product, fintech, SaaS, and operations, connecting front-end, back-end, APIs, integrations, and business rules into systems that are clear, reliable, and easy to evolve.',
    projectsCta: 'View Projects',
    contactTitle: 'Contact',
    contactSubtitle:
      'Let’s talk about product, operations, integrations, and web systems.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contactCta: 'Contact Me',
    email: 'Email',
    visualLabel: 'Portfolio system visual summary',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
    about: {
      eyebrow: 'About me',
      title: 'I build products that connect code, business, and operation.',
      paragraphs: [
        'I’m a Full Stack Developer with experience since 2021 building web applications for product, fintech, SaaS, and operations. I work with React, Next.js, TypeScript, Python, Django/DRF, and APIs, connecting front-end, back-end, integrations, and business rules to deliver systems that are stable, clear, and easy to evolve.',
        'In recent years, I have worked on financial platforms and management systems, building negotiation journeys, operational dashboards, real-time chats, WhatsApp/CRM integrations, payment gateways, fiscal invoicing, electronic signatures, webhooks, asynchronous routines, and observability improvements.',
        'I like building solutions in collaboration with product and operations, connecting business rules, integrations, and user experience into systems that are clear, reliable, and easy to maintain.',
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
        'Webhooks & APIs',
        'Operational systems',
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
    resumeUnavailable: 'O download do currículo será habilitado quando um arquivo for fornecido.',
    role: 'Full Stack Developer',
    heroTitleLead: 'Full Stack Developer',
    heroTitleAccent: 'construindo produtos\nweb confiáveis.',
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
    headline: 'Full Stack Developer construindo produtos web confiáveis.',
    subheadline:
      'Construo aplicações web para ambientes de produto, fintech, SaaS e operação, conectando front-end, back-end, APIs, integrações e regras de negócio em sistemas claros, confiáveis e fáceis de evoluir.',
    projectsCta: 'Ver projetos',
    contactTitle: 'Contato',
    contactSubtitle:
      'Vamos conversar sobre produto, operação, integrações e sistemas web.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    contactCta: 'Fale comigo',
    email: 'E-mail',
    visualLabel: 'Resumo visual do sistema do portfólio',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
    about: {
      eyebrow: 'Sobre mim',
      title: 'Construo produtos que conectam código, negócio e operação.',
      paragraphs: [
        'Sou Full Stack Developer com experiência desde 2021 construindo aplicações web para ambientes de produto, fintech, SaaS e operação. Trabalho com React, Next.js, TypeScript, Python, Django/DRF e APIs, conectando front-end, back-end, integrações e regras de negócio para entregar sistemas estáveis, claros e fáceis de evoluir.',
        'Nos últimos anos, atuei em plataformas financeiras e sistemas de gestão, desenvolvendo jornadas de negociação, dashboards operacionais, chats em tempo real, integrações com WhatsApp/CRM, gateways de pagamento, emissão fiscal, assinatura eletrônica, webhooks, rotinas assíncronas e melhorias de observabilidade.',
        'Gosto de construir soluções em colaboração com produto e operação, conectando regras de negócio, integrações e experiência do usuário em sistemas claros, confiáveis e fáceis de manter.',
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
        'Webhooks & APIs',
        'Sistemas operacionais',
      ],
    },
  },
} satisfies Record<Language, TranslationContent>
