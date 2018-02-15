import constants from '../constants';

export default function loadTransactions(state = {} , action) {
  switch (action.type) {
    case constants.LOAD_TRANSACTIONS:
      return action.responseData;

    case constants.ERROR_LOAD_TRANSACTIONS:
      return action.errorMessage;

    default:
      return state;
  }
}



