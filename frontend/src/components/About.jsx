import { Container, Row, Col } from 'react-bootstrap'
import { personalInfo } from '../data/data'

function About() {
  return (
    <section id="about" className="section-surface" data-testid="about-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-testid="about-title">
            <span className="accent-cyan">&lt;</span> About <span className="accent-cyan">/&gt;</span>
          </h2>
        </div>
        <Row className="about-content">
          <Col lg={8} className="mx-auto about-bio-col">
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
        </Row>
      </Container>
    </section>
  )
}

export default About
