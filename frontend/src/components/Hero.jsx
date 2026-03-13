import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { personalInfo } from '../data/data'

const roles = ["IT Engineer", "Cybersecurity Associate", "Product Manager", "Web Developer"]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80)
    } else if (!isDeleting && text.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40)
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="hero-section" data-testid="hero-section">
      <div className="hero-bg-overlay" />
      <Container className="hero-content">
        <div className="hero-left">
          <p className="hero-greeting" data-testid="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name" data-testid="hero-name">{personalInfo.name}</h1>
          <div className="hero-role-wrapper">
            <span className="hero-role" data-testid="hero-typing-role">
              {text}<span className="cursor-blink">|</span>
            </span>
          </div>
          <p className="hero-tagline">{personalInfo.tagline}</p>
          <div className="hero-actions">
            <button
              className="btn-cta-primary"
              onClick={() => scrollTo('portfolio')}
              data-testid="hero-view-projects-btn"
            >
              View Projects <i className="fas fa-arrow-right"></i>
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-cta-outline"
              data-testid="hero-download-resume-btn"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="hero-github-link">
              <i className="fab fa-github"></i>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="hero-linkedin-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" data-testid="hero-email-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">adrian@portfolio:~</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-prompt">$</span> whoami</p>
              <p className="t-output">Adrian Lee</p>
              <p><span className="t-prompt">$</span> cat role.txt</p>
              <p className="t-output">Aspiring Cybersecurity Associate</p>
              <p><span className="t-prompt">$</span> ls skills/</p>
              <p className="t-output">cybersecurity/ networking/ product-mgmt/ web-dev/</p>
              <p><span className="t-prompt">$</span> uptime</p>
              <p className="t-output">8+ years in tech industry</p>
              <p><span className="t-prompt">$</span> cat location.txt</p>
              <p className="t-output">Singapore</p>
              <p className="t-cursor"><span className="t-prompt">$</span> <span className="cursor-blink">_</span></p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
