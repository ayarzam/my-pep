import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('node env: ', process.env.NODE_ENV);
console.log('host url: ', process.env.REACT_APP_HOST_URL);

if (process.env.NODE_ENV === 'production') {
  if ((process.env.REACT_APP_HOST_URL === window.location.host) && (window.location.protocol !== "https:")){
    window.location.protocol = "https:";
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
        < App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
