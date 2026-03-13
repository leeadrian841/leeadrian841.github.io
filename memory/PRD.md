# Adrian Lee Portfolio - PRD

## Original Problem Statement
Revamp an existing static HTML portfolio website to a modern Vite + React + BrowserRouter + Bootstrap site. The website should showcase projects (GitHub Pages/repos), About Me, Skills, Certifications (clickable badges), Resume download, and social links.

## Architecture
- **Frontend**: Vite 8 + React 19 + React Router 7 (BrowserRouter) + React-Bootstrap 2
- **Backend**: FastAPI (minimal, health endpoint only)
- **Styling**: Custom CSS with "Cybersecurity Terminal" dark theme (JetBrains Mono, Inter fonts)
- **CI/CD**: GitHub Actions for automated GitHub Pages deployment
- **Dependency Management**: Dependabot monthly checks with grouped PRs
- **Deployment**: Emergent Platform (preview) + GitHub Pages (production)

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
- [x] Dependabot monthly dependency checks
- [x] GitHub Actions deployment to GitHub Pages
- [x] Latest stable dependencies (no deprecated packages)

## What's Been Implemented (Jan 2026)
- Full Vite 8 + React 19 portfolio with 6 sections: Hero, Portfolio, About, Skills, Certifications, Footer
- Terminal-style hero with typing effect animation
- 6 project cards with filter tabs and detail modals
- 6 experience timeline entries from resume
- 5 certification cards (2 with badge images, 3 with icon placeholders)
- Resume PDF download
- Smooth scroll navigation
- Responsive design
- Dependabot config (monthly, grouped PRs for react/vite/bootstrap)
- GitHub Actions workflow for automated GitHub Pages deployment
- All dependencies upgraded to latest stable versions:
  - React 19.2.4, Vite 8.0.0, @vitejs/plugin-react 6.0.0
  - Bootstrap 5.3.8, React-Bootstrap 2.10.10, React Router DOM 7.13.1
- 100% test pass rate

## Dependency Versions (March 2026)
| Package | Version | Status |
|---------|---------|--------|
| react | 19.2.4 | Latest stable |
| react-dom | 19.2.4 | Latest stable |
| vite | 8.0.0 | Latest stable |
| @vitejs/plugin-react | 6.0.0 | Latest stable |
| bootstrap | 5.3.8 | Latest stable |
| react-bootstrap | 2.10.10 | Latest stable |
| react-router-dom | 7.13.1 | Latest stable |

## CI/CD Setup
- **Dependabot**: `.github/dependabot.yml` - Monthly npm checks on `/frontend`, grouped by react/vite/bootstrap
- **GitHub Actions**: `.github/workflows/deploy.yml` - Auto-deploys to GitHub Pages on push to `main`
- **GitHub Pages Setup Required**: Go to repo Settings > Pages > Source: select "GitHub Actions"

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
- Push to GitHub and enable GitHub Pages with "GitHub Actions" source
- Update placeholder project data with real GitHub Pages/repo links
- Update bio text
- Add more certification badges as obtained
