import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ol>
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/about/'>About</NavLink></li>
            </ol>
        </nav>
    );
}

export default Navbar;