import React, { Component } from 'react';
import {Route, withRouter,BrowserRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/UsersContainer/UsersContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux'
import { compose } from 'redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import {Provider} from 'react-redux';
import store from './redux/redux-store'
import {withSuspense} from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {

  componentDidMount() {
     this.props.initializeApp(); 
} 


  render() {
    if (!this.props.initialized) {
      return <Preloader/>
     }
    return(
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
  <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} /> 
      <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
      <Route path='/users' render={() =><UsersContainer />}/>
      <Route path='/news'component={News} />
      <Route path='/music'component={Music} />
      <Route path='/login' render ={()=><Login/>} />
      </div>
    </div>)
 
  };
}

const mapStateToProps = (state) => ({
 
  initialized: state.app.initialized
  
})

let AppContainer = compose(
  withRouter,
connect(mapStateToProps,{initializeApp}))(App)

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
  <Provider store = {store}><AppContainer /></Provider>
  </BrowserRouter>
}

export default SamuraiJSApp;

