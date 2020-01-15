import React from 'react'
import { reduxForm, Field } from 'redux-form'


const AddPostFormPage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <div><Field placeholder={'post'} component={'textarea'} name={'post'}/></div>
          <div>
            <button >Add post</button>
            </div>
        </div>
        </form> 
    )
}

const AddPostFormRedux = reduxForm({
    form: 'post'
})(AddPostFormPage)

const AddPostForm = (props) => {
    const onSubmit = (dataForm) => {
        console.log(dataForm);
        
    }
return (
    <AddPostFormRedux onSubmit={onSubmit} />
)
}

export default AddPostForm;