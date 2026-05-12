import { useScrollProgress } from './hooks/useScrollProgress'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Tech from './components/Tech'
import Projects from './components/Projects'
import YouTube from './components/YouTube'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const { progress, scrolled, showTop } = useScrollProgress()

  return (
    <>
      <ScrollProgress progress={progress} />
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
      <BackToTop visible={showTop} />
    </>
  )
}
