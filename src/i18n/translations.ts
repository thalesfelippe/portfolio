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
      'Base inicial do portfólio profissional de Thales Felippe, preparada para evoluir de forma incremental com React, TypeScript, Tailwind CSS e publicação estática.',
    contactTitle: 'Contato',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    statusTitle: 'Status da etapa',
    statusText:
      'Projeto base criado. As próximas etapas devem adicionar conteúdo profissional somente com dados fornecidos.',
  },
  en: {
    languageName: 'English',
    switchLanguage: 'Português',
    themeLight: 'Light',
    themeDark: 'Dark',
    introLabel: 'Professional portfolio',
    headline: 'Building reliable and maintainable web software.',
    summary:
      'Initial base for Thales Felippe professional portfolio, ready to evolve incrementally with React, TypeScript, Tailwind CSS, and static publishing.',
    contactTitle: 'Contact',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    statusTitle: 'Step status',
    statusText:
      'Base project created. Next steps should add professional content only from provided data.',
  },
} as const
