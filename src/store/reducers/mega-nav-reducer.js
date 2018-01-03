export default function megaNavReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_NAV_ITEMS':
      return [...state, Object.assign({}, action.navItemsType)];

    default:
      return state;
  }
}
