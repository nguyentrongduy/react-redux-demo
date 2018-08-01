import { createStore, compose } from 'redux';
import rootReducer from './reducers';

// debug redux
let store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//theo doi thay doi state
store.subscribe(() => {
    document.getElementById('debug').innerHTML = JSON.stringify(store.getState());
});

export default store;