import React from 'react';
import s from './../Dialogs.module.css';




const Message = (props) => {
    return (
        <div className={s.message}>
                  <span className={s.messageBody}> {props.id} {props.message} </span>
                </div>
    )
}

 



export default Message;