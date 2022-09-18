import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {description: 'hello', likesCount: 25, id: 0},
                {description: 'надеюсь сюда кто нибудь заходит...', likesCount: 99, id: 1},
                {description: 'О, это же моя стена,', likesCount: 999999, id: 2}],
            newPostText: ''
        },
        dialogPage: {
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

        },
        friends: [
            {
                name: 'Misha',
                avatar: 'https://avatarko.ru/img/kartinka/1/Shrek.jpg'
            },
            {
                name: 'Andrey',
                avatar: 'https://www.meme-arsenal.com/memes/0098988ef41b8c0d571016c93bd7dd0d.jpg'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },{
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },
            {
                name: 'Kirill',
                avatar: 'https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'
            },

        ],
    },

    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer pattern
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default store;

window.store = store;

