import React from 'react';
import s from'./Header.module.css';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const Header = (props) => {
    return <header className={s.header}>
        <img src='http://dietkremlin.ru/img/logo0601.png'></img>
        <div className={s.loginBlock}>
            {props.isAuth ?
            <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
            : <Button type="link"><NavLink to='/login'>Login</NavLink></Button>
            }
        </div>
    </header>
}

export default Header;
