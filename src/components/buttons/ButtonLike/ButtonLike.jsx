import React from 'react';

import classes from './ButtonLike.module.css';
import likeWhite from './likeWhite.svg';

function ButtonLike(props) {

    return (
        <div className={classes.like}>
            <div className={classes.like__inner}>
                <img src={likeWhite} alt="heart"/>
                <span>{props.likesCount}</span>
            </div>

        </div>
    );
}

export default ButtonLike;