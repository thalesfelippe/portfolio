import { profile } from '../data/profile'
import { getWhatsAppUrl } from '../config/contact'
import type { Language } from '../i18n/translations'
import { ScrollReveal } from './ScrollReveal'
import { WhatsAppIcon } from './WhatsAppIcon'

type FooterProps = {
  language: Language
}

const footerCopy = {
  en: {
    email: 'Send email',
    github: 'Open GitHub profile',
    linkedin: 'Open LinkedIn profile',
    rights: 'All rights reserved.',
    whatsapp: 'Chat on WhatsApp',
  },
  pt: {
    email: 'Enviar e-mail',
    github: 'Abrir perfil no GitHub',
    linkedin: 'Abrir perfil no LinkedIn',
    rights: 'Todos os direitos reservados.',
    whatsapp: 'Conversar pelo WhatsApp',
  },
} as const

const footerLinks = [
  {
    ariaLabelKey: 'linkedin',
    href: profile.links.linkedin,
    isExternal: true,
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 9.4H3.8V20h2.7V9.4ZM5.1 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.1 4Zm8.2 8.3c1.5 0 2.2 1 2.2 2.6V20h2.7v-5.6c0-3-1.6-4.7-4.1-4.7-1.7 0-2.7.9-3.1 1.7h-.1V9.4H8.4V20h2.7v-5.4c0-1.4.8-2.3 2.2-2.3Z" />
      </svg>
    ),
  },
  {
    ariaLabelKey: 'github',
    href: profile.links.github,
    isExternal: true,
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          d="M12 2.8a9.7 9.7 0 0 0-3.1 18.9c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10 10 0 0 1 5.3 0c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.8 0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A9.7 9.7 0 0 0 12 2.8Z"
          fillRule="evenodd"
        />
      </svg>
    ),
  },
  {
    ariaLabelKey: 'email',
    href: `mailto:${profile.email}`,
    isExternal: false,
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
        <path
          d="M4.5 7.5 12 13l7.5-5.5M6 19h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
] as const

export function Footer({ language }: FooterProps) {
  const copy = footerCopy[language]
  const links = [
    ...footerLinks.map((link) => ({
      ...link,
      ariaLabel: copy[link.ariaLabelKey],
    })),
    {
      ariaLabel: copy.whatsapp,
      href: getWhatsAppUrl(language),
      isExternal: true,
      icon: <WhatsAppIcon />,
    },
  ] as const

  return (
    <footer className="relative overflow-hidden border-t border-violet/10 py-5 dark:border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/26 to-transparent dark:via-soft-lavender/22" />
      <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-44 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(108,43,217,0.1)_0%,rgba(108,43,217,0.045)_38%,transparent_72%)] blur-2xl [mask-image:radial-gradient(circle,black_0%,transparent_72%)] dark:bg-[radial-gradient(circle,rgba(185,167,255,0.09)_0%,rgba(185,167,255,0.035)_40%,transparent_74%)]" />

      <ScrollReveal
        className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left"
        direction="none"
      >
        <p className="grid max-w-[22rem] gap-0.5 text-sm font-medium leading-6 text-muted-text dark:text-slate-400 sm:block sm:max-w-none">
          <span>{profile.name}</span>
          <span className="hidden sm:inline"> &middot; </span>
          <span>{profile.role}</span>
          <span className="hidden sm:inline"> &middot; </span>
          <span>&copy; 2026 &middot; {copy.rights}</span>
        </p>

        <ul className="flex items-center justify-center gap-2">
          {links.map((link) => (
            <li key={link.ariaLabel}>
              <a
                aria-label={link.ariaLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet/12 bg-[#fbfaff]/62 text-muted-text shadow-[0_8px_22px_rgba(31,17,71,0.035)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet/26 hover:bg-violet/10 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 dark:hover:border-soft-lavender/22 dark:hover:bg-soft-lavender/10 dark:hover:text-soft-lavender sm:h-9 sm:w-9"
                href={link.href}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                target={link.isExternal ? '_blank' : undefined}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </footer>
  )
}
