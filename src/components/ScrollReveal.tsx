import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react'

type RevealDirection = 'down' | 'left' | 'none' | 'right' | 'scale' | 'up'

type ScrollRevealProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'aside' | 'div' | 'footer' | 'li' | 'section' | 'span'
  children: ReactNode
  delay?: number
  direction?: RevealDirection
  once?: boolean
  trigger?: boolean
}

type RevealOptions = {
  once: boolean
}

const revealElements = new WeakMap<Element, RevealOptions>()
let revealObserver: IntersectionObserver | null = null

function prefersReducedMotion() {
  if (typeof window === 'undefined') {
    return true
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getRevealObserver() {
  if (revealObserver) {
    return revealObserver
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        entry.target.classList.add('is-visible')

        const options = revealElements.get(entry.target)
        if (options?.once ?? true) {
          revealObserver?.unobserve(entry.target)
          revealElements.delete(entry.target)
        }
      })
    },
    {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    },
  )

  return revealObserver
}

export function ScrollReveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  style,
  trigger,
  ...props
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null)
  const setElementRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node
  }, [])
  const revealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const hasExplicitTrigger = typeof trigger === 'boolean'

    if (
      prefersReducedMotion() ||
      typeof IntersectionObserver === 'undefined'
    ) {
      element.classList.add('is-visible')
      return
    }

    if (hasExplicitTrigger) {
      if (trigger) {
        element.classList.add('is-visible')
      } else if (!once) {
        element.classList.remove('is-visible')
      }

      return
    }

    revealElements.set(element, { once })
    getRevealObserver().observe(element)

    return () => {
      getRevealObserver().unobserve(element)
      revealElements.delete(element)
    }
  }, [once, trigger])

  const revealProps = {
    ...props,
    className: `scroll-reveal ${className}`.trim(),
    'data-reveal-direction': direction,
    style: revealStyle,
  }

  if (as === 'article') {
    return (
      <article {...revealProps} ref={setElementRef}>
        {children}
      </article>
    )
  }

  if (as === 'aside') {
    return (
      <aside {...revealProps} ref={setElementRef}>
        {children}
      </aside>
    )
  }

  if (as === 'footer') {
    return (
      <footer {...revealProps} ref={setElementRef}>
        {children}
      </footer>
    )
  }

  if (as === 'li') {
    return (
      <li {...revealProps} ref={setElementRef}>
        {children}
      </li>
    )
  }

  if (as === 'section') {
    return (
      <section {...revealProps} ref={setElementRef}>
        {children}
      </section>
    )
  }

  if (as === 'span') {
    return (
      <span {...revealProps} ref={setElementRef}>
        {children}
      </span>
    )
  }

  return (
    <div {...revealProps} ref={setElementRef}>
      {children}
    </div>
  )
}
