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
import React, { Component } from 'react';
import './mega-nav.css';

class MegaNav extends Component {

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
            <p>Hello, Daniel | Balance: 5000 MC</p>
          </div>
        </div>
      </header>
    );
  }
}

export default MegaNav;
