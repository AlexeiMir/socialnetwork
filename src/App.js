import React from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = (props) => {

  return (
    
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar} />
      <div className="app-wrapper-content">
      <Route path='/profile' render={ () =><Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />  
      <Route path='/dialogs' render={() =><Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}
      updateNewMessage={props.updateNewMessage} addMessage={props.addMessage} />}/>
      <Route path='/news'component={News} />
      <Route path='/music'component={Music} />
      </div>
    </div>
 
  );
}

export default App;
