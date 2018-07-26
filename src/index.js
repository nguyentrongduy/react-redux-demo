import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './components/List';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

let preElement = document.createElement('div');
preElement.setAttribute('id', 'debug');
document.querySelector('body').insertBefore(preElement, document.getElementById('root').nextSibling);
let store = require('./Exp');

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();