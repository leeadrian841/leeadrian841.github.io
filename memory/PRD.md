# Adrian Lee Portfolio - PRD

## Original Problem Statement
Revamp an existing static HTML portfolio website to a modern Vite + React + BrowserRouter + Bootstrap site. The website should showcase projects (GitHub Pages/repos), About Me, Skills, Certifications (clickable badges), Resume download, and social links.

## Architecture
- **Frontend**: Vite 6 + React 18 + React Router 7 (BrowserRouter) + React-Bootstrap 2
- **Backend**: FastAPI (minimal, health endpoint only)
- **Styling**: Custom CSS with "Cybersecurity Terminal" dark theme (JetBrains Mono, Inter fonts)
- **Deployment**: Emergent Platform (Supervisor-managed)

## User Persona
- **Primary**: Tech recruiters, hiring managers
- **Secondary**: Fellow engineers, potential collaborators

## Core Requirements (Static)
- [x] Portfolio section with project cards + modals (summary, skills, links)
- [x] About Me section with experience timeline
- [x] Skills section with categorized skill pills
- [x] Certifications section with clickable badges (CSPO, ICP images + CompTIA, Google placeholders)
- [x] Resume download (PDF)
- [x] Social icons (LinkedIn, GitHub, Email)
- [x] Vite build system
- [x] BrowserRouter routing
- [x] Bootstrap integration (React-Bootstrap)
- [x] Dark cybersecurity terminal theme

## What's Been Implemented (Jan 2026)
- Full Vite + React portfolio with 6 sections: Hero, Portfolio, About, Skills, Certifications, Footer
- Terminal-style hero with typing effect animation
- 6 project cards with filter tabs and detail modals
- 6 experience timeline entries from resume
- 5 certification cards (2 with badge images, 3 with icon placeholders)
- Resume PDF download
- Smooth scroll navigation
- Responsive design
- 100% test pass rate

## Backlog / P0-P2
### P1
- Add real project URLs and descriptions as user updates them
- Contact form section
- Dark/light theme toggle

### P2
- Page transition animations (Framer Motion)
- Blog/articles section
- SEO meta tags per section
- Google Analytics integration (GTM tags from original site)
- Visitor counter

## Next Tasks
- User to update placeholder project data with real GitHub Pages/repo links
- User to update bio text
- Add more certification badges as obtained
