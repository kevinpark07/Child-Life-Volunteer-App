import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = (currentState = {user: ""}, action) => {
  if (action.type === "LOGIN_USER") {
    return { ...currentState, user: action.payload }
  } else {
    return currentState
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk))

console.log("Store: ", store)

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

