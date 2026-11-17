import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App
