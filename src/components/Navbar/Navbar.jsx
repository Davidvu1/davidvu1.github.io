import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'react-feather'
import './Navbar.css'

const HIDE_AFTER_PX = 80
const DIRECTION_THRESHOLD_PX = 5

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY
        const diff = currentY - lastY

        if (currentY <= HIDE_AFTER_PX) {
          setHidden(false)
        } else if (diff > DIRECTION_THRESHOLD_PX) {
          setHidden(true)
        } else if (diff < -DIRECTION_THRESHOLD_PX) {
          setHidden(false)
        }

        lastY = currentY
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    setHidden(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  const sectionLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
  ]

  return (
    <header className={`navbar ${hidden && !mobileMenuOpen ? 'navbar--hidden' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => scrollToSection('home')}>
          David Vu
        </button>

        <nav className="navbar-links">
          {sectionLinks.map(({ label, id }) => (
            <button key={id} className="navbar-link" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
          <Link to="/blog" className="navbar-link">Blog</Link>
        </nav>

        <button className="navbar-contact-btn" onClick={() => scrollToSection('contact')}>
          Contact
        </button>

        <button
          className="navbar-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} color="#e2e2e6" /> : <Menu size={22} color="#e2e2e6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {sectionLinks.map(({ label, id }) => (
            <button key={id} className="navbar-mobile-link" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
          <Link
            to="/blog"
            className="navbar-mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <button className="navbar-mobile-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
