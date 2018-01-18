import React, { Component } from 'react';
import { connect } from 'react-redux';


class RunnerListContainer extends Component {

    render() {
        return (
              <div>
                 <h1>Runner List</h1>
                 <ul>
                     {this.props.users.map(user =>
                        <li key={user.id}>{user.username}</li>
                     )}
                 </ul>
              </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps)(RunnerListContainer);
