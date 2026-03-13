import { Container, Row, Col } from 'react-bootstrap'
import { skills } from '../data/data'

function Skills() {
  const skillCategories = Object.values(skills)

  return (
    <section id="skills" className="section-dark" data-testid="skills-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-testid="skills-title">
            <span className="accent-cyan">&lt;</span> Skills <span className="accent-cyan">/&gt;</span>
          </h2>
        </div>
        <Row>
          {skillCategories.map((cat, i) => (
            <Col lg={4} md={6} className="mb-4" key={cat.label}>
              <div className="skill-card" data-testid={`skill-card-${i}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skill-card-icon">
                  <i className={`fas ${cat.icon}`}></i>
                </div>
                <h4 className="skill-card-title">{cat.label}</h4>
                <div className="skill-items">
                  {cat.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills
