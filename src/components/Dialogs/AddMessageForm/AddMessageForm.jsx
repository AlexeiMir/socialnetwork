import React from 'react'
import { reduxForm, Field } from 'redux-form'



const AddMessageForm = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
    <div>
    <Field placeholder="Enter your message" name="newMessageBody" component="textarea"  />
    </div>
    <div>
        <button>Send message</button>
    </div> 
    </form>
    )
    }
    const AddMessageFormRedux = reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)

    export default AddMessageFormRedux;

