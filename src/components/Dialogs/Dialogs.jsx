import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let  path 

return (
    <div className={s.item}>
                   <NavLink to="/dialogs/2">{props.name}</NavLink> 
                </div>
)

}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimych" />
                <div className={s.item +' '+s.active}>
                   <NavLink  to="/dialogs/1">Dimych</NavLink> 
                </div>
                <div className={s.item}>
                   <NavLink to="/dialogs/2">Alex</NavLink> 
                </div>
                <div className={s.item}>
                <NavLink to="/dialogs/3">Miha</NavLink> 
                </div>
                <div className={s.item}>
                <NavLink to="/dialogs/4">Toha</NavLink> 
                </div>
            </div>
            <div className={s.messages}>
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