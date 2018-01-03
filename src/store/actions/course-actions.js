const LOAD_COURSE_ITEMS = 'LOAD_COURSE_ITEMS';


export function loadCourseItems() {
  return function (dispatch) {
    let data = [
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

    return dispatch({
      type: LOAD_COURSE_ITEMS,
      data
    });
  };
}
