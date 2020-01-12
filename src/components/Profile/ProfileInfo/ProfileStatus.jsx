import React from 'react';
import s from './ProfileInfo.module.css'



class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditeMode =() => {
       console.log("this:",this)
       this.setState(
        {editMode: true} 
       )

    }

    deactivateEditeMode() {
        this.setState(
         {editMode: false} 
        )
 
     }



    render() {
        return <div>
            <div>{!this.state.editMode &&
                <div>
                 <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                </div>
                }
            </div>
            {this.state.editMode &&
           <div>
            <input autoFocus={true} onBlur={this.deactivateEditeMode.bind(this)}  value={this.props.status}/>
           </div>
           }
        </div>

    }
}

export default ProfileStatus;