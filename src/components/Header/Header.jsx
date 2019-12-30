import React from 'react';
import s from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return <header className={s.header}>
        <img src='http://dietkremlin.ru/img/logo0601.png'></img>
        <div className={s.loginBlock}>
            <NavLink>Login</NavLink>
        </div>
    </header>
}

export default Header;
