import { useReveal } from '../hooks/useReveal'

export default function YouTube() {
  const sectionRef = useReveal()

  return (
    <section
      id="youtube"
      ref={sectionRef}
      className="reveal relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,3vw,3rem)] max-w-[1320px] mx-auto"
    >
      {/* Section head */}
      <div className="max-w-[820px] mx-auto text-center mb-[clamp(3rem,6vw,5rem)]">
        <span className="inline-block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent mb-5">
          04 — Latest tutorial
        </span>
        <h2 className="font-display font-medium text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none tracking-[-0.03em] text-ink mb-5">
          Learn with me, on <em className="font-serif italic font-normal text-accent">YouTube</em>.
        </h2>
        <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-muted max-w-[52ch] leading-relaxed mx-auto">
          Stay updated with the latest cloud and AI technologies.
        </p>
      </div>

      {/* Video container */}
      <div className="grid grid-cols-[1.4fr_1fr] gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
        {/* Video */}
        <div className="relative w-full pb-[56.25%] rounded-[18px] overflow-hidden border border-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
          <iframe
            src="https://www.youtube.com/embed/HKYQN9o--dg"
            title="Latest Video from mpntech IT"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          />
        </div>

        {/* Info */}
        <aside>
          <span className="inline-flex items-center gap-2 font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent mb-5">
            <i className="fab fa-youtube text-[#ff0000] text-base" /> mpntech IT
          </span>
          <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.02em] leading-[1.1] text-ink mb-4">
            Subscribe for more content.
          </h3>
          <p className="text-muted text-[1.02rem] leading-relaxed mb-7">
            Get the latest tutorials on AWS, DevOps, AI/ML, and cloud architecture.
            New videos every week covering practical implementations and industry best practices.
          </p>
          <a
            href="https://www.youtube.com/@mpntechit?sub_confirmation=1"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 px-6 py-4 bg-ink text-bone rounded-full text-[0.95rem] font-medium transition-all hover:bg-accent hover:text-white hover:-translate-y-0.5 group"
          >
            <i className="fab fa-youtube text-[#ff2f2f] group-hover:text-white" /> Subscribe to mpntech IT
          </a>
        </aside>
      </div>
    </section>
  )
}
