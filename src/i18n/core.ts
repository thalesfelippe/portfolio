import type { Language } from './languages'

export const stackBadges = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'Django',
  'APIs',
  'Webhooks',
] as const

export const coreTranslations = {
  en: {
    availability: 'Open to remote opportunities',
    contactCta: 'Contact Me',
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
    heroTitleAccent: 'building reliable web\nproducts.',
    heroTitleLead: 'Full Stack Developer',
    languageToggleLabel: 'Switch language',
    navAbout: 'About',
    navContact: 'Contact',
    navExperience: 'Experience',
    navHome: 'Home',
    navProjects: 'Projects',
    navStack: 'Stack',
    projectsCta: 'View Projects',
    resume: 'Resume',
    resumeCta: 'Download Resume',
    subheadline:
      'I build web applications for product, fintech, SaaS, and operations, connecting front-end, back-end, APIs, integrations, and business rules into systems that are clear, reliable, and easy to evolve.',
    themeSwitchToDark: 'Switch to dark theme',
    themeSwitchToLight: 'Switch to light theme',
    visualLabel: 'Portfolio system visual summary',
  },
  pt: {
    availability: 'Aberto a oportunidades remotas',
    contactCta: 'Fale comigo',
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
    heroTitleAccent: 'construindo produtos\nweb confiáveis.',
    heroTitleLead: 'Full Stack Developer',
    languageToggleLabel: 'Alternar idioma',
    navAbout: 'Sobre',
    navContact: 'Contato',
    navExperience: 'Experiência',
    navHome: 'Início',
    navProjects: 'Projetos',
    navStack: 'Stack',
    projectsCta: 'Ver projetos',
    resume: 'Currículo',
    resumeCta: 'Baixar currículo',
    subheadline:
      'Construo aplicações web para ambientes de produto, fintech, SaaS e operação, conectando front-end, back-end, APIs, integrações e regras de negócio em sistemas claros, confiáveis e fáceis de evoluir.',
    themeSwitchToDark: 'Alternar para tema escuro',
    themeSwitchToLight: 'Alternar para tema claro',
    visualLabel: 'Resumo visual do sistema do portfólio',
  },
} satisfies Record<Language, {
  availability: string
  contactCta: string
  heroProfileCard: {
    title: string
    cards: {
      label: string
      value: string
    }[]
    logs: string[]
  }
  heroTitleAccent: string
  heroTitleLead: string
  languageToggleLabel: string
  navAbout: string
  navContact: string
  navExperience: string
  navHome: string
  navProjects: string
  navStack: string
  projectsCta: string
  resume: string
  resumeCta: string
  subheadline: string
  themeSwitchToDark: string
  themeSwitchToLight: string
  visualLabel: string
}>
