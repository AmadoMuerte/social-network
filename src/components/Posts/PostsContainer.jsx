import Posts from "./Posts";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../redux/profileReducer";
import StoreContext from "../../StoreContext";


function PostsContainer({store}) {

    
    return (
        <StoreContext.Consumer> 
            {
                (store) => {
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
                        />)
                }
            }
        </StoreContext.Consumer>
    );
    
}


export default PostsContainer;


