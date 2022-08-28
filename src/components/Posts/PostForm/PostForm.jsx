import React from 'react';

import classes from './PostForm.module.css';
import ButtonSend from "../../buttons/ButtonSend/ButtonSend";

function PostForm() {
    return (
        <div>
            <textarea
                className={classes.PostForm}
                placeholder={'you news...'}
            />
            <ButtonSend message={'Send message'}/>
        </div>
    );
}

export default PostForm;