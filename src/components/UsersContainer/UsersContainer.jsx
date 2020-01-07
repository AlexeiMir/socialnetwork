import React from 'react';
import {follow,unfollow,getUsers,setCurrentPage,toggleFollowingProgress} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
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
    setCurrentPage,
    unfollow,
    follow,
    toggleFollowingProgress,
    getUsers

})(UsersContainer);