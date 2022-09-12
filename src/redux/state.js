const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
                {message: 'hello', id: 0},
                {message: 'how are you?', id: 1},
                {message: 'goodbye', id: 2},
            ],
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

        ]

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
        if (action.type === 'ADD_POST') {
            let newPost = {
                description: this._state.profilePage.newPostText,
                likesCount: 0,
                id: this._state.profilePage.postsData.length + 1,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
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

export default store;
window.store = store;