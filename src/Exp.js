let redux = require('redux');

let defaultState = { arr: ['Nguyen Duy', 'Phan Linh'], isAdding: false};

// let reducer = (state = defaultState, action) => {
//     switch (action.type){
//         case 'ADD_ITEM':
//             return {...state, arr: [...state.arr, action.value]};
//         case 'REMOVE_ITEM':
//             return {...state, arr: state.arr.filter((e, i) => i != action.index)};
//         default:
//             return state;
//     }
// };


// chia nho reducer
let arrReducer = (state = defaultState.arr, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return [...state, action.value];
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i != action.index);
        default:
            return state;
    }
};

let IsAddItemReducer = (state = false, action) => {
    switch (action.type){
        case 'IS_ADDING':
            return !state;
    default:
        return state;
    }
};

//binding properties of state with reducer function
let reducer = redux.combineReducers({
    arr: arrReducer,
    isAdding: IsAddItemReducer
});








let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//theo doi thay doi state
store.subscribe(() => {
    document.getElementById('debug').innerHTML = JSON.stringify(store.getState());
});

// dispatch - thuc thi action
// console.log(store.getState());
// store.dispatch({type: 'ADD_ITEM', value: 'test add'});
// store.dispatch({type: 'REMOVE_ITEM', index: 1});
// store.dispatch({type: 'IS_ADDING'});

module.exports = store;