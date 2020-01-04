import React from 'react';
import {follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleIsFetching,toggleFollowingProgress} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        }); 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data =>{
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }


    

    render() { 
      return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount ={this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    follow = {this.props.follow} 
                    unfollow = {this.props.unfollow}
                    users = {this.props.users}
                    toggleFollowingProgress = {this.props.toggleFollowingProgress}
                    followingInProgress = {this.props.followingInProgress}

      />
      </>

    }
}

let mapStateToProps =(state) => {
    return { 
        users:state.usersPage.users,
        totalUsersCount:state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }

}

/*let mapDispathToProps =(dispatch) => {
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
        },

        toggleIsFetching : (isFetching) => {
            dispatch(toggleIsFetchingAS(isFetching));

        }
        
    }


} 
*/

export default connect(mapStateToProps, { 
    toggleIsFetching,
    setTotalUsersCount,
    setCurrentPage,
    setUsers,
    unfollow,
    follow,
    toggleFollowingProgress

})(UsersContainer);