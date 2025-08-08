import React, { useState } from 'react'
import './About.css'
import Carousel from "../Carousel/Carousel"
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import profile_img from '../../assets/profile_img.png'
import { Tweet } from 'react-tweet';
import tournaments from '../../assets/sometournaments.png'
const esportsCarouselItems = [
    {
        title: "Team Canada Trial",
        description: (
            <div 
                data-theme="dark" 
                className="tweet-container" 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    width: '100%',
                    height: '100%'
                }}
            >
                <Tweet id="1646327357291266051" />
            </div>
        ),
        id: 1,
    },
    {
        title: "Some Tournament Results", 
        description: <img src={tournaments} alt="Tournaments" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />,
        id: 2,
    }
];

const aboutSlides = [
    {
        content: (
            <ul className="about-bullets">
                <li>Currently a 2nd year student at the University of Toronto
                     seeking a Winter 2026 Co-op and other Co-op opportunities.
                </li>
                <li>Interested in Software Development and dabbling in tech</li>
                <li>Outside of tech, I am passionate about niche interests like 
                    competing in esports (I also coached people to get better and got 
                    paid for it!) and rating food places to eat at; I also love playing 
                    sports like volleyball.</li>
                <li>For those who are interested in my life outside tech,
                     click the arrows to learn more!</li>
            </ul>
        )
    },
    {
        content: (
            <div>
                <p>I used to play a competitive esport called Overwatch as a semi-pro 
                    and even trialed for Team Canada
                     in the 2023 Overwatch World Cup under the alias "Defferatel".</p>
                <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'center' }}>
                    <ImageCarousel    
                        items={esportsCarouselItems}
                        baseWidth={500}
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                </div>
            </div>
        )
    },
    {
        content: (
            <div>
                <p>I love exploring Toronto's food scene and sharing my favorite spots with friends.</p>
            </div>
        )
    }
];

const About = () => {


    return (
        <div className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-profile-img-wrapper">
                    <img src={profile_img} alt="Profile" className="profile-img" />
                </div>
                <div className="about-info">
                    <div className="about-carousel-wrapper fixed-carousel-size">
                        <Carousel autoSlide={false}>
                            {aboutSlides.map((s, i) => (
                                <div key={i}>{s.content}</div>
                            ))}
                        </Carousel>
                    </div>
                    <p>Here are the languages I have experience in:</p>
                </div>
            </div>
        </div>
    )
}

export default About