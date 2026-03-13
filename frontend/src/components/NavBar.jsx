import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { personalInfo } from '../data/data'

function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={`custom-nav ${scrolled ? 'nav-scrolled' : ''}`}
      data-testid="main-navbar"
    >
      <Container>
        <Navbar.Brand
          onClick={() => scrollTo('hero')}
          className="nav-brand-mono"
          style={{ cursor: 'pointer' }}
          data-testid="nav-brand"
        >
          <span className="accent-cyan">&gt;</span> Adrian_Lee
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" className="custom-toggler">
          <i className="fas fa-terminal"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollTo('portfolio')} data-testid="nav-portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={() => scrollTo('about')} data-testid="nav-about">
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollTo('skills')} data-testid="nav-skills">
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollTo('certifications')} data-testid="nav-certs">
              Certifications
            </Nav.Link>
            <Nav.Link
              href={personalInfo.resumeUrl}
              download
              className="nav-resume-btn"
              data-testid="nav-resume-download"
            >
              <i className="fas fa-download"></i> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
