import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import me_img from '../../assets/me_in_dist.png'
import github from '../../assets/Orion_github.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/envelope.svg'

const Hero = () => {
  return (
    <div className="hero-section">
      {/* ── Desktop Layout ── */}
      <div className="hero-desktop">
        <div className="hero-content">
          <span className="hero-label">I like to code. And munch.</span>
          <h1 className="hero-heading">Hi. I'm David.</h1>
          <p className="hero-bio">
            I'm a 2nd year CS student at the University of Toronto
            (also minoring in statistics and psychology). I'm
            increasingly interested in distributed systems and on
            the side I like to be involved in Canadian esports and
            try new food places.
          </p>
          <div className="hero-actions">
            <a
              href="https://github.com/Davidvu1"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--github"
            >
              <img src={github} alt="GitHub" className="hero-btn-icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vudavid2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn hero-btn--linkedin"
            >
              <img src={linkedin} alt="LinkedIn" className="hero-btn-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="#contact" className="hero-btn hero-btn--email">
              <img src={email} alt="Email" className="hero-btn-icon" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="hero-stickers">
          <div className="hero-sticker hero-sticker--back">
            <img src={me_img} alt="" />
          </div>
          <div className="hero-sticker hero-sticker--front">
            <img src={profile_img} alt="David Vu" />
          </div>
        </div>
      </div>

      {/* ── Mobile Layout ── */}
      <div className="hero-mobile">
        <div className="hero-mobile-sticker-area">
          <div className="hero-mobile-sticker hero-mobile-sticker--left">
            <img src={profile_img} alt="David Vu" />
          </div>
          <div className="hero-mobile-sticker hero-mobile-sticker--right">
            <img src={me_img} alt="" />
          </div>
          <h1 className="hero-mobile-heading">
            David Vu
          </h1>
        </div>

        <div className="hero-mobile-social">
          <a
            href="https://github.com/Davidvu1"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-mobile-social-btn"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/vudavid2/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-mobile-social-btn"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:davidvu1021@gmail.com" className="hero-mobile-social-btn">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
