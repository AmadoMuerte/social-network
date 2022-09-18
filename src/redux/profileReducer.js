const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

 const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        let newPost = {
            description: this._state.profilePage.newPostText,
            likesCount: 0,
            id: this._state.profilePage.postsData.length + 1,
        }
        state.postsData.push(newPost);
        state.newPostText = '';

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        }
    return state;
};

export default profileReducer;
