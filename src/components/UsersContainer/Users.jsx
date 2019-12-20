import React from 'react';
import UsersContainer from './UsersContainer';
import style from './usersmodule.css';



let Users = (props) => {
    if  (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: 'https://i08.fotocdn.net/s113/0caef68e3cadf202/user_m/2560307574.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city:'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl:'https://i08.fotocdn.net/s113/0caef68e3cadf202/user_m/2560307574.jpg',
                followed: true,
                fullName: 'Anton',
                status: 'I am a boss too',
                location: {city:'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl:'https://i08.fotocdn.net/s113/0caef68e3cadf202/user_m/2560307574.jpg',
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city:'Kiev', country: 'Ukraine'}
            }
        ]
        )
    }
    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={StyleSheet.userPhoto}/>
                </div>
                <div>
                    {u.followed 
                    ? <button onClick ={ () => {
                        props.unfollow(u.id)}}>Unfollow</button>
                    :   <button onClick ={ () => {
                        props.follow(u.id)}}>Follow</button>
                }
                </div>
            </span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
            </span>
        </div>)
    }
    </div>
}

export default Users;


