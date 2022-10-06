
import classes from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    fullName: 'Boris', status: 'i am a boss', followed: false, photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                    location: {city:'Minsk', country: 'Belarus'},  likesCount: 25, id: 1
                },
                {
                    fullName: 'Andrey',status: 'i am a boss', followed: true,  photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                    location: {city:'Minsk', country: 'Belarus'},  likesCount: 25, id: 2
                },
                {
                    fullName: 'Kirill', status: 'i am a boss', followed: false, photoUrl: 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg',
                    location: {city:'Minsk', country: 'Belarus'},  likesCount: 25, id: 3
                }
            ])
    }
    
    return (
        <div className={classes.users}>
            {props.users.map(user => {
                return (
                    <div key={user.id}>
                        <span>
                            <div>
                                <img src={user.photoUrl} alt="img" />
                            </div>
                            <div>
                                { user.followed ?
                                    <button onClick={() => {props.follow(user.id)}}>Follow</button> : 
                                    <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.fullName}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{user.location.country}</div>
                                <div>{user.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
}

export default Users;
