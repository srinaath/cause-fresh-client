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
            <Link to={'/'} className="menuLink">
              <i className="fa fa-spinner" />&nbsp; 
              <span className="linkText">Latest Activity</span>
            </Link>
          </li>
          <li>
            <Link to={'/causes'} className="menuLink">
              <i className="fa fa-globe" />&nbsp; 
              <span className="linkText">Causes</span>
            </Link>
          </li>
          <li>
            <Link to={'/donations'} className="menuLink">
              <i className="fa fa-dollar" />&nbsp; 
              <span className="linkText">Donations</span>
            </Link>
          </li>
          <li>
            <Link to={'/account'} className="menuLink">
              <i className="fa fa-user-circle" />&nbsp; 
              <span className="linkText">My Account</span>
            </Link>
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
