import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( <BrowserRouter> <Provider> <App /></Provider></BrowserRouter> , div);
  ReactDOM.unmountComponentAtNode(div);
});
