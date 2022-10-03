import React from 'react';

import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';


function DialogsContainer(props) {

    

    return (
        <StoreContext.Consumer> 
            {
                (store) => {

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
                    )
                }
            }
        </StoreContext.Consumer>
    );
}
 
export default DialogsContainer;