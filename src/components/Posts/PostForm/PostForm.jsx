import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


function PostForm({dispatch, newPostText}) {

    let newPostElement = React.useRef(null);

    let onPostChange = (e) => {
        let text = newPostElement.current.value;
        dispatch(updateNewPostTextActionCreator(text));
    }

    let addPost = () => {
        dispatch(addPostActionCreator());
    }

    return (
        <div>
            <textarea
                ref={newPostElement}
                className={classes.PostForm}
                placeholder={'you news...'}
                onChange={onPostChange}
                value={newPostText}
            />
            <ButtonSend
                description={'Send message'}
                addPost={addPost}
            />
        </div>
    );
}

export default PostForm;