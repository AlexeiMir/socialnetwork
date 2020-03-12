import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm/AddMessageForm'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Preloader from '../common/Preloader/Preloader'







const Dialogs = (props) => {

   

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);

    }
    

            let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
        let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} id={m.id}  /> );
        let newMessageBody = props.dialogsPage.newMessageBody;
       
    

    return (
        <Row className={s.dialogs}>
            <Col span={6} className={s.dialogsItems}>
               {dialogsElements}
            </Col>
            <Col span={12} className={s.messages}> 
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage}/>
            </Col>
        </Row>

        
    )
}


export default Dialogs;