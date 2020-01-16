import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostForm/AddPostForm'




const MyPosts = (props) => {
  


  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  


  let postsElements =  props.posts.map( p => <Post message={p.name} likesCounter={p.likesCounter} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost} />
      
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )
}

export default MyPosts;
