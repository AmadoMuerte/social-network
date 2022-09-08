import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";

function PostForm({addPost}) {

    let newPostElement = React.useRef(null);

    let addPostClick = () => {
        let text = newPostElement.current.value;
        addPost(text)
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
                addPost={addPostClick}
            />
        </div>
    );
}

export default PostForm;