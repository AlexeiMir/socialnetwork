import React from 'react'

const ProfileDataForm = ({profile}) => {
    return <div>
    <div><button >save</button></div>
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
}

export default ProfileDataForm;