import classes from './Footer.module.css';
import React from 'react';

const Footer = () => {
    return(
        <div className={classes.Footer}>
            <ul>
                <li className={classes.FooterItem}>Content © 2021 Daniella Goldfarb</li>
                <li className={classes.FooterItem}>Site designed by Kevin Goldfarb</li>
            </ul>
        </div>
    );
}

export default Footer;