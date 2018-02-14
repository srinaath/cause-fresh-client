import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courseItems from  './course-reducer';
import makeDonation from  './make-donation-reducer';

const rootReducer = combineReducers({
  courseItems,
  makeDonation,
  routing: routerReducer
});

export default rootReducer;
