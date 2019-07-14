import { combineReducers } from 'redux';
import { order } from './order.reducers';

const rootReducer = combineReducers({
    order
});

export default rootReducer;