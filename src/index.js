import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Navigation from './Navigation';
import rootReducer from './reducers/index';
import configureStore from "./configurestore";



const store = configureStore();

const App = () => (
    <Provider store={ store }>
        <Navigation />
    </Provider>
);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
