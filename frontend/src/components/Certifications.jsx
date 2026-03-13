import { Container, Row, Col } from 'react-bootstrap'
import { certifications } from '../data/data'

function CertCard({ cert, index }) {
  return (
    <Col lg={4} md={6} className="mb-4">
      <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-card-link"
        data-testid={`cert-card-${index}`}
        aria-label={`Verify ${cert.name} certification`}
      >
        <div className="cert-card">
          <div className="cert-badge-wrap">
            {cert.badgeImage ? (
              <img src={cert.badgeImage} alt={cert.name} className="cert-badge-img" />
            ) : (
              <div className="cert-badge-placeholder">
                <i className={`fas ${cert.icon || 'fa-certificate'}`}></i>
              </div>
            )}
          </div>
          <div className="cert-info">
            <h4 className="cert-name">{cert.name}</h4>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-year">{cert.year}</span>
          </div>
          <div className="cert-verify-hint">
            <i className="fas fa-external-link-alt"></i> Verify
          </div>
        </div>
      </a>
    </Col>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section-surface" data-testid="certifications-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-testid="certifications-title">
            <span className="accent-cyan">&lt;</span> Certifications <span className="accent-cyan">/&gt;</span>
          </h2>
        </div>
        <Row className="justify-content-center">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Certifications
