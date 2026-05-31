import { useVisibility } from '../hooks/useVisibility'

export default function Contact() {
  const ref = useVisibility()

  return (
    <section id="contact" className="section" ref={ref}>
      <h2 className="section-title">Let's build something great</h2>

      <div className="contact-links">
        <a href="https://linkedin.com/in/mohammad-pakdast" target="_blank" rel="noopener">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
        <a href="https://github.com/mr-mpn" target="_blank" rel="noopener">
          <i className="fab fa-github" /> GitHub
        </a>
        <a href="https://www.youtube.com/@mpntechit" target="_blank" rel="noopener">
          <i className="fab fa-youtube" /> YouTube
        </a>
      </div>
    </section>
  )
}
