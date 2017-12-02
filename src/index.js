import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './website';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
