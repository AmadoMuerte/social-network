import React from 'react';

import classes from './Main.module.css';

import Posts from "../Posts/Posts";
import Profile from "../Profile/Profile";

function Main() {
    return (
        <main className={classes.content}>
            <Profile />
            <Posts />
        </main>
    );
}

export default Main;