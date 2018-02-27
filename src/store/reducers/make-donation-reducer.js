import constants from '../constants';

export function loadCauses(state = {}, action) {
  switch (action.type) {
    case constants.LOAD_CAUSES:
      return action.causes;
    case constants.ERROR_LOAD_CAUSES:
      return action.errorMessage;
    default:
      return state;
  }
}

export function makeADonation(state = {}, action) {
  switch (action.type) {
    case constants.MAKE_DONATION:
      return action.addedTransaction;
    case constants.ERROR_MAKE_DONATION:
      return action.errorMessage;
    default:
      return state;
  }
}
