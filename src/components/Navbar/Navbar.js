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
                    <Link to="header" spy={true} smooth={true} offset={-100} onClick={closeMenu}>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="aboutMe" spy={true} smooth={true} offset={-100} onClick={closeMenu}>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/" spy={true} smooth={true} offset={50} onClick={closeMenu}>Projects</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to="/" spy={true} smooth={true} offset={50} onClick={closeMenu}>Resume</Link>
                  </li>
              </ul>
          </nav>
      </div>
  )
}

export default Navbar;