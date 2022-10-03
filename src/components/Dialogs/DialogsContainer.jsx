import React from 'react';

import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';


function DialogsContainer({store}) {

    let state = store.getState().dialogPage;

    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (text) => {
        store.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <Dialogs 
        dialogsData={state.dialogsData}
        messagesData={state.messagesData}
        newMessageBody={state.newMessageBody}
        onSendMessageClick={onSendMessageClick}
        onNewMessageChange={onNewMessageChange}
        />
    );
}
 
export default DialogsContainer;