// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

// COMPONENTS
import LeftNav from '../../components/left-nav/left-nav';

//REDUX
import * as actions from '../../store/actions/make-donation-action';

// STYLES
import './donation-container.css';

class DonationContainer extends Component {

  constructor(props) {
    super(props);
    this.updateDonations = this.updateDonations.bind(this);
    this.onDonationChange = this.onDonationChange.bind(this);
    this.donationMessages = {
      success: 'Your donation has been succesful',
      failure: 'There seems to have been an error donating money. Please try again later while we sort the glitch.'
    };
    this.state = {
      donationsData: {},
      donationAmt: '',
      donationStateMsg: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.causesObj !== this.props.causesObj) {
      this.setState({
        donationsData : nextProps.causesObj
      });
    }

    if(nextProps.donationStatus !== this.props.donationStatus) {
      console.log('Donation status', nextProps.donationStatus);
    }
  }

  onDonationChange(evt) {
    this.setState({
      donationAmt: Number(evt.target.value)
    });
  }


  updateDonations(evt) {
    evt.preventDefault();
    const selectedOrg = document.getElementById("org").selectedIndex + 1;
    const selectedCause = document.getElementById("cause").selectedIndex + 1;
    const selectedSubCause = document.getElementById("subcause").selectedIndex + 1;
    const donationAmt = document.getElementById("donationTxt").value;
    const userId = 1;
    this.props.actions.makeADonation({
      userId,
      selectedCause,
      selectedSubCause,
      donationAmt
    });
  }


  componentDidMount() {
    this.props.actions.loadCauses();
  }

  render() {

    var donationStateMessageCls = classNames({
      'donation-msg': true,
      'show-donation': this.state.donationStateMsg !== ''
    });

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
            <input type="text" id ="donationTxt" placeholder="Donation Amount" onChange ={this.onDonationChange}/>
            <br />
            <button id="submit-btn" onClick={this.updateDonations}>
              Donate in CFCoins
            </button>
            <span className = {donationStateMessageCls}>
              {this.state.donationStateMsg}
            </span>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    causesObj: state.loadCauses,
    donationStatus: state.makeADonation
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

