import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './redux/reducers/rootReducer';
import MainRouter from './router/MainRouter';

import reportWebVitals from './reportWebVitals';
import { forrbidenMiddleware } from './redux/middleware/middleware';

// const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
  applyMiddleware(
      thunk, forrbidenMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MainRouter />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
