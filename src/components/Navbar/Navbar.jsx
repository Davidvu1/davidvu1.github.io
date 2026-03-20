import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'react-feather'
import './Navbar.css'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
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
    <header className="navbar">
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
