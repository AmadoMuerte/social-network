import React from 'react';

import classes from './PostForm.module.css';

function PostForm() {
    return (
        <textarea
            className={classes.PostForm}
            placeholder={'you news...'}
        />
    );
}

export default PostForm;