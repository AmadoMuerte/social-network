
import axios from 'axios';
import classes from './Users.module.css';

import userAvatar from '../../assets/images/avatar.png';

import React, { Component } from 'react';

class Users extends Component {

    componentDidMount() {
        let page = this.props.currentPage
        let count = this.props.pageSize

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
        .then(response => {
            let users = response.data.items;
            let totalCount = response.data.totalCount
            this.props.setUsers(users)
            this.props.setTotalusersCount(totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        let count = this.props.pageSize
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${count}`)
        .then(response => {
            let users = response.data.items;
            this.props.setUsers(users)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        return (
            <div className={classes.users}>
                <div className={classes.users__container}>
                    {this.props.users.map(user => {
                        return (
                            <div key={user.id} className={classes.user}>
                                <div>
                                    <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt="img" />
                                </div>
                                <div>
                                    { user.followed ?
                                    <button onClick={() => {this.props.follow(user.id)}}>Follow</button> : 
                                    <button onClick={() => {this.props.unfollow(user.id)}}>Unfollow</button> }
                                </div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                        )
                    })}
                </div>
                <div className={classes.pagination}>
                    {slicedPages.map((page) => {
                    return ( 
                        <span 
                            className={this.props.currentPage === page && classes.selectedPage}
                            onClick={() => this.onPageChanged(page)}
                            key={page}
                        >
                            {page}
                        </span>
                        )
                    })}
                    
                </div>
            </div>
        );
    }
}

export default Users;