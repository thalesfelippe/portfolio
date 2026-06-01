import { useEffect, useMemo, useState } from 'react'
import { ContactLinks } from './components/ContactLinks'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { SiteHeader } from './components/SiteHeader'
import { Card, SectionTitle } from './components/ui'
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
    <Layout
      header={
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
