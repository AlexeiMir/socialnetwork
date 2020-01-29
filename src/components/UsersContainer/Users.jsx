import React from 'react';
import style from './users.module.css';
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../../utils/Paginator/Paginator'
import User from './User'





let Users = ({totalUsersCount,pageSize,currentPage,onPageChanged,users, ...props}) => {
   
        return <div>
        
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} 
            currentPage={currentPage} onPageChanged={onPageChanged}/>

        {users.map(u => <User key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow ={props.unfollow}
                        follow={props.follow} />
       
        )} </div>}



export default Users;






