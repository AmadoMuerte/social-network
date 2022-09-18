import React from 'react';

import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {


    const isActive = (e) => {
       return e.isActive ? classes.active : classes.nav__item;
    }

    return (
        <ul className={classes.nav}>
            <li>
                <NavLink
                    to="/profile"
                    className={isActive}
                >Profile</NavLink>
            </li>
            <li>
                <NavLink
                    to="/dialogs"
                    className={isActive}
                >Messages</NavLink>
            </li>
            <li>
                <NavLink
                    to="/friends"
                    className={isActive}
                >Friends</NavLink>
            </li>
            <li>
                <NavLink
                    to="/news"
                    className={isActive}
                >News</NavLink>
            </li>
            <li>
                <NavLink
                    to="/music"
                    className={isActive}
                >Music</NavLink>
            </li>
            <br/>
            <li>
                <NavLink
                    to="/settings"
                    className={isActive}
                >Settings</NavLink>
            </li>
        </ul>
    );
}

export default Navbar;

