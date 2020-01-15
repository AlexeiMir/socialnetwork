import React from 'react'
import { reduxForm, Field } from 'redux-form'

const AddMessageFormPage = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
        <Field component={"textarea"} placeholder={"message"} name={"message"} />
        </div>
        <div>
            <button>Send</button>
        </div>
        </form>
    )
}

const addMessageReduxForm = reduxForm({
    form: 'addmessage'
})(AddMessageFormPage);

const AddMessageForm = (props) => {
    const onSubmit = (dataForm) => {
    console.log(dataForm);
    
}
    return ( <div>
        <addMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default AddMessageForm;
