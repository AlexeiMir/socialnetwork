import React from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/UsersContainer/UsersContainer';


const App = () => {

  return (
    
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
  <Route path='/profile' render={ () =><ProfileContainer />} /> 
      <Route path='/dialogs' render={() =><DialogsContainer />}/>
      <Route path='/users' render={() =><UsersContainer />}/>
      <Route path='/news'component={News} />
      <Route path='/music'component={Music} />
      </div>
    </div>
 
  );
}

export default App;
