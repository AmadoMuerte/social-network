import React from 'react';

import classes from './ButtonLike.module.css';
import likeWhite from './likeWhite.svg';

function ButtonLike() {

    return (
        <div className={classes.like}>
            <img src={likeWhite} alt="heart"/>
        </div>
    );
}

export default ButtonLike;