import { combineReducers } from 'redux';

const initialRunnerDetailsState = {
    isLoading: false,
    showDetails: false,
    runnerDetails: []
}

function receivedRunnerDetails( state = initialRunnerDetailsState , action ){
    switch(action.type){
        case "FETCH_RUNNER_DETAILS":
            return Object.assign({}, state, {
                isLoading: true,
                showDetails: false,
                runnerDetails: action.runnerDetails
            });
        case "RECEIVE_RUNNER_DETAILS":
            return Object.assign({}, state, {
                isLoading: false,
                showDetails: true,
                runnerDetails: action.runnerDetails
            });
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    receivedRunnerDetails,
});

export default rootReducer;
