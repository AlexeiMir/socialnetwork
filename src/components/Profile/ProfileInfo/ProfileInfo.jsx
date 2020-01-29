import React  from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile,status,updateStatus}) => {
 
  if (!profile){
  return <Preloader/>
  }
  return (
  <div className={s.descriptionBlock}>    
    <div>
      
      <img src={profile.photos.large}/>
      <div>
        {profile.aboutMe}
      </div>
      Ava+description

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
  </div>
 
  </div>
  )
}

export default ProfileInfo;
