import React from 'react';
import './index.css';
import logo from './img/logo.png'



export default Header
function Header() {
    return(
        <nav className='navbar'>
            <img className='logo' src={logo} alt='Logo'/>
        </nav>
    )
}