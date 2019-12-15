import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'




const MyPosts = (props) => {
  

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    /*props.dispatch(actionCreatorAddPost());*/
   
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
   props.updateNewPostText(text);
   /* props.dispatch(actionCreatorUpdateNewPostText(text));*/

  }


  let postsElements =  props.posts.map( p => <Post message={p.name} likesCounter={p.likesCounter} /> );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
      <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
        <div>
          <button onClick={onAddPost}>Add post</button>
          </div>
      </div>
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )
}

export default MyPosts;
