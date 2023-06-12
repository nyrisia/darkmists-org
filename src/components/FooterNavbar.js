import React from 'react';
import {Link} from 'gatsby';

import '../css/Navbar.css';

const FooterNavbar = () => {
    return(
        <nav className="FooterNavbar">
            <a href="https://www.facebook.com/groups/2406592724" target="_blank" rel="noopener noreferrer">Facebook</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/darkmists?lang=en" target="_blank" rel="noopener noreferrer">Twitter</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/Contact/">Contact</Link><p/>
        </nav>
    );
}

export default FooterNavbar;