import React from 'react';
import {followAC,unfollowAC,setUsersAS} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps =(state) => {
    return { 
        users:state.usersProfile.users;
    }

},

let mapDispathToProps =(dispatch) => {

}

const UsersContainer = connect(mapStateToProps,mapDispathToProps)(Users);