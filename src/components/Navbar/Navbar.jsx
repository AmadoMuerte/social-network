import React from 'react';

import classes from './Navbar.module.css';

function Navbar() {
    return (
        <ul className={classes.nav}>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <br/>
            <li>Settings</li>
        </ul>
    );
}

export default Navbar;