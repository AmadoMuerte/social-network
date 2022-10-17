import React from 'react';
import Preloader from '../common/Preloader/Preloader';

import classes from './Profile.module.css';

function Profile(props) {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile}>
            <div className={classes.profile__header}>
                <div className={classes.profile__headerInner}>
                    <div className={classes.avatar} >
                        <img src={props.profile.photos.large} alt="avatar"/>
                    </div>
                    <p className={classes.name}>
                        {props.profile.fullName}
                    </p>
                </div>
            </div>
            <div className={classes.profile__info}>
                info
            </div>
        </div>
    );
}

export default Profile;