import React from 'react';

import PostsContainer from '../Posts/PostsContainer';
import Profile from "../Profile/Profile";


function ProfileSection(props) {
    return (
        <main>
            <Profile profile={props.profile} />
            <PostsContainer /> 
        </main>
    );
}

export default ProfileSection;