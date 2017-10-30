import {BrowserRouter} from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class AppRouter extends Component {
  render(){
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<AppRouter/> , document.getElementById('root'));
registerServiceWorker();
