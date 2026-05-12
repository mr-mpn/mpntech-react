import { useRevealChildren } from '../hooks/useReveal'

const services = [
  {
    num: '01',
    icon: 'fab fa-aws',
    title: 'AWS Services',
    items: [
      'Secure static site hosting (S3, CloudFront)',
      'CI/CD pipelines with GitHub & CodePipeline',
      'IAM, VPC, EC2, and Lambda setup',
    ],
  },
  {
    num: '02',
    icon: 'fas fa-cloud',
    title: 'Cloud Infrastructure',
    items: [
      'Architecture design & automation (Terraform)',
      'Monitoring & logging with CloudWatch',
      'Infrastructure as Code (IaC)',
    ],
  },
  {
    num: '03',
    icon: 'fas fa-shield-halved',
    title: 'Network Security',
    items: [
      'Security groups, firewalls, VPNs',
      'Best practices for cloud hardening',
      'SIEM fundamentals',
    ],
  },
  {
    num: '04',
    icon: 'fas fa-cube',
    title: 'Dockerized Applications',
    items: [
      'Containerization for consistent deployment',
      'Optimized development & production workflows',
      'Docker Compose & orchestration basics',
    ],
  },
  {
    num: '05',
    icon: 'fas fa-robot',
    title: 'AI & Machine Learning',
    items: [
      'AI APIs integration for smarter interfaces',
      'Image generation, NLP, and chatbot tools',
      'AI-driven user experience enhancement',
    ],
  },
  {
    num: '06',
    icon: 'fas fa-users',
    title: 'User Experience',
    items: [
      'Recommender systems for personalized content',
      'Web analytics integration for behavior insights',
      'Performance optimization and A/B testing',
    ],
  },
]

export default function Services() {
  const containerRef = useRevealChildren('.reveal')

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,3vw,3rem)] max-w-[1320px] mx-auto"
    >
      {/* Section head */}
      <div className="max-w-[820px] mx-auto text-center mb-[clamp(3rem,6vw,5rem)]">
        <span className="inline-block font-mono text-[0.78rem] uppercase tracking-[0.1em] text-accent mb-5">
          01 — What I do
        </span>
        <h2 className="font-display font-medium text-[clamp(2.2rem,5.5vw,4.5rem)] leading-none tracking-[-0.03em] text-ink mb-5">
          Services that <em className="font-serif italic font-normal text-accent">scale</em> with your ambition.
        </h2>
        <p className="text-[clamp(1rem,1.15vw,1.1rem)] text-muted max-w-[52ch] leading-relaxed mx-auto">
          Six focused capabilities. One consistent promise: reliable, secure, intelligent systems.
        </p>
      </div>

      {/* Service list */}
      <div className="border-t border-line">
        {services.map((service) => (
          <article
            key={service.num}
            className="reveal service-item grid grid-cols-[80px_80px_1fr_1.3fr] gap-8 items-start py-10 border-b border-line
              max-[900px]:grid-cols-[60px_1fr] max-[900px]:gap-5"
            style={{ transitionDelay: `${(parseInt(service.num) - 1) * 0.06}s` }}
          >
            <div className="service-text font-mono text-[0.82rem] text-muted pt-1 max-[900px]:row-start-1">
              {service.num}
            </div>
            <div className="service-icon-box w-14 h-14 inline-flex items-center justify-center border border-line-strong rounded-[14px] text-[1.4rem] text-ink bg-surface transition-all max-[900px]:col-start-2">
              <i className={service.icon} />
            </div>
            <h3 className="service-text font-display text-[clamp(1.5rem,2.5vw,2rem)] font-medium tracking-[-0.02em] text-ink pt-0.5 max-[900px]:col-start-2">
              {service.title}
            </h3>
            <ul className="flex flex-col gap-2 pt-1 max-[900px]:col-start-2">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="service-text relative pl-5 text-muted text-[0.98rem] leading-normal before:content-['→'] before:absolute before:left-0 before:text-accent before:font-medium"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
