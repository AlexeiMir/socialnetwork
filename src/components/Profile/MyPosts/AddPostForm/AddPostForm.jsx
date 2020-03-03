import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {maxLengthCreator, required} from '../../../../utils/validators/validators'
import {Textarea} from '../../../../FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10);

const AddPostFormPage = (props) => {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <div><Field placeholder='Add new post' component={Textarea} name='newPostText' validate={[required, maxLength10]} placeholder="Add new post" /></div>
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