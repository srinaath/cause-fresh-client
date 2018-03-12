import axios from 'axios';
import constants from '../constants';

export function loadTransactionsForUser(userId) {
  return function(dispatch) {
    const url = `${
      process.env.REACT_APP_BASE_URL
    }/getTransactionDetails?userId=${userId}`;
    console.log(url);
    return axios
      .get(url, {
        withCredentials: true
      })
      .then(response => {
        const respData = response.data;
        dispatch({
          type: constants.LOAD_TRANSACTIONS,
          responseData: respData
        });
      });
  };
}
