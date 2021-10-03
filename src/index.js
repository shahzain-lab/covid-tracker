import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalProvider} from './Model/Context';

// react-router
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
