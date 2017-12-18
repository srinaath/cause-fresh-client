// THIRD-PARTY
import React, { Component } from 'react';

// STYLES
import './home-container.css';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <small>
          You are running this application in{' '}
          <b>{process.env.REACT_APP_SECRET_CODE}</b> mode.
        </small>
      </div>
    );
  }
}

export default HomeContainer;
