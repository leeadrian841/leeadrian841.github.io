import { Container, Row, Col } from 'react-bootstrap'
import { personalInfo, experience } from '../data/data'

function About() {
  return (
    <section id="about" className="section-surface" data-testid="about-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-testid="about-title">
            <span className="accent-cyan">&lt;</span> About <span className="accent-cyan">/&gt;</span>
          </h2>
          <p className="section-subtitle">Experience, expertise, and background</p>
        </div>
        <Row className="about-content">
          <Col lg={5} className="about-bio-col">
            <div className="about-bio-card">
              <div className="about-profile-frame">
                <img src={personalInfo.profileImage} alt={personalInfo.name} className="about-profile-img" />
              </div>
              <h3 className="about-name">{personalInfo.name}</h3>
              <p className="about-role">{personalInfo.title}</p>
              <p className="about-location">
                <i className="fas fa-map-marker-alt accent-cyan"></i> {personalInfo.location}
              </p>
              <p className="about-bio" data-testid="about-bio">{personalInfo.bio}</p>
            </div>
          </Col>
          <Col lg={7} className="about-exp-col">
            <h3 className="exp-heading">
              <i className="fas fa-briefcase accent-cyan"></i> Experience
            </h3>
            <div className="timeline" data-testid="experience-timeline">
              {experience.map((exp, i) => (
                <div key={i} className="timeline-item" data-testid={`experience-item-${i}`}>
                  <div className="timeline-marker" />
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-role">{exp.role}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-desc">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
