import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
  let friendsItem = props.state.friends.map( f => <Friends friend={f.friend} id={f.id} /> );

  return <nav className={s.nav}>
    <div className={`${s.item} ${s.active}`}>
      <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink  to="/dialogs" activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music">Music</NavLink>
    </div>
    <div className={s.item}>
      <a href="/settings">Settings</a>
    </div>
    <div>
    <h3>My friends</h3>
    {friendsItem}
    </div>
    
 
    
  </nav>
}

export default Navbar;
