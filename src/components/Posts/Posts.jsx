import React from 'react';

import classes from './Posts.module.css';
import PostForm from "./PostForm/PostForm";
import Post from "./Post/Post";

function Posts() {

    let postsData = [
        {description: 'hello', likesCount: 25, id: 0},
        {description: 'надеюсь сюда кто нибудь заходит...', likesCount: 99, id: 1},
        {description: 'О, это же моя стена,', likesCount: 38, id: 2},
    ]

    let postsElements = postsData.map(post => {
        return (
            <Post description={post.description}
                  likesCount={post.likesCount}
                  key={post.id}
            />)
    });

    return (
        <div className={classes.posts}>
            <div className={classes.posts__form}>
                <PostForm />
            </div>
            <div className={classes.list}>
                {postsElements}
            </div>

        </div>
    );
}

export default Posts;