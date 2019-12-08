import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost,addMessage,updateNewPostText,updateNewMessage} from './redux/state';


export let renderEntireTree = (state) => {
ReactDOM.render(<BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
    updateNewMessage={updateNewMessage} addMessage={addMessage}/></BrowserRouter>, document.getElementById('root'));
}



serviceWorker.unregister();
