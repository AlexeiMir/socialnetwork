import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
        <div className={s.item}>
          <img src="https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg"></img>
          {props.message}
          <div>
            <span>like</span>{props.likesCounter}
          </div>
      </div>
  )
}

export default Post;
