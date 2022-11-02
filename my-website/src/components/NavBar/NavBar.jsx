import React from 'react'

import Hamburger from 'hamburger-react'

import './navBarStyles.scss'

function toggleMenu(){
    
}
const NavBar = () => {
    return ( 
        <header>
            {/* should probably add a logo here and make it clickable */}
            <nav className='mainNav'>
                <ul>
                    <li><a href="">About Me</a></li>
                    <li><a href="">My Work</a></li>
                    <li><a href="">Contact Me</a></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default NavBar;
