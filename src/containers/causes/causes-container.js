// THIRD-PARTY
import {Link, Route} from 'react-router-dom';
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import LeftNav from '../../components/left-nav/left-nav';

// STYLES
import './causes-container.css';

class CausesContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div id="CausesContainer">
      <div className="row">
        <LeftNav />
        <div className="col-xs-9 mainContentWrapper">
          <h1><i className="fa fa-globe" />&nbsp; Causes</h1>

          <div className="row">
             <div className="col-xs-4">
               <ul className="causeBoxes">
                 <li className="causeBox">
                   <h3>American Red Cross</h3>
                   <p>Johnson County Relief Fund</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id urna vel dui euismod facilisis quis quis risus. 
                   Proin et suscipit urna. Pellentesque at commodo massa, a suscipit orci. Praesent lobortis posuere ante at faucibus. 
                   Etiam lobortis, est volutpat commodo facilisis, diam lectus egestas magna, ut ornare arcu odio eget dui. <br />
                   </p>
                   <p><Link to={'/donation'} className="donate">Donate</Link></p>
                 </li>
               </ul>
             </div>
           </div>
        </div>
      </div>
    </div>
    );
  }
}

export default CausesContainer;
