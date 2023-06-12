import React from 'react';
import banner from '../images/header.png';
import Navbar from '../components/Navbar';

const Header = () => {
    return(
        <header>
            <img src={banner} className='Banner' alt='header banner'/><br/>
            <Navbar/>
            <hr width="800px"/>
        </header>
    );
}

export default Header;