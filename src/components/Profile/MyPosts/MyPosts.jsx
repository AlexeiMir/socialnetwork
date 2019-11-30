import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {

  let postData = [
    {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
    {id: 2, name:"It's my first post", likesCounter: '47'}
  ]; 

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
    <Post message={postData[0].name} likesCounter={postData[0].likesCounter} />
    <Post message={postData[1].name} likesCounter={postData[1].likesCounter} />
     </div>
   </div >
    
  )
}

export default MyPosts;
