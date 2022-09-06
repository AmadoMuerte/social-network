import React from 'react';

import classes from './Friends.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

function Friends({friends}) {

    let friendsArr = friends.map(friend => {
        return <FriendsItem friend={friend}/>
    })
    return (
        <div className={classes.friends}>
            {friendsArr}
        </div>
    );
}

export default Friends;