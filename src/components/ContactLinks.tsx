import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'

type ContactLinksProps = {
  language: Language
}

const contactItems = [
  {
    key: 'github',
    labelKey: 'github',
    href: profile.links.github,
    value: 'github.com/thalesfelippe',
  },
  {
    key: 'linkedin',
    labelKey: 'linkedin',
    href: profile.links.linkedin,
    value: 'linkedin.com/in/thales-felippe',
  },
  {
    key: 'email',
    labelKey: 'email',
    href: `mailto:${profile.email}`,
    value: profile.email,
  },
] as const

export function ContactLinks({ language }: ContactLinksProps) {
  const t = translations[language]

  return (
    <section aria-labelledby="contact-title" className="grid gap-4">
      <h2
        id="contact-title"
        className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
      >
        {t.contactTitle}
      </h2>
      <ul className="grid gap-3 sm:grid-cols-3">
        {contactItems.map((item) => (
          <li key={item.key}>
            <a
              className="block h-full rounded-lg border border-slate-200 bg-white/80 p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700 dark:focus-visible:outline-white"
              href={item.href}
              rel="noreferrer"
              target={item.key === 'email' ? undefined : '_blank'}
            >
              <span className="block font-medium text-slate-950 dark:text-white">
                {t[item.labelKey]}
              </span>
              <span className="mt-1 block break-words text-slate-600 dark:text-slate-300">
                {item.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
