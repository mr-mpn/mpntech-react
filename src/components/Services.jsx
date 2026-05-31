import { useState } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const serviceData = [
  { title: 'AWS Services', icon: 'fab fa-aws', label: 'AWS', items: ['Secure static site hosting (S3, CloudFront)', 'CI/CD pipelines with GitHub & CodePipeline', 'IAM, VPC, EC2, and Lambda setup'] },
  { title: 'Cloud Infrastructure', icon: 'fas fa-cloud', label: 'Cloud', items: ['Architecture design & automation (Terraform)', 'Monitoring & logging with CloudWatch', 'Infrastructure as Code (IaC)'] },
  { title: 'Network Security', icon: 'fas fa-shield-halved', label: 'Security', items: ['Security groups, firewalls, VPNs', 'Best practices for cloud hardening', 'SIEM fundamentals'] },
  { title: 'Dockerized Applications', icon: 'fas fa-cube', label: 'Docker', items: ['Containerization for consistent deployment', 'Optimized development & production workflows', 'Docker Compose & orchestration basics'] },
  { title: 'AI & Machine Learning', icon: 'fas fa-robot', label: 'AI & ML', items: ['AI APIs integration for smarter interfaces', 'Image generation, NLP, and chatbot tools', 'AI-driven user experience enhancement'] },
  { title: 'User Experience', icon: 'fas fa-users', label: 'UX', items: ['Recommender systems for personalized content', 'Web analytics integration for behavior insights', 'Performance optimization and A/B testing'] },
]

export default function Services() {
  const [active, setActive] = useState(null)
  const ref = useVisibility()

  return (
    <section id="services" className="section" ref={ref}>
      <h2 className="section-title">What I do</h2>
      <p className="section-desc">Six focused capabilities. One consistent promise: reliable, secure, intelligent systems.</p>

      <div className="services-layout">
        <div className="services-orbit">
          <div className="orbit-ring">
            {serviceData.map((s, i) => (
              <div
                key={i}
                className={`orbit-icon${active === i ? ' active' : ''}`}
                style={{ '--i': i }}
                onClick={() => setActive(i)}
              >
                <i className={s.icon} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="orbit-center">mpntech</div>
        </div>

        <div className="service-detail" id="serviceDetail">
          {active === null ? (
            <p className="service-detail-hint">Click an icon to see details</p>
          ) : (
            <>
              <h3>{serviceData[active].title}</h3>
              <ul>
                {serviceData[active].items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
