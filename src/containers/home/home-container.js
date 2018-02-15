// THIRD-PARTY
import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

// COMPONENTS
import LeftNav from '../../components/left-nav/left-nav';

//REDUX
import * as actions from '../../store/actions/transact-history-action';

// STYLES
import './home-container.css';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    const googleClientId = process.env.REACT_APP_BASE_URL;
    console.log('ENVIORNMENT', process.env);

    this.loadTransactions = this.loadTransactions.bind(this);

    this.state = {
      transactions: [],
      userData: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.transactionData !== nextProps.transactionData) {
      this.setState({
        transactions: nextProps.transactionData.transactHistory,
        userData: nextProps.transactionData.userDetails
      });
    }
  }

  componentDidMount() {
    this.props.actions.loadTransactionsForUser(1);
  }

  loadTransactions() {
    this.props.actions.loadTransactionsForUser(1);
  }


  render() {
    return (
      <div id="HomeContainer">
        <div className="row">
          <LeftNav />
          <div className="col-xs-9 mainContentWrapper">
            <h1><i className="fa fa-spinner" />&nbsp; Latest Activity</h1>
            <ul>
            {this.state.transactions.map((item, index) =>
              <li key={'transaction-' + index}>
                <span className="transactionDesc">
                  You donated <i className="bold">{item.transactionValue}</i> MC to <i className="bold">{item.causeOrg}</i> for <i className="bold">{item.causeName}</i> for <i className="bold">{item.causeDetailName}</i>.
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
    transactionData: state.transactHistory
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

