import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import RunnerListContainer from './components/RunnerListContainer/RunnerListContainer';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { Provider } from 'react-redux';
import configureStore from './configurestore';

const store = configureStore();


const App = () => (
    <Provider store={store}>
        <Row>
            <Col md={4}>
                <RunnerListContainer />
            </Col>
            <Col md={8}>
                this is the user info side
            </Col>
        </Row>
    </ Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
