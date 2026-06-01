import { useEffect, useMemo, useState } from 'react'
import { ContactLinks } from './components/ContactLinks'
import { Hero } from './components/Hero'
import { SiteHeader } from './components/SiteHeader'
import type { Language } from './i18n/translations'
import { translations } from './i18n/translations'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [language, setLanguage] = useState<Language>('pt')
  const [theme, setTheme] = useState<Theme>(getInitialTheme)
  const t = useMemo(() => translations[language], [language])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-svh bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
      <div className="mx-auto flex min-h-svh w-full max-w-6xl flex-col px-5 sm:px-8">
        <SiteHeader
          language={language}
          onLanguageChange={() =>
            setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
          }
          onThemeChange={() =>
            setTheme((current) => (current === 'light' ? 'dark' : 'light'))
          }
          theme={theme}
        />
        <main className="flex flex-1 flex-col justify-center">
          <Hero language={language} />
          <div className="grid gap-8 pb-12">
            <ContactLinks language={language} />
            <section
              aria-labelledby="status-title"
              className="rounded-lg border border-slate-200 bg-white/80 p-5 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <h2
                id="status-title"
                className="text-base font-semibold text-slate-950 dark:text-white"
              >
                {t.statusTitle}
              </h2>
              <p className="mt-2 leading-6">{t.statusText}</p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
