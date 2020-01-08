import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';






const Dialogs = (props) => {
    
    
    let  onSendMessageClick = ()=> {
        props.sendMessage();
        
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
            let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id}/> );
        let newMessageBody = props.dialogsPage.newMessageBody;
       
    if (!props.isAuth) {return <Redirect to="/login" />}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}> 
                {messagesElements}
                <div>
                <textarea onChange={onNewMessageChange} placeholder="Введите ваше сообщение" value={newMessageBody}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;