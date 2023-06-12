import React from 'react';
import bar from '../images/footer.png';
import FooterNavbar from '../components/FooterNavbar';

const Footer = () => {
    return(
        <footer>
            <img src={bar} className='Banner' alt='separator bar'/><p/>
            <span className="Copyright"><p>Copyright © 2022 Dark Mists. All rights reserved.</p></span>
            <FooterNavbar/>
        </footer>
    );
}

export default Footer;
