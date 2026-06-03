import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { CustomCursor } from './components/CustomCursor'
import { Hero } from './components/Hero'
import { Layout } from './components/Layout'
import { PortfolioLoader } from './components/PortfolioLoader'
import { SiteHeader } from './components/SiteHeader'
import {
  defaultLanguage,
  getSavedLanguage,
  htmlLanguageByCode,
  languageStorageKey,
  type Language,
} from './i18n/languages'

type Theme = 'light' | 'dark'

const themeStorageKey = 'portfolio-theme'
const About = lazy(() =>
  import('./components/About').then((module) => ({ default: module.About })),
)
const ContactLinks = lazy(() =>
  import('./components/ContactLinks').then((module) => ({
    default: module.ContactLinks,
  })),
)
const Experience = lazy(() =>
  import('./components/Experience').then((module) => ({
    default: module.Experience,
  })),
)
const Footer = lazy(() =>
  import('./components/Footer').then((module) => ({ default: module.Footer })),
)
const Projects = lazy(() =>
  import('./components/Projects').then((module) => ({
    default: module.Projects,
  })),
)
const StackArea = lazy(() =>
  import('./components/StackArea').then((module) => ({
    default: module.StackArea,
  })),
)

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

function shouldSkipLoader() {
  if (typeof window === 'undefined') {
    return false
  }

  const searchParams = new URLSearchParams(window.location.search)
  return (
    searchParams.get('no-loader') === '1' ||
    window.localStorage.getItem('portfolio-disable-loader') === 'true'
  )
}

function isMobileViewport() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(max-width: 640px)').matches
}

function App() {
  const [showLoader, setShowLoader] = useState(() => !shouldSkipLoader())
  const [hasIntroFinished, setHasIntroFinished] = useState(shouldSkipLoader)
  const [showDeferredSections, setShowDeferredSections] = useState(false)
  const [isMobile, setIsMobile] = useState(isMobileViewport)
  const [language, setLanguage] = useState<Language>(
    () => getSavedLanguage() ?? defaultLanguage,
  )
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme)
  const [themeOverride, setThemeOverride] = useState<Theme | null>(getSavedTheme)
  const pendingHashRef = useRef<string | null>(null)
  const theme = themeOverride ?? systemTheme
  const isHeroIntroReady = isMobile || hasIntroFinished || !showLoader

  const handleLoaderFinish = useCallback(() => {
    setHasIntroFinished(true)
    setShowLoader(false)
  }, [])

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

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 640px)')

    function handleMobileChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches)
    }

    mobileQuery.addEventListener('change', handleMobileChange)

    return () => {
      mobileQuery.removeEventListener('change', handleMobileChange)
    }
  }, [])

  useEffect(() => {
    let timeoutId = 0
    let idleId = 0

    function mountDeferredSections() {
      setShowDeferredSections(true)
    }

    if (typeof window.requestIdleCallback === 'function') {
      idleId = window.requestIdleCallback(mountDeferredSections, {
        timeout: isMobile ? 1200 : 700,
      })
    } else {
      timeoutId = globalThis.setTimeout(
        mountDeferredSections,
        isMobile ? 900 : 350,
      )
    }

    return () => {
      if (idleId) {
        window.cancelIdleCallback(idleId)
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [isMobile])

  useEffect(() => {
    if (!showDeferredSections) {
      return
    }

    window.requestAnimationFrame(() => {
      window.dispatchEvent(new Event('portfolio:sections-mounted'))

      const pendingHash = pendingHashRef.current
      if (!pendingHash) {
        return
      }

      pendingHashRef.current = null
      document
        .getElementById(pendingHash.slice(1))
        ?.scrollIntoView({ behavior: isMobile ? 'auto' : 'smooth' })
    })
  }, [isMobile, showDeferredSections])

  useEffect(() => {
    if (showDeferredSections) {
      return
    }

    function handleAnchorClick(event: MouseEvent) {
      const target = event.target

      if (!(target instanceof Element)) {
        return
      }

      const link = target.closest('a[href^="#"]')

      if (!(link instanceof HTMLAnchorElement) || link.hash === '#home') {
        return
      }

      event.preventDefault()
      pendingHashRef.current = link.hash
      setShowDeferredSections(true)
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [showDeferredSections])

  return (
    <>
      <CustomCursor />

      {showLoader ? (
        <PortfolioLoader
          language={language}
          onFinish={handleLoaderFinish}
          theme={theme}
        />
      ) : null}

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
        <Hero introReady={isHeroIntroReady} language={language} />
        {showDeferredSections ? (
          <Suspense fallback={null}>
            <div className="grid gap-8 pb-12 lg:pb-16">
              <About language={language} />
              <Experience language={language} />
              <Projects language={language} />
              <StackArea language={language} />
              <ContactLinks language={language} />
              <Footer language={language} />
            </div>
          </Suspense>
        ) : null}
      </Layout>
    </>
  )
}

export default App
