import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const[click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           
            {/* <i class='fab fa-typo3' /> */}
            <img src="./images/rari.png" alt="Rari" height="50" />
            RARI CAPITAL
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pools'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Pools
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/fuse'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Fuse
              </Link>
            </li>

            <li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Start
              </Link>
            </li>

            </ul>


            </div>
        </nav>
            
        </>
    )
}

export default Navbar
