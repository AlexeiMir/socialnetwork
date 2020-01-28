import React from 'react';
import style from './users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../../utils/Paginator/Paginator'





let Users = (totalUsersCount,pageSize,currentPage,onPageChanged, ...props) => {
        return <div>
        
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>

        {props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/'+ u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                </div>
                </NavLink>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                            props.unfollow(u.id);
                             }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
        
        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div> {u.name} </div>
                    <div> {u.status} </div>
                </span>
                <span>
                    <div> "u.location.country" </div>
                    <div> "u.location.city" </div>
                </span>
            </span>
        </div>
        )} </div>}



export default Users;






