import React from 'react';

import classes from './Posts.module.css';
import PostForm from "./PostForm/PostForm";
import ButtonSend from "../buttons/ButtonSend/ButtonSend";
import Post from "./Post/Post";

function Posts() {
    return (
        <div className={classes.posts}>
            <div className={classes.posts__form}>
                <PostForm />
            </div>
            <div className={classes.list}>
                <Post description={'О, это же моя стена, нихрена себе, а что тут писать то?'} likesCount={33}/>
                <Post description={'надеюсь сюда кто нибудь заходит...'} likesCount={33}/>
                <Post description={'надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит... надеюсь сюда кто нибудь заходит...'} likesCount={33}/>
            </div>

        </div>
    );
}

export default Posts;