// THIRD-PARTY
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import LeftNav from '../../components/left-nav/left-nav';

// STYLES
import './donations-container.css';

class DonationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div id="DonationsContainer">
        <div className="row">
          <LeftNav />
          <div className="col-xs-9 mainContentWrapper">
            <h1>
              <i className="fa fa-dollar" />&nbsp; Donations
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default DonationsContainer;
