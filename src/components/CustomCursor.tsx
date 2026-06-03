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

      const target = event.target
      setCursorVisible(true)
      setCursorInteractive(
        target instanceof Element && Boolean(target.closest(interactiveSelector)),
      )
    }

    function handleMouseLeave() {
      setCursorVisible(false)
    }

    function handleMouseEnter() {
      setCursorVisible(true)
    }

    function handlePointerDown() {
      cursorNode.classList.add('custom-cursor--pressed')
      dotNode.classList.add('custom-cursor-dot--pressed')
    }

    function handlePointerUp() {
      cursorNode.classList.remove('custom-cursor--pressed')
      dotNode.classList.remove('custom-cursor-dot--pressed')
    }

    setCursorVisible(false)
    animationFrame = window.requestAnimationFrame(animateCursor)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
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
