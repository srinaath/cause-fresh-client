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
      <div id="HomeContainer">
        <div className="row">
          <div className="col-xs-3 menuWrapper">
            <ul className="leftNav">
              <li>
                <i className="fa fa-spinner" />
                <a className="menuLink">&nbsp; Latest Activity</a>
              </li>
              <li>
                <i className="fa fa-globe" />
                <a className="menuLink">&nbsp; Causes</a>
              </li>
              <li>
                <i className="fa fa-dollar" />
                <a className="menuLink">&nbsp; Donations</a>
              </li>
              <li>
                <i className="fa fa-user-circle" />
                <a className="menuLink">&nbsp; My Account</a>
              </li>
            </ul>
          </div>

          <div className="col-xs-9 mainContentWrapper">
            <h1>
              <i className="fa fa-spinner" />&nbsp; Latest Activity
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
)(HomeContainer);

