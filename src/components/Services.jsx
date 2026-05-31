import { useState } from 'react'
import { useVisibility } from '../hooks/useVisibility'

const serviceData = [
  { title: 'AWS Services', icon: 'fab fa-aws', label: 'AWS', items: ['Design and implement cloud native solutions for your business', 'Serverless design', 'Identity Access Management for security','Cost Optimization'] },
  { title: 'Cloud Infrastructure', icon: 'fas fa-cloud', label: 'Cloud', items: ['Architecture design & automation (Terraform)', 'Monitoring & logging with CloudWatch', 'Infrastructure as Code (IaC)'] },
  { title: 'Network Security', icon: 'fas fa-shield-halved', label: 'Security', items: ['Security groups, firewalls, VPNs', 'Best practices for cloud hardening'] },
  { title: 'Dockerized Applications', icon: 'fas fa-cube', label: 'Docker', items: ['Containerization for consistent deployment', 'Optimized development & production workflows', 'Docker Compose & orchestration basics'] },
  { title: 'AI & Machine Learning', icon: 'fas fa-robot', label: 'AI & ML', items: ['AI integration for smarter interfaces', 'Image generation, NLP, and chatbot tools', 'AI-driven user experience enhancement'] },
  { title: 'User Experience', icon: 'fas fa-users', label: 'UX', items: ['Recommender systems for personalized content', 'Web analytics integration for behavior insights', 'Performance optimization and A/B testing'] },
]

const COUNT = serviceData.length

export default function Services() {
  const [active, setActive] = useState(null)
  const [ringRotation, setRingRotation] = useState(0)
  const ref = useVisibility()

  const handleClick = (i) => {
    setActive(i)
    const step = 360 / COUNT
    // Target: ring must be at angle where icon i is at right (0°)
    // Icon i is at baseAngle = step * i. Ring rotation needed = -(step * i) mod 360
    const targetMod = (-(step * i) % 360 + 360) % 360 // 0..359, the "destination" mod 360
    setRingRotation(prev => {
      const currentMod = ((prev % 360) + 360) % 360 // where we are mod 360
      // How much clockwise (negative) do we need to go?
      // Clockwise means decreasing angle. Distance clockwise from currentMod to targetMod:
      let clockwiseDist = (currentMod - targetMod + 360) % 360
      if (clockwiseDist === 0) clockwiseDist = 360 // if same icon clicked, do full spin
      return prev - clockwiseDist
    })
  }

  return (
    <section id="services" className="section" ref={ref}>
      <h2 className="section-title">What I do</h2>
      <p className="section-desc">Six focused capabilities. One consistent promise: reliable, secure, intelligent systems.</p>

      <div className="services-layout">
        <div className="services-orbit">
          <div className="orbit-ring" style={{ transform: `rotate(${ringRotation}deg)`, transition: 'transform 1.2s cubic-bezier(0.22, 0.61, 0.36, 1)' }}>
            {serviceData.map((s, i) => {
              const baseAngle = (360 / COUNT) * i
              // Counter-rotate icon to keep it upright: negate both its base angle and the ring rotation
              const counterRotation = -baseAngle - ringRotation
              return (
                <div
                  key={i}
                  className={`orbit-icon${active === i ? ' active' : ''}`}
                  style={{
                    '--i': i,
                    transform: `rotate(${baseAngle}deg) translateX(230px) rotate(${counterRotation}deg)`,
                    transition: 'transform 1.2s cubic-bezier(0.22, 0.61, 0.36, 1), border-color 0.3s, box-shadow 0.3s, background 0.3s, color 0.3s',
                  }}
                  onClick={() => handleClick(i)}
                >
                  <i className={s.icon} />
                  <span>{s.label}</span>
                </div>
              )
            })}
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
