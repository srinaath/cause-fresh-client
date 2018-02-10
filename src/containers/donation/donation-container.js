// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS 
import LeftNav from '../../components/left-nav/left-nav';

//REDUX
import * as actions from '../../store/actions/course-actions';


// STYLES
import './donation-container.css';

class DonationContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div id="DonationContainer">
      <div className="row">
        <LeftNav />
        <div className="col-xs-9 mainContentWrapper">
          <h1>
            <i className="fa fa-money" />&nbsp; Make A Donation
          </h1>
          <form>
            <div className="select-style">
              <select>
                <option value="1">American Red Cross</option>
              </select>
            </div>
            <br />
            <div className="select-style">
              <select>
                <option value="1">Katrina Relief</option>
              </select>
            </div>
            <br />
            <div className="select-style">
              <select>
                <option value="1">General</option>
                <option value="2">Food/Water</option>
                <option value="3">Supplies</option>
              </select>
            </div>
            <br />
            <input type="text" placeholder="Donation Amount" />
            <br />
            <input type="submit" value="Donate" />
          </form>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coursesList: state.courseItems
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
)(DonationContainer);

