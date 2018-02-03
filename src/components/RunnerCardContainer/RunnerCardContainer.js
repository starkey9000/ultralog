import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


class RunnerCardContainer extends Component{
    constructor( props ){
        super( props );
    }

    render(){
        const { d } = this.props.info[0];
        console.log(d);

        return(
            <Row>
                <Col md={12}>
                    <FontAwesome name="male" size="3x" /><p>name</p>
                    <FontAwesome name="female" size="3x" /><p>Runner Name</p>

                </Col>
            </Row>
        );
    }
}

export default RunnerCardContainer;
