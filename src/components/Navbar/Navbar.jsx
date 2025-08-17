import React, {useState, useEffect, useRef} from 'react'
import './Navbar.css'
import PillNav from '../PillNav/PillNav';
import jeff_landshark from '../../assets/jeff_landshark.png'


const Navbar = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pillNavRef = useRef(null);

  // removed disappearing navbar
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const previouslyVisible = isVisible;
      /*
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down past 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mobile menu when navbar hides
        if (previouslyVisible && pillNavRef.current?.closeMobileMenu) {
          pillNavRef.current.closeMobileMenu();
        }
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    */
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }
    
  }, [lastScrollY, isVisible]);
  

  return (
    
<header className={`nav-header ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
  <PillNav
    ref={pillNavRef}
    logo={jeff_landshark}
    logoAlt="Logo"
    items={[
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' }
    ]}
    activeHref="#"
    className="custom-nav"
    ease="power2.easeOut"
    baseColor="#464866"
    pillColor="linear-gradient(129deg, #b1b4feff 43%, #FFFFFF 100%)"
    hoveredPillTextColor="#ffffffff"
    pillTextColor="#000000"
  />
</header>
  )
}

export default Navbar