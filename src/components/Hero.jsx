import { useReveal } from '../hooks/useReveal'

const marqueeItems = [
  'AWS', 'Python', 'Terraform', 'Docker', 'AI / ML', 'Kubernetes',
  'CI / CD', 'Lambda', 'CloudFront', 'DevOps', 'Security',
]

export default function Hero() {
  const heroRef = useReveal()

  return (
    <section className="relative pt-40 px-[clamp(1.25rem,3vw,3rem)] min-h-screen flex flex-col justify-between overflow-hidden max-[800px]:pt-28 max-[800px]:min-h-auto">
      <div
        ref={heroRef}
        className="reveal max-w-[1320px] w-full mx-auto flex-1 flex flex-col justify-center gap-12 py-16"
      >
        {/* Meta row */}
        <div className="flex justify-between items-center font-mono text-[0.78rem] uppercase tracking-[0.08em] text-muted">
          <span className="inline-flex items-center gap-2.5 px-3.5 py-2 border border-line-strong rounded-full bg-white/40 text-ink">
            <span className="w-2 h-2 rounded-full bg-[#18a75a] shadow-[0_0_0_0_rgba(24,167,90,0.55)] animate-pulse-dot" />
            Available for new projects
          </span>
          <span className="max-[800px]:hidden">2026 &nbsp;/&nbsp; EU based</span>
        </div>

        {/* Title */}
        <h1 className="font-display font-medium text-[clamp(3rem,11vw,10.5rem)] leading-[0.95] tracking-[-0.04em] text-ink">
          <span className="block">Professional</span>
          <span className="block text-accent pl-[clamp(2rem,8vw,6rem)] max-[800px]:pl-0">
            <em className="font-serif italic font-normal tracking-[-0.02em]">Cloud</em>
            <span className="font-body font-light text-[0.7em] align-[0.1em] text-ink mx-[0.15em]">×</span>
            <em className="font-serif italic font-normal tracking-[-0.02em]">AI</em>
          </span>
          <span className="block">Solutions.</span>
        </h1>

        {/* Footer row */}
        <div className="grid grid-cols-[1.3fr_1fr] gap-12 items-end pt-8 border-t border-line max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <div>
            <p className="flex items-center gap-3 font-mono text-[0.82rem] uppercase tracking-[0.08em] text-ink mb-4">
              <span className="w-7 h-px bg-ink inline-block" />
              Mohammad Pakdast · Senior Cloud &amp; AI Developer
            </p>
            <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-muted max-w-[42ch] leading-relaxed">
              Delivering enterprise-grade AWS solutions, DevOps automation, and AI/ML implementations.
              Transforming businesses through scalable cloud architecture and intelligent systems.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-end max-[800px]:justify-start">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-accent text-white font-medium text-[0.95rem] transition-all hover:bg-accent-deep hover:-translate-y-0.5 group"
            >
              Explore services
              <i className="fas fa-arrow-right text-[0.82rem] transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.youtube.com/@mpntechit"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-transparent text-ink border border-ink font-medium text-[0.95rem] transition-all hover:bg-ink hover:text-bone hover:-translate-y-0.5"
            >
              <i className="fab fa-youtube" /> Watch channel
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-t border-b border-line py-5 bg-bone" aria-hidden="true">
        <div className="flex gap-10 whitespace-nowrap w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="contents">
              <span className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-medium tracking-[-0.02em] text-ink">
                {item}
              </span>
              <i className="text-[clamp(0.9rem,1.4vw,1.2rem)] text-accent self-center not-italic">◆</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
