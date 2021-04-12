import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav>
            <ol className={classes.NavList}>
                <ul className={classes.NavItem}><NavLink to='/' exact style={{textDecoration: 'none'}}>Home</NavLink></ul>
                <ul className={classes.NavItem}><NavLink to='/about/' style={{textDecoration: 'none'}}>About</NavLink></ul>
            </ol>
        </nav>
    );
}

export default Navbar;