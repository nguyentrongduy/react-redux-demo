let redux = require('redux');
let reducer = require('./reducers');

// debug redux
let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//theo doi thay doi state
store.subscribe(() => {
    document.getElementById('debug').innerHTML = JSON.stringify(store.getState());
});

module.exports = store;