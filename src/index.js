import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

/*let dialogs = [
    {id: 1, name:'Dimych'},
    {id: 2, name:'Alex'},
    {id: 3, name:'Nadia'},
    {id: 4, name:'Anton'},
    {id: 5, name:'Misha'}
    ];

    let messages = [
        {id: 1, message:'Hi'},
        {id: 2, message:'What about your project'},
        {id: 3, message:'Yo'}
        ];


        let posts = [
            {id: 1, name:'Hi, how are you?',   likesCounter: '325'},
            {id: 2, name:"It's my first post", likesCounter: '47'}
          ]; */

ReactDOM.render(<BrowserRouter><App state={state} /></BrowserRouter>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
