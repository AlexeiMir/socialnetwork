import React from 'react'
import { reduxForm, Field } from 'redux-form'


const AddPostFormPage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <div><Field placeholder='Add new post' component={'textarea'} name={'newPostText'}/></div>
          <div>
            <button >Add post</button>
            </div>
        </div>
        </form> 
    )
}

const AddPostFormRedux = reduxForm({
    form: 'add-post-form'
})(AddPostFormPage)



export default AddPostFormRedux;