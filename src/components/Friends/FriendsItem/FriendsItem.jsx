import React from 'react';

import classes from "./FriendsItem.module.css";

function FriendsItem({friend}) {
    return (
        <div className={classes.friend}>
            <div className={classes.avatar}>
                <img src={friend.avatar} alt="ava"/>
            </div>
            <div>
                <div className={classes.name}>{friend.name}</div>
            </div>
        </div>
    );
}

export default FriendsItem;