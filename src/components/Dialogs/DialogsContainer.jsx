import React from 'react';
import {sendMessageCreator} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import {getProfileSelector} from '../../redux/profile-selectors'



const mapStateToProps = (state) =>{
    return {
    dialogsPage: state.dialogsPage,
    profile: getProfileSelector(state)
    
}
}

const mapDispatchTooProps = (dispatch) => {
    return {
        
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}




export default compose(
    connect(mapStateToProps,mapDispatchTooProps),
    /*withAuthRedirect*/
)(Dialogs);