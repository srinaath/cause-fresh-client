import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import courseItems from  './course-reducer';

const rootReducer = combineReducers({
  courseItems,
  routing: routerReducer
});

export default rootReducer;
