import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {maxLengthCreator, required} from '../../../../utils/validators/validators'
import {Textarea} from '../../../../FormsControls/FormsControls'
import s from './AddPostForm.module.css'
import 'antd/dist/antd.css';
import {Avatar, Button} from 'antd';

const maxLength10 = maxLengthCreator(10);

const AddPostFormPage = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.postBlock}>
         <Avatar className={s.imagePost} src={props.photos}/>
        <Field className={s.post} placeholder='Add new post' component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder="Post your comment" />
            <button type="primary" className={s.buttonPost} >Add post</button>
        </div>
        </form> 
    )
}

const AddPostFormRedux = reduxForm({
    form: 'profile-add-post'
})(AddPostFormPage)



export default AddPostFormRedux;