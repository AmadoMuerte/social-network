import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {description: 'hello', likesCount: 25, id: 0},
            {description: 'надеюсь сюда кто нибудь заходит...', likesCount: 99, id: 1},
            {description: 'О, это же моя стена,', likesCount: 38, id: 2}],
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

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let addPost = () => {
    let newPost = {
        description: state.profilePage.newPostText,
        likesCount: 0,
        id: state.profilePage.postsData.length + 1,
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export default state;