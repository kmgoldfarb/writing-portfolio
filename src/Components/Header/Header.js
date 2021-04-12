import React from 'react';
import classes from './Header.module.css';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className={classes.Container}>
            <div className={classes.Name}>
                <Link className={classes.LinkName}to='/' exact>
                    <div className={classes.TitleName}>Daniella <br />Goldfarb</div>
                </Link>
            </div>
            <Navbar className={classes.Nav} />
        </div>
    );
}

export default Header;