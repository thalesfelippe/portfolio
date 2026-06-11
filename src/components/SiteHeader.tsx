import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { coreTranslations } from '../i18n/core'
import { getPrimaryResumeHref } from '../i18n/resumeFiles'
import type { Language } from '../i18n/translations'
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

const navSectionIds = [
  'home',
  'about',
  'experience',
  'projects',
  'stack',
  'contact',
] as const

const navigationLabels = {
  en: {
    close: 'Close navigation',
    mobile: 'Mobile navigation',
    open: 'Open navigation',
    primary: 'Primary navigation',
  },
  pt: {
    close: 'Fechar navegação',
    mobile: 'Navegação mobile',
    open: 'Abrir navegação',
    primary: 'Navegação principal',
  },
} as const

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
  const headerRef = useRef<HTMLElement | null>(null)
  const activeSection = useActiveSection(navSectionIds)
  const t = coreTranslations[language]
  const navLabels = navigationLabels[language]
  const primaryResumeHref = getPrimaryResumeHref(language)
  const navItems = [
    {
      id: 'home',
      href: '#home',
      label: t.navHome,
      reserveText: [coreTranslations.en.navHome, coreTranslations.pt.navHome],
    },
    {
      id: 'about',
      href: '#about',
      label: t.navAbout,
      reserveText: [coreTranslations.en.navAbout, coreTranslations.pt.navAbout],
    },
    {
      id: 'experience',
      href: '#experience',
      label: t.navExperience,
      reserveText: [
        coreTranslations.en.navExperience,
        coreTranslations.pt.navExperience,
      ],
    },
    {
      id: 'projects',
      href: '#projects',
      label: t.navProjects,
      reserveText: [coreTranslations.en.navProjects, coreTranslations.pt.navProjects],
    },
    {
      id: 'stack',
      href: '#stack',
      label: t.navStack,
      reserveText: [coreTranslations.en.navStack, coreTranslations.pt.navStack],
    },
    {
      id: 'contact',
      href: '#contact',
      label: t.navContact,
      reserveText: [coreTranslations.en.navContact, coreTranslations.pt.navContact],
    },
  ]

  useEffect(() => {
    let frameId: number | null = null

    function handleScroll() {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null
        const nextIsScrolled = window.scrollY > 12
        setIsScrolled((current) =>
          current === nextIsScrolled ? current : nextIsScrolled,
        )
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target

      if (
        target instanceof Node &&
        headerRef.current &&
        !headerRef.current.contains(target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [isMenuOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 w-full py-3 transition duration-300 sm:py-4 ${
        isScrolled || isMenuOpen
          ? 'border-b border-violet/12 bg-[#f4f1fb]/82 shadow-[0_12px_36px_rgba(31,17,71,0.045)] backdrop-blur-xl dark:border-white/10 dark:bg-[#070a18]/72'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between gap-3 sm:gap-5">
        <a
          className="group inline-flex min-w-0 items-center gap-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet sm:gap-3"
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
          aria-label={navLabels.primary}
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                aria-current={isActive ? 'true' : undefined}
                className={`group relative rounded-lg px-1.5 py-1 text-sm font-medium transition hover:-translate-y-0.5 hover:text-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:hover:text-white ${
                  isActive
                    ? 'text-violet dark:text-soft-lavender'
                    : 'text-muted-text dark:text-slate-300'
                }`}
                href={item.href}
                key={item.href}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-1 -bottom-1 h-px rounded-full bg-gradient-to-r from-transparent via-violet to-transparent transition duration-300 dark:via-soft-lavender ${
                    isActive
                      ? 'scale-x-100 opacity-80'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-45'
                  }`}
                />
                <LanguageTransitionText
                  reserveText={item.reserveText}
                  speed={11}
                  text={item.label}
                />
              </a>
            )
          })}
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
              download
              href={primaryResumeHref}
            >
              <DownloadIcon />
              {t.resume}
            </Button>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? navLabels.close : navLabels.open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-violet/16 bg-[#fbfaff]/66 text-dark-text shadow-[0_8px_24px_rgba(31,17,71,0.045)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-violet/30 hover:bg-[#f7f3ff]/88 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet dark:border-white/10 dark:bg-white/[0.06] dark:text-white dark:hover:border-soft-lavender/25 dark:hover:bg-white/12 lg:hidden"
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
            className="mt-3 grid max-h-[calc(100svh-5rem)] gap-3 overflow-y-auto rounded-2xl border border-violet/12 bg-[#fbfaff]/90 p-3 shadow-[0_18px_54px_rgba(31,17,71,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-deep-navy/92"
            id="mobile-navigation"
          >
            <nav aria-label={navLabels.mobile} className="grid gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <a
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-xl px-3 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet motion-reduce:transition-none ${
                      isActive
                        ? 'bg-violet/10 text-violet dark:bg-soft-lavender/10 dark:text-soft-lavender'
                        : 'text-muted-text hover:bg-violet/10 hover:text-violet dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                    href={item.href}
                    key={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-1.5 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-violet transition dark:bg-soft-lavender ${
                        isActive ? 'opacity-75' : 'opacity-0'
                      }`}
                    />
                    <LanguageTransitionText
                      reserveText={item.reserveText}
                      speed={11}
                      text={item.label}
                    />
                  </a>
                )
              })}
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
                className="h-9 gap-1.5 rounded-[10px] px-3 py-0 text-xs"
                download
                href={primaryResumeHref}
                onClick={() => setIsMenuOpen(false)}
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
