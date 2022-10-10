import React from 'react';

import classes from './Users.module.css';
import userAvatar from '../../assets/images/avatar.png';


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

    return (
        <div className={classes.users}>
            <div className={classes.users__container}>
                {props.users.map(user => {
                    return (
                        <div key={user.id} className={classes.user}>
                            <div>
                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} alt="img" />
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
            <div className={classes.pagination}>
                {slicedPages.map((page) => {
                return ( 
                    <span 
                        className={props.currentPage === page && classes.selectedPage}
                        onClick={() => props.onPageChanged(page)}
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

export default Users;
