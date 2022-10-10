import React, { Component } from 'react';
import { connect } from "react-redux";

import { followAC, setCurrentPageAC, setTotalusersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

import axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {

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
        return (
            <Users 
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalusersCount: (totalCount) => {
            dispatch(setTotalusersCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);