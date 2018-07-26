import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './components/List';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
let preElement = document.createElement('div');
preElement.setAttribute('id', 'debug');
document.getElementById('root').appendChild(preElement);
require('./Exp');