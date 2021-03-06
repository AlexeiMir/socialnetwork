import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {TextareaComponent} from '../../../FormsControls/FormsControls'
import {required,maxLengthCreator} from '../../../utils/validators/validators'
import 'antd/dist/antd.css';
import s from '../Dialogs.module.css'




const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    

    return (
    <form onSubmit={props.handleSubmit}>
    <div>
    
    <Field placeholder="Enter your message" name="newMessageBody" component={TextareaComponent} validate={[required,maxLength50]}  />
    
    </div>
    <div>
        <button className={s.sendMessage}>Send message</button>
    </div> 
    </form>
    )
    }
    const AddMessageFormRedux = reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)

    export default AddMessageFormRedux;

