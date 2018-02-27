import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import transactHistory from './transact-history-reducer';
import { makeADonation, loadCauses } from './make-donation-reducer';

const rootReducer = combineReducers({
  transactHistory,
  makeADonation,
  loadCauses,
  routing: routerReducer
});

export default rootReducer;
