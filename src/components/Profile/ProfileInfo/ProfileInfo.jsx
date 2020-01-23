import React  from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


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

      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
  </div>
 
  </div>
  )
}

export default ProfileInfo;
