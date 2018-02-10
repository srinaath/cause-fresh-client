// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

//REDUX
import * as actions from '../../store/actions/course-actions';


// STYLES
import './donation-container.css';

class DonationContainer extends Component {

  constructor(props) {
    super(props);

    this.loadCourses = this.loadCourses.bind(this);
    this.courseLoaded = false;

    this.state = {
      courses: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.coursesList !== this.props.coursesList) {
      this.setState({
        courses: [this.state.courses, ...nextProps.coursesList]
      });
    }
  }

  loadCourses() {
    if(this.courseLoaded === false) {
      this.courseLoaded = true;
      this.props.actions.loadCourseItems();
    }
    else
      this.props.actions.loadAddnCourseItems();
  }


  render() {
    return (
      <div id="DonationContainer">
        
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

