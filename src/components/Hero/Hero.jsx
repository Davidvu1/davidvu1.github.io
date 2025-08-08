import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className = 'hero'>
        <img src={profile_img} alt="" className="my-profile-img"/>
        <h1><span>Hey! I'm David Vu,</span> a Canadian student currently studying <span className = "cs-text">Computer Science</span> at the University of Toronto.</h1>
        <div className="hero-action">
        <div className="hero-connect">LinkedIn</div>
        <div className="hero-connect">GitHub</div>
        <div className="hero-connect">Email</div>
        <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero