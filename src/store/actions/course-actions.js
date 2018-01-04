const LOAD_COURSE_ITEMS = 'LOAD_COURSE_ITEMS';



export function loadCourseItems() {
  return function (dispatch) {
    return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(res => res.json())
    .then(data =>
      {
        let dataVal = [
          {
            id: 1,
            name: 'BlockChain Development'
          },
          {
            id: 2,
            name: 'GraphQL Development'
          },
          {
            id: 3,
            name: 'Big Data Usage'
          }
        ];

        dispatch(
          {
            type: LOAD_COURSE_ITEMS,
            dataVal
          })
      },
      err => dispatch({ type: 'LOAD_DATA_FAILURE', err })
    );
  };
}
