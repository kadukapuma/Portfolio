import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import StarsCanvas from './components/StarBackground'

const App = () => {
  return (
    <>
      <StarsCanvas />
      <div className="container mx-auto max-w-7xl">
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
