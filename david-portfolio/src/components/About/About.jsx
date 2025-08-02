import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" className="profile-img" />
            </div> 
            <div className="about-right">
                <div className="about-para">
                    <p>fngkjfdsgndfsjkgndfjkgndfsjkgndfjkgndfjkgndfjkgdfnsjkgdfngjkn</p>
                    <p>more yap</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Java</p></div>
                    <div className="about-skill"><p>Python</p></div>
                    <div className="about-skill"><p>Javascript</p></div>
                    <div className="about-skill"><p>Typescript</p></div>
                    <div className="about-skill"><p>HTML & CSS</p></div>
                    <div className="about-skill"><p>C</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About