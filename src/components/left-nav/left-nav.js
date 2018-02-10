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
            <Link to={'/'} className="menuLink">&nbsp; Latest Activity</Link>
          </li>
          <li>
            <i className="fa fa-globe" />
            <Link to={'/'} className="menuLink">&nbsp; Causes</Link>
          </li>
          <li>
            <i className="fa fa-dollar" />
            <Link to={'/'} className="menuLink">&nbsp; Donations</Link>
          </li>
          <li>
            <i className="fa fa-user-circle" />
            <Link to={'/'} className="menuLink">&nbsp; My Account</Link>
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
