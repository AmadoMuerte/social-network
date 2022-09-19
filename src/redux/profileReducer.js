const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {description: 'hello', likesCount: 25, id: 0},
        {description: 'надеюсь сюда кто нибудь заходит...', likesCount: 99, id: 1},
        {description: 'О, это же моя стена,', likesCount: 999999, id: 2}],
    newPostText: ''
}

 const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                description: state.newPostText,
                likesCount: 0,
                id: state.postsData.length + 1,
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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


export default profileReducer;
