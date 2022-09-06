import React from 'react';

import classes from './Dialogs.module.css';

import DialogPerson from "./DialogPerson/DialogPerson";
import DialogMessage from "./DialogMessage/DialogMessage";

function Dialogs({dialogsData, messagesData}) {
    return (
        <div className={classes.dialogs}>
            <DialogPerson dialogsData={dialogsData}/>
            <DialogMessage messageData={messagesData}/>
        </div>
    );
}

export default Dialogs;