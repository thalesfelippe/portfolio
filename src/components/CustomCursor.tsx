import { useEffect, useRef, useState } from 'react'

const interactiveSelector = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'summary',
  '[data-cursor="interactive"]',
].join(',')

function canUseCustomCursor() {
  if (typeof window === 'undefined') {
    return false
  }

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

  return finePointer.matches && !reducedMotion.matches
}

export function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(canUseCustomCursor)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const dotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function syncCursorAvailability() {
      setIsEnabled(finePointer.matches && !reducedMotion.matches)
    }

    finePointer.addEventListener('change', syncCursorAvailability)
    reducedMotion.addEventListener('change', syncCursorAvailability)
    syncCursorAvailability()

    return () => {
      finePointer.removeEventListener('change', syncCursorAvailability)
      reducedMotion.removeEventListener('change', syncCursorAvailability)
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) {
      document.documentElement.classList.remove('custom-cursor-active')
      return
    }

    const cursorElement = cursorRef.current
    const dotElement = dotRef.current

    if (!cursorElement || !dotElement) {
      return
    }

    const cursorNode: HTMLDivElement = cursorElement
    const dotNode: HTMLDivElement = dotElement

    document.documentElement.classList.add('custom-cursor-active')

    let animationFrame = 0
    let currentX = window.innerWidth / 2
    let currentY = window.innerHeight / 2
    let targetX = currentX
    let targetY = currentY
    let isInteractiveTarget = false
    let isScrollbarInteraction = false
    let contentClientWidth = document.documentElement.clientWidth

    function syncContentClientWidth() {
      contentClientWidth = document.documentElement.clientWidth
    }

    function isInScrollbarArea(clientX: number) {
      const scrollbarWidth = window.innerWidth - contentClientWidth

      return scrollbarWidth > 0 && clientX >= contentClientWidth
    }

    function setCursorVisible(isVisible: boolean) {
      cursorNode.classList.toggle('custom-cursor--hidden', !isVisible)
      dotNode.classList.toggle('custom-cursor-dot--hidden', !isVisible)
    }

    function setCursorInteractive(isInteractive: boolean) {
      cursorNode.classList.toggle(
        'custom-cursor--interactive',
        isInteractive,
      )
      dotNode.classList.toggle(
        'custom-cursor-dot--interactive',
        isInteractive,
      )
    }

    function setAutoScrollState(isAutoScroll: boolean) {
      cursorNode.classList.toggle(
        'custom-cursor--auto-scroll',
        isAutoScroll,
      )
      dotNode.classList.toggle(
        'custom-cursor-dot--auto-scroll',
        isAutoScroll,
      )
    }

    function setNativeCursorFallback(isNative: boolean) {
      document.documentElement.classList.toggle(
        'custom-cursor-native',
        isNative,
      )
    }

    function resetPointerStates() {
      isScrollbarInteraction = false
      cursorNode.classList.remove('custom-cursor--pressed')
      dotNode.classList.remove('custom-cursor-dot--pressed')
      setAutoScrollState(false)
      setNativeCursorFallback(false)
    }

    function animateCursor() {
      currentX += (targetX - currentX) * 0.18
      currentY += (targetY - currentY) * 0.18

      cursorNode.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`
      dotNode.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate3d(-50%, -50%, 0)`

      animationFrame = window.requestAnimationFrame(animateCursor)
    }

    function handleMouseMove(event: MouseEvent) {
      targetX = event.clientX
      targetY = event.clientY

      const isOverScrollbar = isInScrollbarArea(event.clientX)

      if (isOverScrollbar || isScrollbarInteraction) {
        setCursorVisible(false)
        setCursorInteractive(false)
        setNativeCursorFallback(true)
        return
      }

      const target = event.target
      const nextIsInteractive =
        target instanceof Element && Boolean(target.closest(interactiveSelector))

      setCursorVisible(true)
      setNativeCursorFallback(false)

      if (nextIsInteractive !== isInteractiveTarget) {
        isInteractiveTarget = nextIsInteractive
        setCursorInteractive(nextIsInteractive)
      }
    }

    function handleMouseLeave() {
      isInteractiveTarget = false
      resetPointerStates()
      setCursorVisible(false)
      setCursorInteractive(false)
    }

    function handleMouseEnter() {
      setCursorVisible(true)
    }

    function handlePointerDown(event: PointerEvent) {
      if (isInScrollbarArea(event.clientX)) {
        isScrollbarInteraction = true
        setCursorVisible(false)
        setCursorInteractive(false)
        setAutoScrollState(false)
        setNativeCursorFallback(true)
        return
      }

      const target = event.target
      const isInteractiveMiddleClick =
        event.button === 1 &&
        target instanceof Element &&
        Boolean(target.closest(interactiveSelector))

      cursorNode.classList.add('custom-cursor--pressed')
      dotNode.classList.add('custom-cursor-dot--pressed')

      if (event.button === 1 && !isInteractiveMiddleClick) {
        setAutoScrollState(true)
      }
    }

    function handlePointerUp(event?: PointerEvent) {
      if (event instanceof PointerEvent && isInScrollbarArea(event.clientX)) {
        isScrollbarInteraction = false
        cursorNode.classList.remove('custom-cursor--pressed')
        dotNode.classList.remove('custom-cursor-dot--pressed')
        setAutoScrollState(false)
        setCursorVisible(false)
        setNativeCursorFallback(true)
        return
      }

      resetPointerStates()
      if (event instanceof PointerEvent) {
        setCursorVisible(true)
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        resetPointerStates()
      }
    }

    function handleVisibilityChange() {
      if (document.visibilityState === 'hidden') {
        resetPointerStates()
        setCursorVisible(false)
      }
    }

    setCursorVisible(false)
    syncContentClientWidth()
    animationFrame = window.requestAnimationFrame(animateCursor)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)
    window.addEventListener('blur', resetPointerStates)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', syncContentClientWidth)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      document.documentElement.classList.remove('custom-cursor-native')
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
      window.removeEventListener('blur', resetPointerStates)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', syncContentClientWidth)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isEnabled])

  if (!isEnabled) {
    return null
  }

  return (
    <>
      <div aria-hidden="true" className="custom-cursor" ref={cursorRef} />
      <div aria-hidden="true" className="custom-cursor-dot" ref={dotRef} />
    </>
  )
}
