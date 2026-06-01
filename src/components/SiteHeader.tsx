import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import type { Language } from '../i18n/translations'
import { translations } from '../i18n/translations'
import { LanguageToggle } from './LanguageToggle'
import { LanguageTransitionText } from './LanguageTransitionText'
import { ThemeToggle } from './ThemeToggle'
import { Button, Container } from './ui'

type Theme = 'light' | 'dark'

type SiteHeaderProps = {
  language: Language
  onLanguageChange: () => void
  onThemeChange: () => void
  theme: Theme
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M5 7h14M5 12h14M5 17h14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 4v10m0 0 4-4m-4 4-4-4M5 20h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

export function SiteHeader({
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const t = translations[language]
  const navItems = [
    {
      href: '#home',
      label: t.navHome,
      reserveText: [translations.en.navHome, translations.pt.navHome],
    },
    {
      href: '#about',
      label: t.navAbout,
      reserveText: [translations.en.navAbout, translations.pt.navAbout],
    },
    {
      href: '#experience',
      label: t.navExperience,
      reserveText: [
        translations.en.navExperience,
        translations.pt.navExperience,
      ],
    },
    {
      href: '#projects',
      label: t.navProjects,
      reserveText: [translations.en.navProjects, translations.pt.navProjects],
    },
    {
      href: '#stack',
      label: t.navStack,
      reserveText: [translations.en.navStack, translations.pt.navStack],
    },
    {
      href: '#contact',
      label: t.navContact,
      reserveText: [translations.en.navContact, translations.pt.navContact],
    },
  ]

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full py-4 transition duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-b border-violet/10 bg-light-bg/72 shadow-[0_12px_40px_rgba(31,17,71,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-[#070a18]/72'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between gap-5">
        <a
          className="group inline-flex min-w-0 items-center gap-3 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
          href="#home"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-gradient-to-br from-soft-lavender to-violet text-sm font-bold text-white shadow-[0_8px_18px_rgba(108,43,217,0.16)] transition group-hover:-translate-y-0.5">
            TF
          </span>
          <span className="truncate text-sm font-semibold text-dark-text dark:text-white sm:text-base">
            {profile.name}
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <a
              className="rounded-lg py-1 text-sm font-medium text-muted-text transition hover:-translate-y-0.5 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet dark:text-slate-300 dark:hover:text-white"
              href={item.href}
              key={item.href}
            >
              <LanguageTransitionText
                reserveText={item.reserveText}
                speed={11}
                text={item.label}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
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
              className="h-8 gap-1.5 rounded-[10px] px-3 py-0 text-xs"
              disabled={!profile.links.resume}
              title={profile.links.resume ? undefined : t.resumeUnavailable}
              type="button"
            >
              <DownloadIcon />
              {t.resume}
            </Button>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-violet/15 bg-white/55 text-dark-text shadow-[0_8px_24px_rgba(31,17,71,0.05)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet/30 hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-soft-lavender/25 dark:hover:bg-white/12 lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <Container className="lg:hidden">
          <div
            className="mt-3 grid gap-3 rounded-2xl border border-violet/10 bg-white/80 p-3 shadow-[0_18px_60px_rgba(31,17,71,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-deep-navy/92"
            id="mobile-navigation"
          >
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {navItems.map((item) => (
                <a
                  className="rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-text transition hover:bg-violet/10 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  href={item.href}
                  key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                <LanguageTransitionText
                  reserveText={item.reserveText}
                  speed={11}
                  text={item.label}
                />
              </a>
            ))}
            </nav>
            <div className="flex flex-wrap gap-2 border-t border-violet/10 pt-3 dark:border-white/10 sm:hidden">
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
                className="h-8 gap-1.5 rounded-[10px] px-3 py-0 text-xs"
                disabled={!profile.links.resume}
                title={profile.links.resume ? undefined : t.resumeUnavailable}
                type="button"
              >
                <DownloadIcon />
                {t.resume}
              </Button>
            </div>
          </div>
        </Container>
      ) : null}
    </header>
  )
}
