// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

// COMPONENTS
import LeftNav from '../../components/left-nav/left-nav';

//REDUX
import * as actions from '../../store/actions/course-actions';

// STYLES
import './donation-container.css';

class DonationContainer extends Component {

  constructor(props) {
    super(props);
    this.getDonationData = this.getDonationData.bind(this);
    this.updateDonations = this.updateDonations.bind(this);
    this.onDonationChange = this.onDonationChange.bind(this);
    this.state = {
      donationsData: {},
      donationAmt: ''
    };
  }

  componentWillReceiveProps(nextProps) {

  }

  onDonationChange(evt) {
    this.setState({
      donationAmt: Number(evt.target.value)
    });
  }

  getDonationData() {
    return axios.get(`http://localhost:4000/api/getDonationScreenData`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return null;
    });
  }


  updateDonations(evt) {
    evt.stopPropogation();
    const selectedOrg = document.getElementById("org").selectedIndex;
    const selectedCause = document.getElementById("cause").selectedIndex;
    const selectedSubCause = document.getElementById("subcause").selectedIndex;
    const donationAmt = document.getElementById("donationTxt").value;
  }


  componentDidMount() {
    this.getDonationData().then((data) => {
      this.setState({
        donationsData : data
      });
    });
  }

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
              <select id="org">
                {this.state.donationsData.orgs && this.state.donationsData.orgs.map((org, index) => {
                  return <option>{org.orgName}</option>;
                })}
              </select>
            </div>
            <br />
            <div className="select-style">
              <select id="cause">
                {this.state.donationsData.causes && this.state.donationsData.causes.map((causes, index) => {
                  return <option>{causes.causeName}</option>;
                })}
              </select>
            </div>
            <br />
            <div className="select-style">
              <select id="subcause">
                {this.state.donationsData.subCauses && this.state.donationsData.subCauses.map((subCauses, index) => {
                  return <option>{subCauses.causeDetailName}</option>;
                })}
              </select>
            </div>
            <br />
            <input type="text" id ="donationTxt" placeholder="Donation Amount" onChange = {this.onDonationChange}/>
            <br />
            <input type="submit" value="Donate" onClick={this.updateDonations} placeholder="Donate in MetaCoins"/>
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

