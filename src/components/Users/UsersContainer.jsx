import React, { Component } from 'react';
import { connect } from "react-redux";

import { follow, setCurrentPage,
         setTotalUsersCount, setUsers,
         toggleIsFetching, unfollow } from "../../redux/usersReducer";


import axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        let page = this.props.currentPage
        let count = this.props.pageSize
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${count}`)
        .then(response => {
            this.props.toggleIsFetching(false);
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
            this.props.toggleIsFetching(false);
            let users = response.data.items;
            this.props.setUsers(users)
        })
    }

    render() {
        return (
            <>
                <Users 
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps,
    {   follow, unfollow, 
        setUsers, setCurrentPage,
        setTotalUsersCount,toggleIsFetching
    })(UsersContainer);

