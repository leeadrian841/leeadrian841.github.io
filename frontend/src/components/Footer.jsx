import { Container, Row, Col } from 'react-bootstrap'
import { personalInfo } from '../data/data'

function Footer() {
  return (
    <footer className="site-footer" data-testid="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="footer-brand-col">
            <span className="footer-brand">
              <span className="accent-cyan">&gt;</span> Adrian_Lee
            </span>
          </Col>
          <Col md={4} className="footer-socials-col">
            <div className="footer-socials" data-testid="footer-social-links">
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="footer-social-icon"
                data-testid="footer-email-link"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-icon"
                data-testid="footer-linkedin-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-icon"
                data-testid="footer-github-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
          <Col md={4} className="footer-copy-col">
            <p className="footer-copy">
              &copy; {new Date().getFullYear()} Adrian Lee. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
