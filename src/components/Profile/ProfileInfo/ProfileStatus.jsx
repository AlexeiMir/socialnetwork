import React from 'react';
import s from './ProfileInfo.module.css'



class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditeMode() {
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
                 <span onDoubleClick={this.activateEditeMode.bind(this)}>{this.props.status}</span>
                </div>
                }
            </div>
            {this.state.editMode &&
           <div>
            <input onBlur={this.deactivateEditeMode.bind(this)} autoFocus={true} value={this.props.status}/>
           </div>
           }
        </div>

    }
}

export default ProfileStatus;