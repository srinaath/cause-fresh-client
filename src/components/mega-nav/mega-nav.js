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
          <div className="test-box">
            <p>CAUSE
              <span>fresh</span>
            </p>
          </div>

          <div className="test-box">
            <div className="box">
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default MegaNav;
