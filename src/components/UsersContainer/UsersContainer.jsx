import React from 'react';
import {followAC,unfollowAC,setUsersAC,setCurrentPageAC,setTotalUsersCountAC} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import * as axios from 'axios';

class UsersContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}
        `).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        }); 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
        });
    }


    

    render() { 
      return <Users totalUsersCount ={this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    follow = {this.props.follow} 
                    unfollow = {this.props.unfollow}
                    users = {this.props.users}
      />

    }
}

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
        }, 

        setTotalUsersCount : (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
        
    }


}

export default connect(mapStateToProps,mapDispathToProps)(UsersContainer);