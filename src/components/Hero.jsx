import { useState, useEffect, useRef } from 'react'

const words = ['Cloud', 'AI', 'Frontend', 'Backend', 'Scalable', 'Serverless']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [animClass, setAnimClass] = useState('in')
  const rotateRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimClass('out')
      setTimeout(() => {
        setIndex(i => (i + 1) % words.length)
        if (rotateRef.current) rotateRef.current.style.transform = 'translateY(-100%)'
        setAnimClass('')
        requestAnimationFrame(() => {
          if (rotateRef.current) rotateRef.current.style.transform = ''
          setAnimClass('in')
        })
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hey, I'm Mohammad</p>
        <h1>
          I build{' '}
          <span className="hero-rotate-wrapper">
            <span ref={rotateRef} className={`hero-rotate ${animClass}`}>{words[index]}</span>
          </span>{' '}
          solutions.
        </h1>
        <p className="hero-description">
          Senior Cloud & AI Developer — delivering enterprise-grade AWS solutions, DevOps automation, and AI/ML implementations.
          Transforming businesses through scalable cloud architecture and intelligent systems.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn btn-primary">Explore services</a>
          <a href="https://www.youtube.com/@mpntechit" target="_blank" rel="noopener" className="btn btn-outline">
            <i className="fab fa-youtube" /> Watch channel
          </a>
        </div>
      </div>
    </section>
  )
}
