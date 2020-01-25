import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css'



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    

    const activateEditeMode =() => {
      
        setEditMode(true);
       

    }

    const deactivateEditeMode =() => {
       
        setEditMode(false);
        props.updateStatus(status);
 
     }

    const onStatusChange = (e) => {
         
        setStatus(e.currentTarget.value)

     }

     useEffect( () => {
        setStatus(props.status)
     },[props.status])

    

        return <div>
            <div>{!editMode &&
                <div>
                 <span onDoubleClick={activateEditeMode}>{props.status || "---"}</span>
                </div>
                }
            </div>
            {editMode &&
           <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode}  value={status}/>
           </div>
           }
        </div>

    
}

export default ProfileStatusWithHooks;