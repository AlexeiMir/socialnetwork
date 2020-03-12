import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const DialogItem = (props) => {

    let  path = "/dialogs/" + props.id;

return (<Row gutter={[16, 16]}><Col span={24}> 
    <Avatar className={s.item + ''+s.active} icon={<UserOutlined />}/>
                   <NavLink to={path}>{props.name}</NavLink> 
                   </Col>
                   </Row>          
)

}


export default DialogItem;