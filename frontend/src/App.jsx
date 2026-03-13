import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Certifications />
    </>
  )
}

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
