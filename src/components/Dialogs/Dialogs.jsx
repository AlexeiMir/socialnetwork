import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {actionCreatorUpdateNewMessage,actionCreatorAddMessage} from './../../redux/state';



const Dialogs = (props) => {
    
    
    let newMessagePost = React.createRef();
    let addMessage = ()=> {
        /*props.addMessage();*/
        props.dispatch(actionCreatorAddMessage());
        
    }

    let onMessageChange = () => {
        let message = newMessagePost.current.value;
       /* props.updateNewMessage(message);*/
       props.dispatch(actionCreatorUpdateNewMessage(message))
    }


  
            let dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/> );
       

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                <textarea ref={newMessagePost} onChange={onMessageChange} name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;