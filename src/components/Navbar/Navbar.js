import React from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  const [fix, setFix] = useState(window.scrollY >= 950);

  useEffect(() => {
    const setFixed = () => {
      setFix(window.scrollY >= 950);
    };
  
    window.addEventListener("scroll", setFixed);
  
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  return (
      <div className={fix ? 'header active' : 'header'}>
          <nav className={fix ? 'navbar fixed' : 'navbar'}>
              <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                      : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className='nav-item'>
                    <Link to="header" spy={true} offset={-100} onClick={closeMenu}>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="aboutMe" spy={true} offset={-100} delay={0} onClick={closeMenu}>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="resume" spy={true} offset={-100} onClick={closeMenu}>Resume</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="portfolio" spy={true} offset={-100} onClick={closeMenu}>Portfolio</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="contact" spy={true} offset={-100} onClick={closeMenu}>Contact</Link>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default Navbar;