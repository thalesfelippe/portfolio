import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui'

type Theme = 'light' | 'dark'

type SiteHeaderProps = {
  language: Language
  onLanguageChange: () => void
  onThemeChange: () => void
  theme: Theme
}

export function SiteHeader({
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}: SiteHeaderProps) {
  const t = translations[language]

  return (
    <header className="flex flex-col gap-4 border-b border-violet/10 py-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
      <a
        className="text-base font-semibold text-dark-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet dark:text-white"
        href={`https://${profile.domain}`}
      >
        {profile.domain}
      </a>
      <nav
        aria-label="Portfolio controls"
        className="flex flex-wrap items-center gap-2"
      >
        <LanguageToggle
          language={language}
          onLanguageChange={onLanguageChange}
        />
        <ThemeToggle
          language={language}
          onThemeChange={onThemeChange}
          theme={theme}
        />
        <Button
          className="h-10 px-4"
          href={profile.links.linkedin}
          rel="noreferrer"
          target="_blank"
        >
          {t.resume}
        </Button>
      </nav>
    </header>
  )
}
