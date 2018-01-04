export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_COURSE_ITEMS':
      return [...state, ...action.dataVal];
    case 'LOAD_ADDN_COURSE_ITEMS':
      return [...state, ...action.addnDataVal];
    default:
      return state;
  }
}
