import { useEffect, useState } from 'react'

export function useActiveSection(
  sectionIds: readonly string[],
  fallbackHeaderOffset = 96,
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
  const sectionIdsKey = sectionIds.join('|')

  useEffect(() => {
    let frameId: number | null = null

    function getTrackedSections() {
      return sectionIdsKey
        .split('|')
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
    }

    function getActivationOffset() {
      const header = document.querySelector('header')
      const headerHeight =
        header instanceof HTMLElement
          ? header.getBoundingClientRect().height
          : fallbackHeaderOffset
      const readingOffset = Math.min(180, Math.max(120, window.innerHeight * 0.22))

      return headerHeight + readingOffset
    }

    function updateActiveSection() {
      frameId = null

      const sections = getTrackedSections()

      if (!sections.length) {
        return
      }

      const scrollTop = window.scrollY

      if (scrollTop <= 8) {
        setActiveSection(sections[0].id)
        return
      }

      const documentHeight = document.documentElement.scrollHeight
      const viewportBottom = scrollTop + window.innerHeight

      if (viewportBottom >= documentHeight - 8) {
        setActiveSection(sections[sections.length - 1].id)
        return
      }

      const scrollPosition = scrollTop + getActivationOffset()
      let currentSection = sections[0].id

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id
        } else {
          break
        }
      }

      setActiveSection(currentSection)
    }

    function requestUpdateActiveSection() {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    requestUpdateActiveSection()
    window.addEventListener('scroll', requestUpdateActiveSection, {
      passive: true,
    })
    window.addEventListener('resize', requestUpdateActiveSection)
    window.addEventListener('hashchange', requestUpdateActiveSection)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', requestUpdateActiveSection)
      window.removeEventListener('resize', requestUpdateActiveSection)
      window.removeEventListener('hashchange', requestUpdateActiveSection)
    }
  }, [fallbackHeaderOffset, sectionIdsKey])

  return activeSection
}
