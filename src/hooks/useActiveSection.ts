import { useEffect, useState } from 'react'

export function useActiveSection(
  sectionIds: readonly string[],
  fallbackHeaderOffset = 96,
) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
  const sectionIdsKey = sectionIds.join('|')

  useEffect(() => {
    let frameId: number | null = null
    let activationOffset = fallbackHeaderOffset + 140
    let trackedSections: { id: string; top: number }[] = []

    function recalculateTrackedSections() {
      const header = document.querySelector('header')
      const headerHeight =
        header instanceof HTMLElement
          ? header.getBoundingClientRect().height
          : fallbackHeaderOffset
      const readingOffset = Math.min(180, Math.max(120, window.innerHeight * 0.22))

      activationOffset = headerHeight + readingOffset
      trackedSections = sectionIdsKey
        .split('|')
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .map((section) => ({
          id: section.id,
          top: section.offsetTop,
        }))
    }

    function updateActiveSection() {
      frameId = null

      if (!trackedSections.length) {
        return
      }

      const scrollTop = window.scrollY

      if (scrollTop <= 8) {
        setActiveSection(trackedSections[0].id)
        return
      }

      const documentHeight = document.documentElement.scrollHeight
      const viewportBottom = scrollTop + window.innerHeight

      if (viewportBottom >= documentHeight - 8) {
        setActiveSection(trackedSections[trackedSections.length - 1].id)
        return
      }

      const scrollPosition = scrollTop + activationOffset
      let currentSection = trackedSections[0].id

      for (const section of trackedSections) {
        if (section.top <= scrollPosition) {
          currentSection = section.id
        } else {
          break
        }
      }

      setActiveSection(currentSection)
    }

    function requestUpdateActiveSection(recalculate = false) {
      if (recalculate) {
        recalculateTrackedSections()
      }

      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    requestUpdateActiveSection(true)
    function handleScroll() {
      requestUpdateActiveSection()
    }

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    window.addEventListener('resize', handleViewportChange)
    window.addEventListener('hashchange', handleViewportChange)
    window.addEventListener('load', handleViewportChange)

    function handleViewportChange() {
      requestUpdateActiveSection(true)
    }

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('hashchange', handleViewportChange)
      window.removeEventListener('load', handleViewportChange)
    }
  }, [fallbackHeaderOffset, sectionIdsKey])

  return activeSection
}
