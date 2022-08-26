import React from 'react';

import classes from './Navbar.module.css';
import ProfileSection from "../ProfileSection/ProfileSection";

function Navbar() {
    return (
        <ul className={classes.nav}>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dialogs">Messages</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/music">Music</a></li>
            <br/>
            <li><a href="/settings">Settings</a></li>
        </ul>
    );
}

export default Navbar;