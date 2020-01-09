import React from 'react';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'



const mapStateToProps = (state) =>{
    return {
    dialogsPage: state.dialogsPage,
    
}
}

const mapDispatchTooProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreator(body)) 
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer = connect(mapStateToProps,mapDispatchTooProps)(AuthRedirectComponent);


export default DialogsContainer;