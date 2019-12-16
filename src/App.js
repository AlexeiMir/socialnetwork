import React from 'react';
import {Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {

  return (
    
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
  <Route path='/profile' render={ () =><Profile />} /> 
      <Route path='/dialogs' render={() =><DialogsContainer />}/>
      <Route path='/news'component={News} />
      <Route path='/music'component={Music} />
      </div>
    </div>
 
  );
}

export default App;
