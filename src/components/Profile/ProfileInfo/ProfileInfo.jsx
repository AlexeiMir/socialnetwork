import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
  <div>
    <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg"></img>

    <div className={s.descriptionBlock}>
      Ava+description
  </div>
 
  </div>
  )
}

export default ProfileInfo;
