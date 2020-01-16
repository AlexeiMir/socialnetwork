import React from 'react';
import MyPosts from './MyPosts';
import {actionCreatorAddPost} from './../../../redux/profile-reducer';
import { connect } from 'react-redux';



const mapStateToProps = (state) =>{
return {
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
}
}

const mapDispatchTooProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(actionCreatorAddPost(newPostText))
    }
    
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchTooProps) (MyPosts);



export default MyPostsContainer;
