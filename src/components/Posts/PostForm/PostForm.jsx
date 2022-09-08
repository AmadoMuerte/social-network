import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";

function PostForm() {

    let newPostElement = React.useRef(null);

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div>
            <textarea
                ref={newPostElement}
                className={classes.PostForm}
                placeholder={'you news...'}
            />
            <ButtonSend
                description={'Send message'}
                addPost={addPost}
            />
        </div>
    );
}

export default PostForm;