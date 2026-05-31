import { useVisibility } from '../hooks/useVisibility'

export default function YouTube() {
  const ref = useVisibility()

  return (
    <section id="youtube" className="section" ref={ref}>
      <h2 className="section-title">Learn with me</h2>
      <p className="section-desc">Stay updated with the latest cloud and AI technologies.</p>

      <div className="video-container">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/HKYQN9o--dg"
            title="Latest Video from mpntech IT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <aside className="video-info">
          <h3>Subscribe for more content</h3>
          <p>Get the latest tutorials on AWS, DevOps, AI/ML, and cloud architecture. New videos every week covering practical implementations and industry best practices.</p>
          <a href="https://www.youtube.com/@mpntechit?sub_confirmation=1" target="_blank" rel="noopener" className="btn btn-primary">
            <i className="fab fa-youtube" /> Subscribe to mpntech IT
          </a>
        </aside>
      </div>
    </section>
  )
}
