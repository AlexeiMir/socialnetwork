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

let DialogsData = [
{id: 1, name:'Dimych'},
{id: 2, name:'Alex'},
{id: 3, name:'Nadia'},
{id: 4, name:'Anton'},
{id: 5, name:'Misha'}
]

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Alex" id="2" />
                <DialogItem name="Nadia" id="3" />
                <DialogItem name="Anton" id="4" />
                <DialogItem name="Misha" id="5" />
                
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="What about your project?"/>
                <Message message="Yo"/>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    What about your project?
                </div>
                <div className={s.message}>
                    Cool
                </div>
            </div>

        </div>
    )
}

export default Dialogs;