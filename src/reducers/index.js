import { combineReducers } from 'redux';
import arrReducer from './arr';
import IsAddItemReducer from './isAdding';

//binding properties of state with reducer function
export default combineReducers({
    arr: arrReducer,
    isAdding: IsAddItemReducer
});