import React from 'react'
import './Footer.css'

const Footer = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav className="footer-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="footer-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
