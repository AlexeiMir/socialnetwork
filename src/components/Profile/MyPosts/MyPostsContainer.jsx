import React from 'react';
import MyPosts from './MyPosts';
import {actionCreatorAddPost,actionCreatorUpdateNewPostText} from './../../../redux/profile-reducer';

const MyPostsContainer = (props) => {


  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(actionCreatorAddPost());
  }

  let onPostChange = (text) => {
   props.store.dispatch(actionCreatorUpdateNewPostText(text));
  }

return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts ={state.profilePage.posts} 
newPostText ={state.profilePage.newPostText} />
}

export default MyPostsContainer;
