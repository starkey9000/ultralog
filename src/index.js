import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import RunnerListContainer from './components/RunnerListContainer/RunnerListContainer';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
    users: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case "FETCH_RUNNERS":
            return{
                users: [
                    {id: 1, username: "Scott Starkey"},
                    {id: 2, username: "Tina Starkey"},
                    {id: 3, username: "Max Starkey"},
                    {id: 4, username: "Hannah Starkey"},
                ]
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
store.dispatch({ type: "FETCH_RUNNERS" })

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
