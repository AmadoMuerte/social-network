import React from 'react';

import classes from './Users.module.css';
import userAvatar from '../../assets/images/avatar.png';
import Preloader from '../common/Preloader/Preloader';
import Pagination from '../common/pagination/Pagination';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let curP = props.currentPage;
        let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
        let curPL = curP + 5;
        let slicedPages = pages.slice( curPF, curPL);

        let users;     
        if (props.isFetching) {
            users = <Preloader isFetching={props.isFetching}/>
        } else {
            users =
                <>
                    <div className={classes.users__container}>
                        {props.users.map(user => {
                            return (
                                <div key={user.id} className={classes.user}>
                                    <div>
                                        <NavLink to={'/profile/' + user.id}>
                                            <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt="img" />
                                        </NavLink>
                                    </div>
                                    <div>
                                        { user.followed ?
                                        <button onClick={() => {props.follow(user.id)}}>Follow</button> : 
                                        <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> }
                                    </div>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                            )
                        })}
                    </div>
                    <Pagination 
                        slicedPages={slicedPages} 
                        onPageChanged={props.onPageChanged}
                        currentPage={props.currentPage}
                    />
                </>   
        }

    return (
        <div className={classes.users}>
            {users}
        </div>
    );
}

export default Users;
