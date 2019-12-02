import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = (props) => {

  let SomeComponent = () =><Dialogs />
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
      <Route path='/profile' component={ () =><Profile posts={props.posts} />} />  
      <Route path='/dialogs' component={() =><Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
      <Route path='/news'component={News} />
      <Route path='/music'component={Music} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
