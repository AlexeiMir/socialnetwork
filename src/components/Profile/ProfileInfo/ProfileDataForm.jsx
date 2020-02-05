import React from 'react'
import { reduxForm } from 'redux-form'
import {Input,Textarea,createField} from '../../../FormsControls/FormsControls'
import s from '../ProfileInfo/ProfileInfo.module.css';
import style from "../../../FormsControls/FormsControls.module.css"

const ProfileDataForm = ({profile,handleSubmit,initialValues,error}) => {
  
    return <form onSubmit={handleSubmit}>
    <div><button >save</button></div>
    {error&&<div className={style.formSummaryError}>
            {error}
        </div>}
  <div>
    <b>Full name</b>:{createField("Full name", "fullName",[], Input )}
  </div>
  <div>
    <b>Looking for a job</b>:{createField("", "lookingForAJob",[], Input,{type: "checkbox"} )}
  </div>
  <div>
    <b>My professionals skills</b>:{createField("My professionals skills", "lookingForAJobDescription",[],
     Textarea )}
  </div>
  <div>
<b>About me</b>:{createField("About me", "aboutMe",[], Textarea )}
</div>
<div> 
  <b>Contacts:</b>{Object.keys(profile.contacts).map(key => {return <div key={key} className={s.contacts}>
    <b>{key}:{createField(key, "contacts."+key,[], Input )}</b></div> })}
</div>

</form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edite-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;