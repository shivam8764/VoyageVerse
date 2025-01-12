import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Global styles
import App from './App';
import * as serviceWorker from './serviceWorker';

/**
 * index.js
 *
 * - Renders the root of our React application into the #root div in index.html.
 * - Manages service workers (optional) for offline capabilities.
 */
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

/**
 * By default, we're using 'unregister()' for the service worker,
 * meaning the app won't cache resources for offline use.
 * If you want offline functionality, change 'unregister()' to 'register()'
 * BUT remember that it comes with extra complexities.
 */
serviceWorker.unregister();
