import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const sectionRef = useReveal()

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="reveal relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,3vw,3rem)] max-w-[1320px] mx-auto text-left"
    >
      {/* Section head */}
      <div className="max-w-[820px] mb-[clamp(3rem,6vw,5rem)]">
        <span className="inline-block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent mb-5">
          05 — Get in touch
        </span>
        <h2 className="font-display font-medium text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none tracking-[-0.03em] text-ink mb-5">
          Let's build <em className="font-serif italic font-normal text-accent">something</em> great.
        </h2>
        <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-muted max-w-[52ch] leading-relaxed">
          Ready to transform your business with professional cloud solutions?
        </p>
      </div>

      {/* Big email */}
      <a
        href="mailto:info@mpntech.it"
        className="group inline-flex items-center justify-between gap-5 py-5 pl-7 pr-5 border border-line-strong rounded-full bg-surface font-display font-medium text-[clamp(1.2rem,2.4vw,2rem)] tracking-[-0.02em] text-ink leading-none max-w-full transition-all hover:text-accent hover:border-ink hover:bg-white"
      >
        info@mpntech.it
        <span className="w-[clamp(40px,4vw,52px)] h-[clamp(40px,4vw,52px)] rounded-full bg-ink text-bone inline-flex items-center justify-center text-[clamp(0.85rem,1vw,1rem)] shrink-0 transition-all group-hover:bg-accent group-hover:-rotate-45">
          <i className="fas fa-arrow-right" />
        </span>
      </a>

      {/* Contact links */}
      <div className="flex flex-wrap gap-3 mt-10">
        <a
          href="https://linkedin.com/in/mohammad-pakdast"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line-strong rounded-full text-[0.92rem] font-medium text-ink bg-transparent transition-all hover:bg-ink hover:text-bone hover:border-ink hover:-translate-y-0.5"
        >
          <i className="fab fa-linkedin text-base" /> LinkedIn
        </a>
        <a
          href="https://github.com/mr-mpn"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line-strong rounded-full text-[0.92rem] font-medium text-ink bg-transparent transition-all hover:bg-ink hover:text-bone hover:border-ink hover:-translate-y-0.5"
        >
          <i className="fab fa-github text-base" /> GitHub
        </a>
        <a
          href="https://www.youtube.com/@mpntechit"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-3 border border-line-strong rounded-full text-[0.92rem] font-medium text-ink bg-transparent transition-all hover:bg-ink hover:text-bone hover:border-ink hover:-translate-y-0.5"
        >
          <i className="fab fa-youtube text-base" /> YouTube
        </a>
      </div>
    </section>
  )
}
