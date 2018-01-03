// THIRD-PARTY
import React, { Component } from 'react';

// STYLES
import './home-container.css';

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      course: {title: null}
    };
  }


  render() {
    return (
      <div>
        <h1>
          Courses
        </h1>
      </div>
    );
  }
}

export default HomeContainer;
