import {
  createElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from 'react'

type TransitionMode = 'typewriter' | 'fade'

type LanguageTransitionTextProps = {
  ariaLive?: 'off' | 'polite'
  as?: ElementType
  className?: string
  delay?: number
  deleteSpeed?: number
  minHeight?: string
  mode?: TransitionMode
  reserveText?: string | string[]
  showCursor?: boolean
  speed?: number
  text: string
}

function sleep(duration: number) {
  return new Promise((resolve) => window.setTimeout(resolve, duration))
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    function handleChange(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

function getReserveText(text: string, reserveText?: string | string[]) {
  const candidates = [text, ...(Array.isArray(reserveText) ? reserveText : [])]

  if (typeof reserveText === 'string') {
    candidates.push(reserveText)
  }

  return candidates.reduce((longest, candidate) =>
    candidate.length > longest.length ? candidate : longest,
  )
}

export function LanguageTransitionText({
  ariaLive = 'off',
  as = 'span',
  className = '',
  delay = 35,
  deleteSpeed = 7,
  minHeight,
  mode = 'typewriter',
  reserveText,
  showCursor = false,
  speed = 16,
  text,
}: LanguageTransitionTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)
  const latestTextRef = useRef(text)
  const displayTextRef = useRef(text)
  const reservedText = useMemo(
    () => getReserveText(text, reserveText),
    [reserveText, text],
  )

  useEffect(() => {
    displayTextRef.current = displayText
  }, [displayText])

  useEffect(() => {
    latestTextRef.current = text

    if (displayTextRef.current === text) {
      return
    }

    let cancelled = false

    async function runTransition() {
      if (prefersReducedMotion) {
        await sleep(0)
        if (cancelled) return
        displayTextRef.current = text
        setDisplayText(text)
        setIsAnimating(false)
        return
      }

      setIsAnimating(true)

      if (mode === 'fade') {
        await sleep(delay)
        if (cancelled) return
        setDisplayText(text)
        await sleep(120)
        if (!cancelled) setIsAnimating(false)
        return
      }

      let current = displayTextRef.current

      await sleep(delay)

      while (!cancelled && current.length > 0) {
        current = current.slice(0, -1)
        displayTextRef.current = current
        setDisplayText(current)
        await sleep(deleteSpeed)
      }

      let next = ''

      for (const character of text) {
        if (cancelled) return
        next += character
        displayTextRef.current = next
        setDisplayText(next)
        await sleep(speed)
      }

      if (!cancelled && latestTextRef.current === text) {
        setIsAnimating(false)
      }
    }

    runTransition()

    return () => {
      cancelled = true
    }
  }, [delay, deleteSpeed, mode, prefersReducedMotion, speed, text])

  const content: ReactNode = (
    <span
      className="relative inline-grid max-w-full align-baseline"
      style={minHeight ? { minHeight } : undefined}
    >
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-pre-wrap"
      >
        {reservedText}
      </span>
      <span
        className={`col-start-1 row-start-1 whitespace-pre-wrap transition duration-200 ease-out ${
          mode === 'fade' && isAnimating
            ? 'translate-y-1 opacity-0 blur-[2px]'
            : 'translate-y-0 opacity-100 blur-0'
        }`}
      >
        {displayText}
        {showCursor &&
        isAnimating &&
        mode === 'typewriter' &&
        !prefersReducedMotion ? (
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[0.9em] w-px translate-y-[0.12em] bg-violet align-baseline dark:bg-soft-lavender"
          />
        ) : null}
      </span>
    </span>
  )

  return createElement(
    as,
    {
      'aria-live': ariaLive === 'off' ? undefined : ariaLive,
      className,
    },
    content,
  )
}
