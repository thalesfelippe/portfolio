import { useEffect, useMemo, useState } from 'react'
import { ContactLinks } from './components/ContactLinks'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { SiteHeader } from './components/SiteHeader'
import { Card, SectionTitle } from './components/ui'
import {
  defaultLanguage,
  getSavedLanguage,
  htmlLanguageByCode,
  languageStorageKey,
  type Language,
} from './i18n/languages'
import { translations } from './i18n/translations'

type Theme = 'light' | 'dark'

const themeStorageKey = 'portfolio-theme'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function getSavedTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey)
  return isTheme(savedTheme) ? savedTheme : null
}

function App() {
  const [language, setLanguage] = useState<Language>(
    () => getSavedLanguage() ?? defaultLanguage,
  )
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme)
  const [themeOverride, setThemeOverride] = useState<Theme | null>(getSavedTheme)
  const theme = themeOverride ?? systemTheme
  const t = useMemo(() => translations[language], [language])

  useEffect(() => {
    document.documentElement.lang = htmlLanguageByCode[language]
    document.documentElement.dataset.language = language
    window.localStorage.setItem(languageStorageKey, language)
  }, [language])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <Layout
      header={
        <SiteHeader
          language={language}
          onLanguageChange={() =>
            setLanguage((current) => (current === 'en' ? 'pt' : 'en'))
          }
          onThemeChange={() => {
            const nextTheme = theme === 'light' ? 'dark' : 'light'
            window.localStorage.setItem(themeStorageKey, nextTheme)
            setThemeOverride(nextTheme)
          }}
          theme={theme}
        />
      }
    >
      <Hero language={language} />
      <div className="grid gap-8 pb-12 lg:pb-16">
        <ContactLinks language={language} />
        <section aria-labelledby="status-title">
          <Card>
            <SectionTitle
              id="status-title"
              subtitle={t.statusText}
              title={t.statusTitle}
            />
          </Card>
        </section>
      </div>
    </Layout>
  )
}

export default App
