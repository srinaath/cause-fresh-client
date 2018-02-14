import constants from '../constants';

export function loadCauses(userId) {
  return function (dispatch) {
    fetch (`http://localhost:4000/api/addDonationToSubCause`, {
      body: JSON.stringify ({
      subCauseId: selectedSubCause,
      userId: 1,
      causeId: selectedCause,
      transactionAmt: donationAmt
      }),
      method: 'POST'
    })
    .then(response => response.json())
    .then((response) => {
      if(response) {
      }
    }).catch((error) => {
      return null;
    });;
  }
}



export function makeADonation(params) {
  return function (dispatch) {
    return fetch(`http://localhost:4000/api/getDonationScreenData`)
    .then(response => response.json())
    .then((resp) => {
      dispatch(
        {
          type: constants.MAKE_DONATION,
          addedTransaction
        })
    })
    .catch((error) => {
      return null;
    });
  };
}
