import React from 'react'
import './Navbar.css'
import jeff_landshark from '../../assets/jeff_landshark.png'

const Navbar = () => {
  return (
    <div className = "navbar">
        <img src={jeff_landshark} alt="" className="navbar-logo"/>
        <ul className="nav-menu">

            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
        </ul>
       
    </div>
  )
}

export default Navbar