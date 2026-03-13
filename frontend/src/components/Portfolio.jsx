import { useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import { projects } from '../data/data'

function ProjectCard({ project, onOpen }) {
  return (
    <Col lg={4} md={6} className="mb-4">
      <div
        className="project-card"
        onClick={() => onOpen(project)}
        data-testid={`project-card-${project.id}`}
      >
        <div className="project-card-img-wrap">
          <img src={project.image} alt={project.title} className="project-card-img" />
          <div className="project-card-overlay">
            <i className="fas fa-expand"></i>
          </div>
        </div>
        <div className="project-card-body">
          <span className="project-category">{project.category}</span>
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tech-tags">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Col>
  )
}

function ProjectModal({ project, show, onClose }) {
  if (!project) return null

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      size="lg"
      className="project-modal"
      data-testid="project-modal"
    >
      <Modal.Header className="project-modal-header">
        <Modal.Title className="project-modal-title" data-testid="project-modal-title">
          {project.title}
        </Modal.Title>
        <button className="modal-close-btn" onClick={onClose} data-testid="project-modal-close" aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body className="project-modal-body">
        <img src={project.image} alt={project.title} className="project-modal-img" />
        <span className="project-category modal-cat">{project.category}</span>
        <p className="project-summary" data-testid="project-modal-summary">{project.summary}</p>
        <div className="project-modal-tech">
          <h6>Technologies & Skills</h6>
          <div className="project-tech-tags">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="project-modal-footer">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-primary"
            data-testid="project-modal-live-link"
          >
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-outline"
            data-testid="project-modal-repo-link"
          >
            <i className="fab fa-github"></i> View Repo
          </a>
        )}
      </Modal.Footer>
    </Modal>
  )
}

function Portfolio() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="section-dark" data-testid="portfolio-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title" data-testid="portfolio-title">
            <span className="accent-cyan">&lt;</span> Portfolio <span className="accent-cyan">/&gt;</span>
          </h2>
          <p className="section-subtitle">Projects and work I've built or contributed to</p>
        </div>
        <div className="filter-tabs" data-testid="portfolio-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
              data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <Row>
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </Row>
        <ProjectModal
          project={selected}
          show={!!selected}
          onClose={() => setSelected(null)}
        />
      </Container>
    </section>
  )
}

export default Portfolio
