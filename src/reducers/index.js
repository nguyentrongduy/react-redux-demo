let redux = require('redux');
let arrReducer = require('./arr');
let IsAddItemReducer = require('./isAdding');

//binding properties of state with reducer function
let reducer = redux.combineReducers({
    arr: arrReducer,
    isAdding: IsAddItemReducer
});

module.exports = reducer;
