/**

  @name MegaNav
  @description Header navigation

  @memberof Components
  @see {@link MegaNav}
  @author Srinaath Ravichandran <sravichandran@deloitte.com>

  * @example
  * // client/index.js
  * render(
  *   <MegaNav />
  * )
*/

// STYLES

// THIRD-PARTY
import './mega-nav.css';

// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

//REDUX
import * as actions from '../../store/actions/course-actions';

class MegaNav extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      loginTxt: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.transactionData !== nextProps.transactionData) {
      this.setState({
        userData: nextProps.transactionData.userDetails
      });
      let logText = `Hello ${nextProps.transactionData.userDetails.userName} | Balance: ${nextProps.transactionData.userDetails.balance} MC`;
      this.setState({
        loginTxt: logText
      });
    }
  }

  render() {
    return (
      <header className="mega-nav">
        <div className="row">
          <div className="col-lg-4 test-box">
            <h2>CAUSE
              <span>fresh</span>
            </h2>
          </div>

          <div className="col-lg-4 test-box" />

          <div className="col-lg-4 test-box">
            <p>{this.state.loginTxt}</p>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    transactionData: state.courseItems
  };
}


function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MegaNav);
