import React from 'react';
import btnImage from "../../../paper-plane-solid.svg";
import Message from "./Message/Message";

import classes from './DialogMessage.module.css';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../../redux/state';

function DialogMessage(props) {

    let {messageData, state, dispatch} = props;

    let messagesElements = messageData.map(message => {
        return <Message  message={message.message} key={message.id}/>
    })
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        dispatch(updateNewMessageBodyCreator(body));
    }

    return (
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
                <input 
                    className={classes.messages__input}
                    type="text" 
                    placeholder={'Type a message'} 
                    onChange={onNewMessageChange}
                    value={newMessageBody}
                />
                <button className={classes.messages__btn} onClick={onSendMessageClick}>
                    <img src={btnImage} alt="plane"/>
                </button>
            </div>
        </div>
    );
}

export default DialogMessage;