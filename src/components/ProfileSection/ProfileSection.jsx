import React from 'react';

import Posts from "../Posts/Posts";
import Profile from "../Profile/Profile";

function ProfileSection() {
    return (
        <main>
            <Profile />
            <Posts />
        </main>
    );
}

export default ProfileSection;