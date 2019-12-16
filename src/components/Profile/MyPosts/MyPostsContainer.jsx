import React from 'react';
import MyPosts from './MyPosts';
import {actionCreatorAddPost,actionCreatorUpdateNewPostText} from './../../../redux/profile-reducer';
import StoreContext from './../../../StoreContext';

const MyPostsContainer = (props) => {
  return(
  <StoreContext.Consumer>
   { 
   (store) => {

  let state = store.getState();

  let addPost = () => {
    store.dispatch(actionCreatorAddPost());
  }

  let onPostChange = (text) => {
   store.dispatch(actionCreatorUpdateNewPostText(text));
  }

return <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts ={state.profilePage.posts} 
newPostText ={state.profilePage.newPostText} />
}
}
</StoreContext.Consumer>
)
}

export default MyPostsContainer;
