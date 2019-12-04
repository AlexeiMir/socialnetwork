import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

 

const Dialogs = (props) => {
    
    
    let newMessagePost = React.createRef();
    debugger;
    let addMessage = ()=> {
        let textMessage = newMessagePost.current.value;
        alert(textMessage);
    }
  
            let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id}/> );
       

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                <textarea ref={newMessagePost} name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;