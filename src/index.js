import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import App from "./App";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
