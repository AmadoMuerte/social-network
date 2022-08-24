import React from 'react';

import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.post}>
            <div className={classes.post__avatar}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg" alt="cat"/>
            </div>
            <p>hey, how are you??</p>
        </div>
    );
}

export default Post;