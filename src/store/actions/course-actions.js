const LOAD_COURSE_ITEMS = 'LOAD_COURSE_ITEMS';
const LOAD_ADDN_COURSE_ITEMS = 'LOAD_ADDN_COURSE_ITEMS';



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
            name: 'Hadoop and Map Reduce'
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


export function loadAddnCourseItems() {
  return function (dispatch) {
    let addnDataVal = [
      {
        id: 4,
        name: 'Bio informatics'
      },
      {
        id: 5,
        name: 'React Js Development'
      }
    ];
    return dispatch(
        {
          type: LOAD_ADDN_COURSE_ITEMS,
          addnDataVal
        });
    }
  };

