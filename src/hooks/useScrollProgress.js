import { useState, useEffect } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement
      const scrollFraction = h.scrollTop / (h.scrollHeight - h.clientHeight)
      setProgress(scrollFraction)
      setScrolled(h.scrollTop > 20)
      setShowTop(h.scrollTop > 600)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { progress, scrolled, showTop }
}
