import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {maxLengthCreator, required} from '../../../../utils/validators/validators'
import {Textarea} from '../../../../FormsControls/FormsControls'
import s from './AddPostForm.module.css'

const maxLength10 = maxLengthCreator(10);

const AddPostFormPage = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <div ><Field className={s.post} placeholder='Add new post' component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder="Post your comment" /></div>
          <div>
            <button >Add post</button>
            </div>
        </div>
        </form> 
    )
}

const AddPostFormRedux = reduxForm({
    form: 'profile-add-post'
})(AddPostFormPage)



export default AddPostFormRedux;