import React from 'react';

import classes from './Posts.module.css';
import PostForm from "./PostForm/PostForm";
import ButtonSend from "../buttons/ButtonSend/ButtonSend";
import Post from "./Post/Post";

function Posts() {
    return (
        <div className={classes.posts}>

            <div className={classes.list}>
                <Post description={'hi, whats up?'} likesCount={25}/>
                <Post description={'Whats your name man?'} likesCount={33}/>
                <Post description={'Whats your name man?'} likesCount={33}/>
                <Post description={'Whats your name man?'} likesCount={33}/>
            </div>
            <div className={classes.posts__form}>
                <PostForm />
                <ButtonSend message={'Send message'}/>
            </div>
        </div>
    );
}

export default Posts;