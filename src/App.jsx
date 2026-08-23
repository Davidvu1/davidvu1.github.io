import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar/Navbar'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
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

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <SpeedInsights />
    </>
  )
}

export default App
