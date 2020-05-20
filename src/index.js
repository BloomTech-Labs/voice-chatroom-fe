import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import OktaConfig from './components/utils/OktaConfig';
import { Security } from '@okta/okta-react';

ReactDOM.render(
  <React.StrictMode>
    <Security {...OktaConfig}>
      <App />
    </Security>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();