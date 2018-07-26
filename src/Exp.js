let redux = require('redux');

let defaultState = { arr: ['default state'], isAdding: false};

let reducer = (state = defaultState, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            return {...state, arr: [...state.arr, action.value]};
        case 'REMOVE_ITEM':
            return {...state, arr: state.arr.filter((e, i) => i != action.index)};
        default:
            return state;
    }
};

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//theo doi thay doi state
store.subscribe(() => {
    document.getElementById('debug').innerHTML = JSON.stringify(store.getState());
});

// dispatch - thuc thi action
console.log(store.getState());
store.dispatch({type: 'ADD_ITEM', value: 'test add'});
store.dispatch({type: 'REMOVE_ITEM', index: 1});

