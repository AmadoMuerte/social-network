import React from 'react';

import classes from './Profile.module.css';

function Profile(props) {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__header}>
                <div className={classes.profile__headerInner}>
                    <div className={classes.avatar} >
                        <img src={props.avatar} alt="avatar"/>
                    </div>
                    <p className={classes.name}>
                        {props.name}
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