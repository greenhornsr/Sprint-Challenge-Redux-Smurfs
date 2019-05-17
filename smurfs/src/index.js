import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootreducer from './reducers';

const store = createStore(
  reducer,applyMiddleware(thunk, logger)
);

const store = createStore(rootreducer, composeEnhancers(applyMiddleware(thunk, logger)));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
