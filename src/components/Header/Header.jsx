import React from 'react';
import s from'./Header.module.css';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Button, Col, Row} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';

const Header = (props) => {
    return <header className={s.header}>
        <Row>
            <Col span={6}><img src='http://dietkremlin.ru/img/logo0601.png'></img></Col>
        <Col span={3} offset={15} className={s.loginBlock}>
            {props.isAuth ?
               <Row >
                <Col span={12}>{props.login}</Col>
                <Col span={12}><LogoutOutlined style={{ fontSize: '30px', color: 'white' }} onClick={props.logout} /></Col>
                </Row>
            : <Col span={4}><Button type="link"><NavLink to='/login'>Login</NavLink></Button></Col>
            }
        </Col>
        </Row>
    </header>
}

export default Header;
