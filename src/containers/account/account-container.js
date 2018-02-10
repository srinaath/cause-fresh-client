// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS 
import LeftNav from '../../components/left-nav/left-nav';

//REDUX
import * as actions from '../../store/actions/course-actions';

// STYLES
import './account-container.css';

class AccountContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <div id="AccountContainer">
      <div className="row">
        <LeftNav />
        <div className="col-xs-9 mainContentWrapper">
           <h1><i className="fa fa-user-circle" />&nbsp; My Account</h1>
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
)(AccountContainer);
