import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {maxLengthCreator, required} from '../../../../utils/validators/validators'


const AddPostFormPage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <div><Field placeholder='Add new post' component={'textarea'} name='newPostText' validate={[required, maxLengthCreator(10)]}/></div>
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