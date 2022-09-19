const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Boris Smirnov'},
        {id: 2, name: 'Boris s'},
        {id: 3, name: 'Boris Smirnov'},
        {id: 4, name: 'Boris ddd'},
    ],
    messagesData: [
        { id: 0, message: 'hello' },
        { id: 1, message: 'how are you?' },
        { id: 2, message: 'goodbye' },
    ],
    newMessageBody: ''
}


 const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({ id: 6, message: body });
            return state;
        default: 
        return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;