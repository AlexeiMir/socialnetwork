import React from 'react';
import {followAC,unfollowAC,setUsersAC,setCurrentPageAC} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps =(state) => {
    return { 
        users:state.usersPage.users,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }

}

let mapDispathToProps =(dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers : (users) => {
            dispatch(setUsersAC(users));
        },

        setCurrentPage : (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        } 
        
    }


}

export default connect(mapStateToProps,mapDispathToProps)(Users);