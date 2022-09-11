import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";


function PostForm({dispatch, newPostText}) {

    let newPostElement = React.useRef(null);

    let onPostChange = (e) => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE_NEW_POST_TEXT', newText: text}
        dispatch(action);
    }

    let addPost = () => {
        dispatch({type: 'ADD_POST'});
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