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
  constructor(props) {
    super(props);

    this.loadMegaNavItems = this.loadMegaNavItems.bind(this);

    this.state = {
      course: {title: null}
    };
  }

  loadMegaNavItems() {
    console.log('Im hit');
  }

  render() {
    return (
      <header className="mega-nav">
        <div className="row">
          <div className="col-lg-4 test-box">
            <button onClick={this.loadMegaNavItems}>
              Load Data
            </button>
          </div>

          <div className="col-lg-8 test-box">
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
