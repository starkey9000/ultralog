import React, { Component } from 'react';
import RunnerListContainer from './components/RunnerListContainer/RunnerListContainer';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Col md={4}>
                        <RunnerListContainer />
                    </Col>
                    <Col md={8}>
                        this is the user info side
                    </Col>
                </Row>

            </div>
        );
    }
}

export default App;
