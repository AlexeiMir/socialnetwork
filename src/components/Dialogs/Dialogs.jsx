import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let  path = "/dialogs/" + props.id;

return (
    <div className={s.item + ''+s.active}>
                   <NavLink to={path}>{props.name}</NavLink> 
                </div>
)

}

const Message = (props) => {
    return (
        <div className={s.message}>
                   {props.message}
                </div>
    )
}

 

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name:'Dimych'},
        {id: 2, name:'Alex'},
        {id: 3, name:'Nadia'},
        {id: 4, name:'Anton'},
        {id: 5, name:'Misha'}
        ];
        
        let messages = [
            {id: 1, message:'Hi'},
            {id: 2, message:'What about your project'},
            {id: 3, message:'Yo'}
            ];

            let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;