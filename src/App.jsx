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
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App