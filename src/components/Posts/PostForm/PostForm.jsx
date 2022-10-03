import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";


function PostForm({addPost, onPostChange, newPostText}) {

    let newPostElement = React.useRef(null);


    let PostChange = () => {
        let text = newPostElement.current.value;
        onPostChange(text);
    }
    return (
        <div>
            <textarea
                ref={newPostElement}
                className={classes.PostForm}
                placeholder={'you news...'}
                onChange={PostChange}
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