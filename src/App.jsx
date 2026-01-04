import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Aurora from './components/Aurora/Aurora'
import Contact from './components/Contact/Contact'
import Test from './components/Test/Test'

const App = () => {
  return (
    <div>
        <div style={{ paddingTop: '0px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <Aurora
            colorStops={["#b1b4fe", "#FFFFFF", "#b1b4fe"]}
            blend={0.6}
            amplitude={0.8}
            speed={2}
          />
        </div>
      <Navbar />
      <section id="home">
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
            <section id="contact">
        <Contact/>
      </section>
      <section>
        <Test/>
      </section>
    </div>
  )
}

export default App