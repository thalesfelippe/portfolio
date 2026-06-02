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
  },
} satisfies Record<Language, TranslationContent>
