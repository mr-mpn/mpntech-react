import { useState, useRef, useCallback } from 'react'

export default function Header({ scrolled }) {
  const [navOpen, setNavOpen] = useState(false)
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  const handleMouseEnter = useCallback((e) => {
    setCursor({ left: e.currentTarget.offsetLeft, width: e.currentTarget.offsetWidth, opacity: 1 })
  }, [])

  const handleNavLeave = useCallback(() => {
    setCursor(c => ({ ...c, opacity: 0 }))
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#tech', label: 'Tech' },
    { href: '#projects', label: 'Projects' },
    { href: '#youtube', label: 'Video' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="logo" aria-label="mpntech Home">mpntech</a>

      <nav id="mainNav" ref={navRef} className={navOpen ? 'open' : ''} onMouseLeave={handleNavLeave}>
        {links.map(l => (
          <a key={l.href} href={l.href} onMouseEnter={handleMouseEnter} onClick={() => setNavOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="nav-cursor" style={{ left: cursor.left, width: cursor.width, opacity: cursor.opacity }} />
      </nav>

      <button
        className={`nav-toggle${navOpen ? ' open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}
