import { useRevealChildren } from '../hooks/useReveal'

export default function Projects() {
  const containerRef = useRevealChildren('.reveal')

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,3vw,3rem)] max-w-[1320px] mx-auto"
    >
      {/* Section head */}
      <div className="max-w-[820px] mx-auto text-center mb-[clamp(3rem,6vw,5rem)]">
        <span className="inline-block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent mb-5">
          03 — Selected work
        </span>
        <h2 className="font-display font-medium text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none tracking-[-0.03em] text-ink mb-5">
          Projects, shipped in the <em className="font-serif italic font-normal text-accent">wild</em>.
        </h2>
        <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-muted max-w-[52ch] leading-relaxed mx-auto">
          Real-world applications I've built and deployed.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 max-w-[720px] mx-auto">
        <a
          href="https://cinema-list-frontend-react-js.vercel.app/"
          target="_blank"
          rel="noopener"
          className="reveal group flex flex-col gap-8 p-8 bg-surface border border-line rounded-[18px] text-ink relative overflow-hidden transition-all hover:-translate-y-1.5 hover:border-ink hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.2)]"
        >
          {/* Top */}
          <div className="flex justify-between items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-ink text-bone rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#18a75a] shadow-[0_0_8px_#18a75a]" />
              Live
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 font-mono text-[0.72rem] tracking-[0.08em] uppercase bg-transparent text-muted border border-line-strong rounded-full">
              React · Frontend
            </span>
          </div>

          {/* Body */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="text-[2rem] text-accent mb-2">
              <i className="fas fa-film" />
            </div>
            <h3 className="font-display text-[1.8rem] font-medium tracking-[-0.02em]">Cinema List</h3>
            <p className="text-muted text-[0.98rem] leading-relaxed">
              A fully functional app that allows users to search for their favorite movies,
              create personalized lists, and share them with others.
            </p>
          </div>

          {/* Bottom */}
          <div className="pt-4 border-t border-line">
            <span className="inline-flex items-center gap-2.5 font-mono text-[0.8rem] tracking-[0.08em] uppercase text-ink transition-all group-hover:text-accent group-hover:gap-4">
              Bring me there <i className="fas fa-arrow-up-right-from-square" />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
