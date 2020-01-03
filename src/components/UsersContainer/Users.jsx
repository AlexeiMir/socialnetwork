import React from 'react';
import style from './users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios'
import {usersAPI} from '../../api/api'




let Users = (props) => {

    
       let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
       let pages = [];
       for (let i=1;i<=pagesCount;i++) {
            pages.push(i);
       }
    


        return <div>
            <div>
                {pages.map(p =>{
                return <span className={(props.currentPage === p) && style.selectedPage} onClick = {(e) =>{props.onPageChanged(p)}}>{p}</span>})}
            </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <NavLink to={'/profile/'+ u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.userPhoto} />
                </div>
                </NavLink>
                <div>
                    {u.followed ?
                        <button onClick={() => { 
                            /*axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}
                            `,{withCredentials:true, headers: {'API-KEY':'9aa0b454-6ceb-4bde-96c6-c40c83a0a7db'}}).*/
                            usersAPI.unfollowUser(u.id).then(data =>{
                                if (data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                            })
                             }}>Unfollow</button> :
                        <button onClick={() => {
                            /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}
                            `,{},{withCredentials:true, headers: {'API-KEY':'9aa0b454-6ceb-4bde-96c6-c40c83a0a7db'}}).*/
                            usersAPI.followUser(u.id).then(data =>{
                                if (data.resultCode == 0) {
                props.follow(u.id)
            }
        });  }}>Follow</button>}
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






