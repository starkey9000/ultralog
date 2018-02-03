import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { fetchRunners } from '../../actions/index.js'
import RunnerCardContainer from '../RunnerCardContainer/RunnerCardContainer';




class RunnerListContainer extends Component {
    constructor(props){
        super(props);
        this.props.dispatch( fetchRunners() );
    }

    render() {

        const { isLoading, showDetails, runnerDetails } = this.props;
        //console.log(runnerDetails);

        return (
              <div style={{backgroundColor: '#ccc'}}>
                  <h1>Runner List</h1>
                  {isLoading && (
                      <h2>
                          Loading Runners...<FontAwesome name="spinner" spin size="3x" />
                      </h2>
                  )}
                  {!isLoading && showDetails && runnerDetails && (
                      <RunnerCardContainer info={runnerDetails}/>
                    //   <ul>
                    //       {this.props.runnerDetails.map(runner =>
                    //          <li key={runner.id}>{runner.username}</li>
                    //       )}
                    //   </ul>
                  )}
              </div>
        );
    }
}

const mapStateToProps = state => {
    const { receivedRunnerDetails } = state;
    console.log(state);
    const { isLoading, showDetails, runnerDetails } = receivedRunnerDetails || {
        isLoading: true,
        showDetails: false,
        runnerDetails: []
    };
    return{
        isLoading,
        showDetails,
        runnerDetails: runnerDetails
    };
}

export default connect(mapStateToProps)(RunnerListContainer);
