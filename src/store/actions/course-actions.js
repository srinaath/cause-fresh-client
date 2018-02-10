import axios from 'axios';

const LOAD_COURSE_ITEMS = 'LOAD_COURSE_ITEMS';
const LOAD_ADDN_COURSE_ITEMS = 'LOAD_ADDN_COURSE_ITEMS';



export function loadCourseItems(userId) {
  return function (dispatch) {
    return axios.get(`http://localhost:4000/api/getTransactionDetails?userId=${userId}`)
    .then((response) => {
      const respData = response.data;
      dispatch(
        {
          type: LOAD_COURSE_ITEMS,
          respData
        })

    })
    .catch((error) => {
      return null;
    });
  };
}
