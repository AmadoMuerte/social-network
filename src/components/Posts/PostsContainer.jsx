import Posts from "./Posts";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../redux/profileReducer";

import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);


export default PostsContainer;


