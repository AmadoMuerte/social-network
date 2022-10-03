import React from 'react';

import classes from './Dialogs.module.css';

import DialogPerson from "./DialogPerson/DialogPerson";
import DialogMessage from "./DialogMessage/DialogMessage";

function Dialogs(props) {
        
    let {dialogsData, messagesData, newMessageBody,
         onSendMessageClick, onNewMessageChange} = props

    return (
        <div className={classes.dialogs}>
            <DialogPerson dialogsData={dialogsData}/>
            <DialogMessage 
               messagesData={messagesData}
               newMessageBody={newMessageBody}
               onSendMessageClick={onSendMessageClick}
               onNewMessageChange={onNewMessageChange}
            />
        </div>
    );
}
 
export default Dialogs;