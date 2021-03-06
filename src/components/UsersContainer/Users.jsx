import React from 'react';
import Paginator from '../../utils/Paginator/Paginator'
import User from './User'





let Users = ({totalItemsCount,pageSize,currentPage,onPageChanged,users, ...props}) => {
   
        return <div>
        
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} 
            currentPage={currentPage} onPageChanged={onPageChanged}/>

        {users.map(u => <User key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow ={props.unfollow}
                        follow={props.follow} />
       
        )} </div>}



export default Users;






