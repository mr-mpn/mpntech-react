import { useEffect, useRef } from 'react'

export function useVisibility(childSelector) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('visible')
          io.unobserve(en.target)
        }
      })
    }, { threshold: 0.1 })

    if (childSelector) {
      el.querySelectorAll(childSelector).forEach(child => io.observe(child))
    }
    io.observe(el)

    return () => io.disconnect()
  }, [childSelector])

  return ref
}
