
import axios from 'axios';
import classes from './Users.module.css';

import userAvatar from '../../assets/images/avatar.png';

import React, { Component } from 'react';

class Users extends Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            let users = response.data.items;
            this.props.setUsers(users)
        })
    }

    render() {
        return (
            <div className={classes.users}>
            {this.props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt="img" />
                            </div>
                            <div>
                                { user.followed ?
                                    <button onClick={() => {this.props.follow(user.id)}}>Follow</button> : 
                                    <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{/*user.location.country*/}</div>
                                <div>{/*user.location.city*/}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
        );
    }
}

export default Users;