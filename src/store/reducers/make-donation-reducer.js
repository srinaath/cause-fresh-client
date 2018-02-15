import constants from '../constants';

export function loadCauses(state = {} , action) {
  switch (action.type) {
    case constants.loadTransactions:
      return action.responseData;
    default:
      return state;
  }
}

export function makeADonation(state = {} , action) {
  switch (action.type) {
    case constants.loadTransactions:
      return action.responseData;
    default:
      return state;
  }
}



