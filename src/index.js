import React from 'react';
import ReactDOM from 'react-dom';


import * as serviceWorker from './serviceWorker';
// Import F7 Bundle
import Framework7 from 'framework7/framework7.esm.bundle';

// Import F7-React Plugin
import Framework7React from 'framework7-react';

// Framework7 styles
import 'framework7/css/framework7.bundle.css';
import './index.css';
import App from './App';
// Init F7-React Plugin
Framework7.use(Framework7React);

// Import Main App component
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
