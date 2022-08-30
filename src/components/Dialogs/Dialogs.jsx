import React from 'react';

import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import SearchPanel from "../SearchPanel/SearchPanel";

import btnImage from '../../paper-plane-solid.svg';
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <SearchPanel />

                <NavLink to={'/dialogs/0'}>
                    <DialogsItem name={'Boris Smirnov'} message={'fuck you!'}/>
                </NavLink>
                <NavLink to={'/dialogs/1'}>
                    <DialogsItem name={'Andre Miroslav'} message={'hello'}/>
                </NavLink>
                <NavLink to={'/dialogs/2'}>
                    <DialogsItem name={'Nikita Andreevich'} message={"wat's up?"}/>
                </NavLink>

            </div>
            <div className={classes.messages}>
                <div className={classes.messages__header}>
                    <div className={classes.image}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG" alt="people"/>
                    </div>
                    <h3 className={classes.messages__name}>Lester Barry</h3>
                </div>
                <div className={classes.messages__content}>
                    <div> message message message message message</div>
                </div>
                <div className={classes.messages__footer}>
                    <input className={classes.messages__input} type="text" placeholder={'Type a message'}/>
                    <button className={classes.messages__btn}>
                        <img src={btnImage} alt="plane"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;