import { useState } from 'react'

export default function Header({ scrolled }) {
  const [navOpen, setNavOpen] = useState(false)

  const navLinks = [
    { href: '#services', num: '01', label: 'Services' },
    { href: '#tech', num: '02', label: 'Tech' },
    { href: '#projects', num: '03', label: 'Projects' },
    { href: '#youtube', num: '04', label: 'Video' },
    { href: '#contact', num: '05', label: 'Contact' },
  ]

  const handleNavClick = () => {
    setNavOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 grid items-center gap-8 px-[clamp(1.25rem,3vw,3rem)] py-[1.1rem] border-b border-transparent transition-all duration-350
        ${scrolled ? 'bg-bone/82 backdrop-blur-[14px] backdrop-saturate-[140%] border-b-line py-3' : 'bg-transparent'}
        grid-cols-[auto_1fr_auto] max-[900px]:grid-cols-[auto_auto] max-[900px]:justify-between`}
    >
      {/* Logo */}
      <a href="#" className="inline-flex items-center gap-2 font-display font-bold text-[1.2rem] tracking-tight text-ink">
        <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,74,28,0.15)] shrink-0" />
        mpn<span className="text-accent">tech</span>
      </a>

      {/* Nav */}
      <nav
        className={`flex justify-center gap-[clamp(1rem,2.4vw,2.5rem)]
          max-[900px]:fixed max-[900px]:inset-0 max-[900px]:pt-24 max-[900px]:px-[clamp(1.25rem,3vw,3rem)] max-[900px]:pb-8
          max-[900px]:bg-bone max-[900px]:flex-col max-[900px]:justify-start max-[900px]:items-start max-[900px]:gap-0
          max-[900px]:z-90 max-[900px]:transition-transform max-[900px]:duration-[450ms]
          ${navOpen ? 'max-[900px]:translate-x-0' : 'max-[900px]:translate-x-full'}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavClick}
            className="group relative inline-flex items-baseline gap-1.5 font-body text-[0.92rem] font-medium text-ink py-1.5 transition-colors hover:text-accent
              max-[900px]:w-full max-[900px]:font-display max-[900px]:text-[clamp(2rem,7vw,2.8rem)] max-[900px]:font-medium max-[900px]:tracking-tight max-[900px]:py-4 max-[900px]:border-b max-[900px]:border-line"
          >
            <span className="font-mono text-[0.7rem] text-muted group-hover:text-accent transition-colors max-[900px]:text-[0.8rem] max-[900px]:mr-1.5">
              {link.num}
            </span>
            {link.label}
            <span className="absolute left-0 right-full bottom-[-2px] h-px bg-accent transition-all duration-350 group-hover:right-0 max-[900px]:hidden" />
          </a>
        ))}
      </nav>

      {/* CTA */}
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full bg-ink text-bone text-[0.88rem] font-medium transition-all hover:bg-accent hover:text-white group max-[900px]:hidden"
      >
        Let's talk
        <i className="fas fa-arrow-right text-[0.75rem] transition-transform group-hover:translate-x-0.5" />
      </a>

      {/* Hamburger */}
      <button
        className="hidden max-[900px]:block w-11 h-11 bg-transparent border border-line-strong rounded-xl cursor-pointer relative"
        aria-label="Toggle navigation"
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span className={`absolute left-[11px] right-[11px] h-[1.5px] bg-ink transition-all duration-300 ${navOpen ? 'top-[21px] rotate-45' : 'top-[15px]'}`} />
        <span className={`absolute left-[11px] right-[11px] h-[1.5px] bg-ink transition-all duration-200 top-[21px] ${navOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`absolute left-[11px] right-[11px] h-[1.5px] bg-ink transition-all duration-300 ${navOpen ? 'top-[21px] -rotate-45' : 'top-[27px]'}`} />
      </button>
    </header>
  )
}
