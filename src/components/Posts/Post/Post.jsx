import React from 'react';

import classes from './Post.module.css';
import ButtonLike from "../../buttons/ButtonLike/ButtonLike";

function Post(props) {

    const {description, likesCount} = props;
    return (
        <div className={classes.post}>
                <div className={classes.post__avatar}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg" alt="cat"/>
                </div>
                <p className={classes.post__desc}>{description}</p>
            <ButtonLike likesCount={likesCount}/>
        </div>
    );
}

export default Post;