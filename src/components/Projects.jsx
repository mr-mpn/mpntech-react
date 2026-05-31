import { useVisibility } from '../hooks/useVisibility'

const projects = [
  {
    href: 'https://cinema-list-frontend-react-js.vercel.app/',
    icon: 'fas fa-film',
    badge: 'Live',
    title: 'Cinema List',
    desc: 'A fully functional app that allows users to search for their favorite movies, create personalized lists, and share them with others.',
    tech: 'React · Frontend',
  },
  {
    href: 'https://github.com/mr-mpn/RAG-LLM-HarryPotter-Collection',
    icon: 'fas fa-book',
    badge: 'Public',
    title: 'RAG LLM — Harry Potter',
    desc: 'A full RAG pipeline (embedding, vector DB, query) that can answer any question on all the Harry Potter books.',
    tech: 'Python · RAG · LLM',
  },
  {
    href: 'https://github.com/mr-mpn/MCP-LLM-TELEGRAM-Birthday-Reminder',
    icon: 'fab fa-telegram',
    badge: 'Public',
    title: 'Birthday Reminder Bot',
    desc: "An automated solution using MCP + LLM + Telegram for those who forget other people's birthdays.",
    tech: 'Python · MCP · Telegram',
  },
]

export default function Projects() {
  const ref = useVisibility('.project-card')

  return (
    <section id="projects" className="section" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">Real-world applications I've built and deployed.</p>

      <div className="projects-grid">
        {projects.map(p => (
          <a key={p.title} href={p.href} target="_blank" rel="noopener" className="project-card">
            <div className="project-card-header">
              <i className={p.icon} />
              <span className="project-badge">{p.badge}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="project-tech">{p.tech}</span>
            <span className="project-link">Visit project <i className="fas fa-arrow-up-right-from-square" /></span>
          </a>
        ))}
      </div>
    </section>
  )
}
