import constants from '../constants';

export default function loadTransactions(state = {} , action) {
  switch (action.type) {
    case constants.loadTransactions:
      return action.responseData;
    default:
      return state;
  }
}



