// (RR - 0) Install react-router-dom `npm install react-router-dom@4.2.2`

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//// (RR - 1) Import `BrowserRouter` from
import {BrowserRouter} from 'react-router-dom'


//// (RR - 2a) Create AppRouter component w/ <App/> component inside <BrowserRouter/>
class AppRouter extends Component{
  render(){
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  }
}

//// (RR - 2b) Pass AppRouter to ReactDOM.render method
ReactDOM.render(<AppRouter/> , document.getElementById('root'));
registerServiceWorker();
