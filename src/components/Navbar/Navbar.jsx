import React, {useState, useEffect} from 'react'
import './Navbar.css'
import PillNav from '../PillNav/PillNav';
import jeff_landshark from '../../assets/jeff_landshark.png'


const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down past 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    
<header className={`nav-header ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
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
    baseColor="#4693f8"
    pillColor="linear-gradient(135deg, #4693f8 40%, #fdb45b 100%)"
    hoveredPillTextColor="#ffffffff"
    pillTextColor="#000000"
  />
</header>
  )
}

export default Navbar