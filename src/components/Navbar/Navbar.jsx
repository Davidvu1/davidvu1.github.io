import React from 'react'
import './Navbar.css'
import PillNav from '../PillNav/PillNav';
import jeff_landshark from '../../assets/jeff_landshark.png'


const Navbar = () => {
  return (

<PillNav
  logo={jeff_landshark}
  logoAlt="Logo"
  items={[
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ]}
  activeHref="#"
  className="custom-nav"
  ease="power2.easeOut"
  baseColor="#000000"
  pillColor="#ffffff"
  hoveredPillTextColor="#ffffff"
  pillTextColor="#000000"
/>
  )
}

export default Navbar