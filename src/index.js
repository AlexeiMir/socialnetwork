import state from './redux/state';
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


renderEntireTree(state);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
