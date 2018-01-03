import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure-store';


const store = configureStore();
ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
