export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_COURSE_ITEMS':
      return action.respData;
    default:
      return state;
  }
}
