import { useRef } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src="/faviconcolor.png" alt="" />
      {/* <h3>Luis Rodrigues</h3> */}
      <nav ref={navRef}>
        <a href="#welcome" onClick={showNavbar}>Welcome</a>
        <a href="#about" onClick={showNavbar}>About</a>
        <a href="#projects" onClick={showNavbar}>Projects</a>
        <a href="#contact" onClick={showNavbar}>Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
