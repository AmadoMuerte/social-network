import React from 'react';

import classes from './DialogsItem.module.css';

function DialogsItem(props) {
    return (
        <div className={classes.item}>
            <div className={classes.image}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG" alt="people"/>
            </div>
            <div className={classes.desc}>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default DialogsItem;