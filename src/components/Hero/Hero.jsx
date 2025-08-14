import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/Orion_github.svg'
import email from '../../assets/envelope.svg'

const Hero = () => {
  return (
    <div className = 'hero'>
        <img src={profile_img} alt="" className="my-profile-img"/>
        <h1><span>Hey! I'm David Vu,</span> a Canadian student currently studying <span className = "cs-text">Computer Science</span> at the University of Toronto.</h1>
        <div className="hero-action">
        <a href="https://www.linkedin.com/in/vudavid2/" target="_blank" rel="noopener noreferrer" className="hero-connect social-btn linkedin-btn">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/Davidvu1" target="_blank" rel="noopener noreferrer" className="hero-connect social-btn github-btn">
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a href="scroll" className="hero-connect social-btn email-btn">
          {/* Add email icon here later */}
          <img src={email} alt="Email" className="social-icon"/>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-resume">
          <span>My resume</span>
        </a>
        </div>
    </div>
  )
}

export default Hero