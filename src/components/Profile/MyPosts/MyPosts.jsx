import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = () => {

  let posts = [
    {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
    {id: 2, name:"It's my first post", likesCounter: '47'}
  ]; 

  let postsElements =  posts.map( p =><Post message={p.name} likesCounter={p.likesCounter} /> )

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )
}

export default MyPosts;
