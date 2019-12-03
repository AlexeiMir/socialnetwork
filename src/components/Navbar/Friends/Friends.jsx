import React from 'react';
import s from './Friends.module.css';
import {NavLink} from 'react-router-dom';

const Friends = (props) => {
 

  return <div className={s.friends}>
    <div className={s.friendsItems}>
    {props.friend}
    </div>
  </div>
}

export default Friends;
