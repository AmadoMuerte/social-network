import React from 'react';

import classes from './ButtonLike.module.css';
import likeWhite from './likeWhite.svg';

function ButtonLike(props) {

    return (
        <div className={classes.like}>
            <img src={likeWhite} alt="heart"/>
            <span>{props.likesCount}</span>
        </div>
    );
}

export default ButtonLike;