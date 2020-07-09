import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Import smooth scrolling
// import Scrollbar from 'smooth-scrollbar';
// Scrollbar.init(document.querySelector('#custom-scrollbar'));

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>< App /></Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
