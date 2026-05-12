import { useRevealChildren } from '../hooks/useReveal'

const techItems = [
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'OpenAI', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg' },
  { name: 'PostgreSQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
]

export default function Tech() {
  const containerRef = useRevealChildren('.reveal')

  return (
    <section
      id="tech"
      ref={containerRef}
      className="bg-violet text-white py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,3vw,3rem)]"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Section head */}
        <div className="max-w-[820px] mx-auto text-center mb-[clamp(3rem,6vw,5rem)]">
          <span className="inline-block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent-2 mb-5">
            02 — Tech stack
          </span>
          <h2 className="font-display font-medium text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none tracking-[-0.03em] text-white mb-5">
            The tools behind the <em className="font-serif italic font-normal text-accent-2">craft</em>.
          </h2>
          <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-white/60 max-w-[52ch] leading-relaxed mx-auto">
            Battle-tested technologies I use daily to ship dependable systems.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-5 gap-4 max-w-[1100px] mx-auto max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2">
          {techItems.map((item, i) => (
            <div
              key={item.name}
              className="reveal flex flex-col items-center justify-center gap-4 p-8 px-4 border border-white/10 rounded-[18px] bg-white/[0.02] transition-all hover:bg-white/5 hover:border-accent/40 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-11 h-11 object-contain opacity-90 transition-all hover:opacity-100 hover:scale-[1.08]"
              />
              <span className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-white/75">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
