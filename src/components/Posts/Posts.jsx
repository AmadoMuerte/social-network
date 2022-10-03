import React from 'react';

import classes from './Posts.module.css';
import PostForm from "./PostForm/PostForm";
import Post from "./Post/Post";

function Posts(props) {

    let {postsData, newPostText, onPostChange, addPost} = props

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
                <PostForm
                    newPostText={newPostText}
                    onPostChange={onPostChange}
                    addPost={addPost}
                />
            </div>
            <div className={classes.list}>
                {postsElements}
            </div>

        </div>
    );
}

export default Posts;