import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Tech from './components/Tech'
import Projects from './components/Projects'
import YouTube from './components/YouTube'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Tech />
        <Projects />
        <YouTube />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
