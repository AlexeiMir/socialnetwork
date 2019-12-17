import React from 'react';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



const mapStateToProps = (state) =>{
    return {
    dialogsPage: state.dialogsPage
}
}

const mapDispatchTooProps = (dispatch) => {
    return {
        updateNewMessageBody = (body) =>{
            dispatch(updateNewMessageBodyCreator(body)) 
        },
        sendMessage = () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchTooProps)(Dialogs);


export default DialogsContainer;