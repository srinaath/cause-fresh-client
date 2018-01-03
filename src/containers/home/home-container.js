// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

//REDUX
import * as actions from '../../store/actions/course-actions';


// STYLES
import './home-container.css';

class HomeContainer extends Component {

  constructor(props) {
    super(props);

    this.loadCourses = this.loadCourses.bind(this);

    this.state = {
      courses: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.coursesList !== this.props.coursesList) {
      this.setState({
        courses: nextProps.coursesList
      });
    }
  }

  loadCourses() {
    this.props.actions.loadCourseItems();
  }


  render() {
    return (
      <div>
        <h1>
          Courses
          <button onClick={this.loadCourses}>
              Load Data
          </button>
        </h1>
        <ul>
        {this.state.courses.map((item, index) =>
          <li key={'courses-' + item.id}>
            <span>
              {item.name}
            </span>
        </li>)}
        </ul>
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
)(HomeContainer);

