import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
  

  let newPostElement = React.createRef();

  let addPost = () => {
   
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = ' ';
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);

  }


  let postsElements =  props.posts.map( p => <Post message={p.name} likesCounter={p.likesCounter} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
        <div>
          <button onClick={addPost}>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )
}

export default MyPosts;
