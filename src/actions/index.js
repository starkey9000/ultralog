export function requestRunners(){
    return{
        type: 'FETCH_RUNNER_DETAILS',
        runnerDetails: []
    };
}

export function receiveRunners(json){
    console.log(json);
    return{
        type: 'RECEIVE_RUNNER_DETAILS',
        runnerDetails: json
    };
}

export function fetchRunners(){
    return dispatch => {
        dispatch(requestRunners())
        return fetch('/users')
        .then(response => response.json())
        .then(json => dispatch(receiveRunners(json)));
    };
}
