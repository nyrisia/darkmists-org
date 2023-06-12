import React from 'react';
import {Link} from 'gatsby';
import '../css/Navbar.css';

const Navbar = () => {
    return(
        <nav className="Navbar">
            <Link to="/">Home</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Newcomers/">Newcomers</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Races/">Races</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Classes/">Classes</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Religions/">Religions</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Houses/">Houses</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/World/">World</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Resources/">Resources</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <Link to="/Help/">Help</Link><span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
            <a href="https://dmfreedomforum.proboards.com/" target="_blank" rel="noopener noreferrer">Forum</a><p/>
        </nav>
    );
}

export default Navbar;