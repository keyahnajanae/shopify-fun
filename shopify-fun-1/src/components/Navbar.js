import React, {useState} from 'react';
import { Link } from 'react-router-dom'



function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
<nav className="navbar">
    <div className="navbar-container">
        <Link to path="/" className="navbar-logo">
            DSNR <i className="fab fa-typo3"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {/* If it's clicked it'll be the times, if it's not clicked it'll be the bars*/}
          <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        {/* Will make tmenu disappear */}
        <ul className={click ? 'nav-menu active' : 'nav-menu' } >
        <li className='nav-item'>
            <Link to = '/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to = '/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to = '/handbags' className='nav-links' onClick={closeMobileMenu}>Handbags</Link>
          </li><li className='nav-item'>
            <Link to = '/testimonials' className='nav-links' onClick={closeMobileMenu}>Testimonials</Link>
          </li>
          <li className='nav-item'>
            <Link to = '/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact us</Link>
          </li>
          <li className='nav-item'>
            <Link to = '/signup' className='nav-links-mobile' onClick={closeMobileMenu}>Signup
            </Link>
          </li>
        </ul>
    </div>
</nav>

    </>
  );
}

export default Navbar;