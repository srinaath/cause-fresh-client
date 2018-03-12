import constants from '../constants';

export function makeADonation(params) {
  return function(dispatch) {
    fetch(`${process.env.REACT_APP_BASE_URL}/addDonationToSubCause`, {
      body: JSON.stringify({
        subCauseId: params.selectedSubCause,
        userId: params.userId,
        causeId: params.selectedCause,
        transactionAmt: params.donationAmt
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(
        resp => {
          if (resp) {
            dispatch({
              type: constants.MAKE_DONATION,
              addedTransaction: resp
            });
          }
        },
        error => {
          dispatch({
            type: constants.ERROR_MAKE_DONATION,
            errorMessage: error
          });
        }
      );
  };
}

export function loadCauses() {
  return function(dispatch) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/getDonationScreenData`)
      .then(response => response.json())
      .then(
        resp => {
          dispatch({
            type: constants.LOAD_CAUSES,
            causes: resp
          });
        },
        error => {
          dispatch({
            type: constants.ERROR_LOAD_CAUSES,
            errorMessage: error
          });
        }
      );
  };
}
