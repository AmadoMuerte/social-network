import Posts from "./Posts";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../redux/profileReducer";


function PostsContainer({store}) {

    let state = store.getState();

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch(action)
    }

    let addPost = () => {
        store.dispatch(addPostActionCreator());
    }
    
    return (
        <Posts 
            onPostChange={onPostChange} 
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
    
}


export default PostsContainer;


