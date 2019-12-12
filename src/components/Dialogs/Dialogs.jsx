import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../redux/state';




const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;
    
    
    let  onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
        
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));

      
    }


  
            let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/> );
        let newMessageBody = state.newMessageBody;
       

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