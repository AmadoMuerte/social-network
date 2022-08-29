import React from 'react';

import classes from './DialogsItem.module.css';

function DialogsItem() {
    return (
        <div className={classes.item}>
            <div className={classes.image}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG" alt="people"/>
            </div>
            <div className={classes.desc}>
                <h3>Lester Barry</h3>
                <p>Lets play now!</p>
            </div>
        </div>
    );
}

export default DialogsItem;