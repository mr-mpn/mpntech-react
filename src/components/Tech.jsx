import { useVisibility } from '../hooks/useVisibility'

const techs = [
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'GitHub', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'React', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
]

export default function Tech() {
  const ref = useVisibility('.tech-item')

  return (
    <section id="tech" className="section" ref={ref}>
      <h2 className="section-title">Tech I use</h2>
      <p className="section-desc">Battle-tested technologies I use daily to ship dependable systems.</p>

      <div className="tech-grid">
        {techs.map(t => (
          <div key={t.name} className="tech-item">
            <img src={t.img} alt={t.name} />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
