import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile){
  return <Preloader/>
  }
  return (
  <div className={s.descriptionBlock}>    
    <div>
      <img src={props.profile.photos.large}/>
      <div>
        {props.profile.aboutMe}
      </div>
      Ava+description

      <ProfileStatus status='Hey'/>
  </div>
 
  </div>
  )
}

export default ProfileInfo;
