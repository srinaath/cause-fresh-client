import { combineReducers } from 'redux';
import navItems from  './mega-nav-reducer';




// COMBINE REDUCERS
const rootReducer = combineReducers({
  navItems
});

export default rootReducer;
