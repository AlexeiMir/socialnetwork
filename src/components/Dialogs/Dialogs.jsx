import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

import { Field, reduxForm } from 'redux-form';






const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }
    

            let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id}/> );
        let newMessageBody = props.dialogsPage.newMessageBody;
       
    

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}> 
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

        
    )
}

const AddMessageForm = (props) => {

    return (
    <form onSubmit={props.handleSubmit}>
    <div>
    <Field placeholder="Enter your message" name="newMessageBody" component="textarea" />
    </div>
    <div>
        <button>Send message</button>
    </div> 
    </form>
    )
    }
    const AddMessageFormRedux = reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)

export default Dialogs;