import React from 'react'
import { reduxForm } from 'redux-form'
import {InputComponent,Textarea,createField} from '../../../FormsControls/FormsControls'
import s from '../ProfileInfo/ProfileInfo.module.css';
import style from "../../../FormsControls/FormsControls.module.css"

const ProfileDataForm = ({profile,handleSubmit,initialValues,error}) => {
  
    return <form onSubmit={handleSubmit}>
    <div><button >save</button></div>
    {error&&<div className={style.formSummaryError}>
            {error}
        </div>}
        <div className={s.row}>
 <div><b>Full name</b></div>
 <div>:{createField("Full name", "fullName",[], InputComponent )}</div>
</div>
<div className={s.row}>
<div><b>Looking for a job</b></div>
<div>:{createField("", "lookingForAJob",[], InputComponent,{type: "checkbox"} )}</div>
</div>
<div className={s.row}>
<div><b><b>My professionals skills</b></b></div>
<div>:{createField("My professionals skills", "lookingForAJobDescription",[],
     Textarea )}</div>
</div>
<div className={s.row}>
 <div><b>About me</b></div>
 <div>:{createField("About me", "aboutMe",[], Textarea )}</div>
</div>
<div className={s.row}>
 <div><b>Contacts</b>:</div>
</div>
<div className={s.row}>
 <div className={s.contacts} >{Object.keys(profile.contacts).map(key => {return <div key={key} className={s.contacts}>
    <b>{key}:{createField(key, "contacts."+key,[], InputComponent )}</b></div> })}</div>
</div>
</form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edite-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;

/*<div>
    <b>Full name</b>:{createField("Full name", "fullName",[], InputComponent )}
  </div>
  <div>
    <b>Looking for a job</b>:{createField("", "lookingForAJob",[], InputComponent,{type: "checkbox"} )}
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
    <b>{key}:{createField(key, "contacts."+key,[], InputComponent )}</b></div> })}
</div>*/
