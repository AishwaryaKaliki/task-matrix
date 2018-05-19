import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import Router from './components/Router'

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
