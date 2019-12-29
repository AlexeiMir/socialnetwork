import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile){
  return <Preloader/>
  }
  return (
  <div className={s.descriptionBlock}>
    <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg"></img>

    <div>
      <img src={props.profile.photos.large}/>
      <div>
        {props.profile.aboutMe}
      </div>
      Ava+description
  </div>
 
  </div>
  )
}

export default ProfileInfo;
