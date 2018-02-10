/**

  @name LeftNav
  @description Header navigation

  @memberof Components
  @see {@link LeftNav}
  @author Daniel Patton <dpatton@deloitte.com>

  * @example
  * // client/index.js
  * render(
  *   <LeftNav />
  * )
*/

// STYLES

// THIRD-PARTY
import './left-nav.css';

// THIRD-PARTY
import {Link, Route} from 'react-router-dom';
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

//REDUX
import * as actions from '../../store/actions/course-actions';

class LeftNav extends Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div className="col-xs-3 leftNavContainer">
        <ul className="leftNav">
          <li>
            <i className="fa fa-spinner" />
            <a className="menuLink">&nbsp; Latest Activity</a>
          </li>
          <li>
            <i className="fa fa-globe" />
            <a className="menuLink">&nbsp; Causes</a>
          </li>
          <li>
            <i className="fa fa-dollar" />
            <a className="menuLink">&nbsp; Donations</a>
          </li>
          <li>
            <i className="fa fa-user-circle" />
            <a className="menuLink">&nbsp; My Account</a>
          </li>
        </ul>
      </div>
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
)(LeftNav);
