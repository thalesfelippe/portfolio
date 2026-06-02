import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'

type FooterProps = {
  language: Language
}

const footerCopy = {
  en: {
    rights: 'All rights reserved.',
  },
  pt: {
    rights: 'Todos os direitos reservados.',
  },
} as const

const footerLinks = [
  {
    ariaLabel: 'LinkedIn',
    href: profile.links.linkedin,
    icon: (
      <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 9.4H3.8V20h2.7V9.4ZM5.1 4a1.6 1.6 0 1 0 0 3.2A1.6 1.6 0 0 0 5.1 4Zm8.2 8.3c1.5 0 2.2 1 2.2 2.6V20h2.7v-5.6c0-3-1.6-4.7-4.1-4.7-1.7 0-2.7.9-3.1 1.7h-.1V9.4H8.4V20h2.7v-5.4c0-1.4.8-2.3 2.2-2.3Z" />
      </svg>
    ),
  },
  {
    ariaLabel: 'GitHub',
    href: profile.links.github,
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
    ariaLabel: 'Email',
    href: `mailto:${profile.email}`,
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

  return (
    <footer className="relative overflow-hidden border-t border-violet/10 py-5 dark:border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/26 to-transparent dark:via-soft-lavender/22" />
      <div className="pointer-events-none absolute right-8 top-0 h-20 w-56 rounded-full bg-violet/8 blur-3xl dark:bg-soft-lavender/8" />

      <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="max-w-[22rem] text-sm font-medium leading-6 text-muted-text dark:text-slate-400 sm:max-w-none">
          {profile.name} &middot; {profile.role} &middot; &copy; 2026 &middot;{' '}
          {copy.rights}
        </p>

        <ul className="flex items-center justify-center gap-2">
          {footerLinks.map((link) => (
            <li key={link.ariaLabel}>
              <a
                aria-label={link.ariaLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-violet/12 bg-white/55 text-muted-text shadow-[0_8px_24px_rgba(31,17,71,0.04)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet/26 hover:bg-violet/10 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.055] dark:text-slate-300 dark:hover:border-soft-lavender/22 dark:hover:bg-soft-lavender/10 dark:hover:text-soft-lavender sm:h-9 sm:w-9"
                href={link.href}
                rel={link.ariaLabel === 'Email' ? undefined : 'noreferrer'}
                target={link.ariaLabel === 'Email' ? undefined : '_blank'}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
