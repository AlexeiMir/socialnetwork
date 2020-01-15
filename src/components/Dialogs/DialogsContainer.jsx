import React from 'react';
import {updateNewMessageBodyCreator,sendMessageCreator} from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';



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




export default compose(
    connect(mapStateToProps,mapDispatchTooProps),
    /*withAuthRedirect*/
)(Dialogs);