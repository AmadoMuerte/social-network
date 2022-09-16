import React from 'react';

import classes from './Dialogs.module.css';

import DialogPerson from "./DialogPerson/DialogPerson";
import DialogMessage from "./DialogMessage/DialogMessage";

function Dialogs(props) {

    let {dialogsData, messagesData, dispatch} = props
    let state = props.store.getState().dialogPage;

    return (
        <div className={classes.dialogs}>
            <DialogPerson dialogsData={dialogsData}/>
            <DialogMessage 
                messageData={messagesData} 
                dispatch={dispatch} 
                state={state}
            />
        </div>
    );
}
 
export default Dialogs;