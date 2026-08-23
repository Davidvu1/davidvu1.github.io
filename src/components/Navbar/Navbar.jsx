import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'react-feather'
import './Navbar.css'

const HIDE_AFTER_PX = 80
const DIRECTION_THRESHOLD_PX = 5
const SUPPRESS_FALLBACK_MS = 2000
const SETTLE_STABLE_FRAMES = 6

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const suppressHideRef = useRef(false)
  const scrollGenerationRef = useRef(0)
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

        // A nav link triggered this scroll (e.g. clicking "Projects") — keep the
        // navbar visible for the duration of that programmatic scroll.
        if (suppressHideRef.current) {
          lastY = currentY
          ticking = false
          return
        }

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
    suppressHideRef.current = true

    // Spamming nav links fires overlapping scrolls — only the watcher for the
    // most recent click is allowed to clear the suppression. Older watchers
    // see their generation go stale and bail out instead of racing to end
    // suppression early while a newer scroll is still animating.
    const myGeneration = ++scrollGenerationRef.current

    const runScroll = () => {
      if (myGeneration !== scrollGenerationRef.current) return

      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

      // Clear the suppression once scrollY has actually stopped moving, rather
      // than trusting `scrollend` alone — it can fire early from unrelated
      // layout shifts (e.g. images loading) while the nav-triggered scroll is
      // still animating.
      let stableFrames = 0
      let prevY = window.scrollY
      const watchForSettle = () => {
        if (myGeneration !== scrollGenerationRef.current) return
        if (!suppressHideRef.current) return

        const currentY = window.scrollY
        stableFrames = Math.abs(currentY - prevY) < 1 ? stableFrames + 1 : 0
        prevY = currentY

        if (stableFrames >= SETTLE_STABLE_FRAMES) {
          suppressHideRef.current = false
          return
        }
        window.requestAnimationFrame(watchForSettle)
      }
      window.requestAnimationFrame(watchForSettle)

      // Absolute fallback in case the settle-watch never resolves.
      window.setTimeout(() => {
        if (myGeneration !== scrollGenerationRef.current) return
        suppressHideRef.current = false
      }, SUPPRESS_FALLBACK_MS)
    }

    if (location.pathname === '/') {
      runScroll()
    } else {
      navigate('/')
      setTimeout(runScroll, 150)
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
