import React from 'react';
import s from './Post.module.css';
import 'antd/dist/antd.css';
import { Comment, Tooltip, Avatar } from 'antd';



const Post = (props) => {
  return (
        <div className={s.item}>
        <Comment content={props.message} author={<a>{props.fullName}</a>} avatar={
          <Avatar
            src={props.photos}
            alt={props.fullName}
          />
        }
        
        />
        
    
      </div>
  )
}

export default Post;



