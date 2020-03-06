import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostForm/AddPostForm'




const MyPosts = React.memo (props =>  {

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  


  let postsElements =  [...props.posts].reverse().map( p => <Post key={p.id} message={p.message} likesCounter={p.likesCounter} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={onAddPost} />
      
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )

})

export default MyPosts;
