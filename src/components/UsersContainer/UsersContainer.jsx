import React from 'react';
import {follow,unfollow,requestUsers,setCurrentPage,toggleFollowingProgress} from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import {getUsers,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress,getPageSize} from '../../redux/users-selectors'



class UsersContainer extends React.Component {


    componentDidMount() {
       // this.props.requestUsers(this.props.currentPage,this.props.pageSize)
        const {currentPage,pageSize} = this.props
        this.props.requestUsers(currentPage,pageSize)

    }

    onPageChanged = (pageNumber) => {
        //this.props.requestUsers(pageNumber,this.props.pageSize);
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber,pageSize);

    }


    

    render() { 
        console.log("USERS");
        
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
        users: getUsers(state),
        totalUsersCount:getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching : getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { 
        setCurrentPage,
        unfollow,
        follow,
        toggleFollowingProgress,
        requestUsers
    })
)(UsersContainer);

 