import React from 'react';

import classes from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

function DialogsItem(props) {

    const isActive = (e) => {
        return e.isActive ? classes.itemActive : classes.item;
    }

    return (
        <NavLink to={'/dialogs/' + props.id} className={isActive}>
            <div className={classes.item}>
                <div className={classes.image}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG" alt="people"/>
                </div>
                <div className={classes.desc}>
                    <h3>{props.name}</h3>
                </div>
            </div>
        </NavLink>

    );
}

export default DialogsItem;