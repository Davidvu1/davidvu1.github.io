import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div>
        <Navbar />
        <section id="hero">
          <Hero/>
        </section>
        <section id="about">
          <About/>
        </section>
        <section id="experience">
          <Experience/>
        </section>
        <section id="projects">
          <Projects/>
        </section>
    </div>
  )
}

export default App