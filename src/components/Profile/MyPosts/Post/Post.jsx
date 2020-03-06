import React from 'react';
import s from './Post.module.css';
import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';



const Post = (props) => {
  return (
        <div className={s.item}>
        <Comment content={props.message} author={<a>Alex</a>} avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Alex"
          />
        }
        
        />
        
    
      </div>
  )
}

export default Post;



      /*<div className={s.item}><img src="https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg"></img>
      {props.message}
      <div>
        <span>like</span>{props.likesCounter}
      </div></div>*/