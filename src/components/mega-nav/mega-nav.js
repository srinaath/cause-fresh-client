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
        <h1> Datatables with React </h1>
      </header>
    );
  }
}

export default MegaNav;
