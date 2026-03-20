import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import BlogPage from './pages/BlogPage/BlogPage'
import BlogPostPage from './pages/BlogPostPage/BlogPostPage'

const MainPage = () => (
  <>
    <section id="home">
      <Hero />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="blog">
      <Blog />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </>
)

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </>
  )
}

export default App
