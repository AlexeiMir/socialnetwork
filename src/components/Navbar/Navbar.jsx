import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import 'antd/dist/antd.css';

import { Menu, Switch } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} 
from '@ant-design/icons';


const { SubMenu } = Menu;




class Navbar extends React.Component {
  state = {
    mode: 'inline',
    theme: 'light',
  };

  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline',
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  
  render() {
  return <nav className={s.nav}>
      <Menu style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode={this.state.mode} theme={this.state.theme}>
      
    <Menu.Item key="1" >
    <NavLink to="/profile" activeClassName={s.active}>
      <MailOutlined />
      Profile
      </NavLink>
      </Menu.Item>
     
    <Menu.Item key="2">
    <NavLink  to="/dialogs" activeClassName={s.active}>
            <CalendarOutlined />
      Messages
      </NavLink>
      </Menu.Item>
    
    <Menu.Item key="1">
    <NavLink  to="/users" activeClassName={s.active}>
      <MailOutlined />
      users
      </NavLink>
      </Menu.Item>
    
    <Menu.Item key="1">
    <NavLink to="/news" activeClassName={s.active}>
      <MailOutlined />
      News
      </NavLink>
      </Menu.Item>
    
    <Menu.Item key="1">
    <NavLink to="/music">
      <MailOutlined />
      Music
      </NavLink>
      </Menu.Item>
    
    
    </Menu>
  </nav>
  }
}

export default Navbar;
