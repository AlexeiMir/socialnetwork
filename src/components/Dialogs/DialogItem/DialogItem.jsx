import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

    let  path = "/dialogs/" + props.id;

return (
    <div className={s.item + ''+s.active}>
      <img src="https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg"></img>
                   <NavLink to={path}>{props.name}</NavLink> 
                </div>
)

}


export default DialogItem;