import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm'
import { Button,Descriptions } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';




const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto,saveProfile}) => {

  let [editMode, setEditMode] = useState(false);
 
  if (!profile){
  return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
      saveProfile(formData).then( () => {
      setEditMode(false)})
  }

  return (
  <div className={s.descriptionBlock}>    
    <Row>
    <Col span={24}>
      <img src={profile.photos.large || userPhoto} className ={s.mainPhoto}/>
      </Col>
      </Row>
      

      

      <div className={s.descriptionPerson}>
      <Row>
    <Col span={8}>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          </Col>
          <Col span={8}>
          {isOwner && <input className={s.fileContainer} type={"file"} onChange={onMainPhotoSelected}/>}
          </Col>
      </Row>
      <Row>
    <Col span={24}>
      {editMode ?
      <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
      :<ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}} />}
      </Col>
      </Row>
      
      
     
  </div>
 
  </div>
  )
}

const Contact = ({contactTitle,contactValue}) => {
       return <div><b>{contactTitle}</b>:{contactValue}</div>
}

const ProfileData = ({profile,isOwner,goToEditMode}) => {
  return <div className={s.profileDescription}>
      <div className={s.firstDescription}>
    <div className={s.row}>
    <div><b>Full name</b></div>
    <div>{profile.fullName}</div>
  </div>
<div className={s.row}>
  <div><b>Looking for a job</b></div>
  <div>{profile.lookingForAJob? "yes" : "no"}</div>
</div>
{profile.lookingForAJob && <div className={s.row}>
  <div><b><b>My professionals skills</b></b></div>
  <div>{profile.lookingForAJobDescription}</div>
</div>}
<div className={s.row}>
    <div><b>About me</b></div>
    <div>{profile.aboutMe}</div>
  </div>
  {isOwner&&<div><Button type="primary" onClick={goToEditMode}>edit</Button></div>}
      </div>
      <div className={s.secondDescription}>
  <div className={s.row}>
    <div><b>Contacts</b>:</div>
  </div>
  <div className={s.row}>
    <div className={s.rowContacts} >{Object.keys(profile.contacts).map(key => { return <Contact
key = {key} contactTitle ={key} contactValue = {profile.contacts[key]} />} )}</div>
  </div>
      </div>
</div>
}





export default ProfileInfo;


/* 

 <div className={s.descriptionPerson}>
  <div>
    <b>Full name</b>:{profile.fullName}
  </div>
  <div>
    <b>Looking for a job</b>:{profile.lookingForAJob? "yes" : "no"}
  </div>
  {profile.lookingForAJob && <div>
    <b>My professionals skills</b>:{profile.lookingForAJobDescription}
  </div>}
  <div>
<b>About me</b>:{profile.aboutMe}
</div>
<div className={s.contacts}>
<b>Contacts</b>: {Object.keys(profile.contacts).map(key => { return <Contact 
key = {key} contactTitle ={key} contactValue = {profile.contacts[key]} />} )}
</div>
</div>



}*/