import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostFormRedux from './AddPostForm/AddPostForm'
import Preloader from "../../common/Preloader/Preloader";




const MyPosts = React.memo (props =>  {

    if (!props.profile){
        return <Preloader/>
    }

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }




  let postsElements =  [...props.posts].reverse().map( p => <Post key={p.id}
                                                                  message={p.message} likesCounter={p.likesCounter}
                                                                  photos={props.profile.photos.small}
                                                                  fullName={props.profile.fullName} /> );

  return (
    <div className={s.postsBlock}>
      {/*<h3>My posts</h3>*/}
      <AddPostFormRedux onSubmit={onAddPost} photos={props.profile.photos.small} />
      
      <div className={s.posts}>
    {postsElements}
     </div>
   </div >
    
  )

})

export default MyPosts;
