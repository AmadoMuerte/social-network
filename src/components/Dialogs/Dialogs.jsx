import React from 'react';

import classes from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import SearchPanel from "../SearchPanel/SearchPanel";

import btnImage from '../../paper-plane-solid.svg';
import Message from "./Message/Message";

function Dialogs({dialogsData, messagesData}) {

    let dialogsElements = dialogsData.map(dialog => {
       return <DialogsItem id={dialog.id} name={dialog.name} key={dialog.id} />
    });

    let messagesElements = messagesData.map(message => {
        return <Message  message={message.message} key={message.id}/>
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
                <SearchPanel />
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div className={classes.messages__header}>
                    <div className={classes.image}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/800px-Zunge_raus.JPG" alt="people"/>
                    </div>
                    <h3 className={classes.messages__name}>Lester Barry</h3>
                </div>
                <div className={classes.messages__content}>
                    {messagesElements}
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