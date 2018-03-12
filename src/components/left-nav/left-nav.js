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
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class LeftNav extends Component {
  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {}

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

export default LeftNav;
