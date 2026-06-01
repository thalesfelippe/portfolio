export type Language = 'pt' | 'en'

export const translations = {
  pt: {
    languageName: 'Português',
    switchLanguage: 'English',
    themeLight: 'Claro',
    themeDark: 'Escuro',
    introLabel: 'Portfólio profissional',
    headline: 'Construindo software web confiável e manutenível.',
    summary:
      'Base visual do portfólio profissional de Thales Felippe, preparada para evoluir de forma incremental com React, TypeScript, Tailwind CSS e publicação estática.',
    contactTitle: 'Contato',
    contactSubtitle:
      'Canais profissionais informados para contato e validação do portfólio.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    statusTitle: 'Status da etapa',
    statusText:
      'Design system e layout base criados. As próximas etapas devem adicionar conteúdo profissional somente com dados fornecidos.',
    visualLabel: 'Resumo visual do sistema do portfólio',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
  },
  en: {
    languageName: 'English',
    switchLanguage: 'Português',
    themeLight: 'Light',
    themeDark: 'Dark',
    introLabel: 'Professional portfolio',
    headline: 'Building reliable and maintainable web software.',
    summary:
      'Visual base for Thales Felippe professional portfolio, ready to evolve incrementally with React, TypeScript, Tailwind CSS, and static publishing.',
    contactTitle: 'Contact',
    contactSubtitle:
      'Provided professional channels for portfolio contact and validation.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    statusTitle: 'Step status',
    statusText:
      'Design system and layout shell created. Next steps should add professional content only from provided data.',
    visualLabel: 'Portfolio system visual summary',
    systemLabel: 'Portfolio OS',
    onlineLabel: 'Online',
  },
} as const
