import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const rootReducer = (currentState = {
  user: "", 
  interviews: [], 
  volunteers: [],
  admins: [],
  meetings: [],
  interview: "",
  meeting: "",
  adminLogin: false,
  volLogin: false
  }, action) => {
  if (action.type === "LOGIN_USER") {
    return { ...currentState, user: action.payload }
  } else if (action.type === "ADD_INTERVIEWS_FROM_FETCH") {
    return { ...currentState, interviews: action.payload }
  } else if (action.type === "ADD_VOLS_FROM_FETCH") {
    return { ...currentState, volunteers: action.payload }
  } else if (action.type === "ADD_ADMINS_FROM_FETCH") {
    return { ...currentState, admins: action.payload }
  } else if (action.type === "ADD_MEETINGS_FROM_FETCH") {
    return { ...currentState, meetings: action.payload }
  } else if (action.type === "ADD_NEW_VOLUNTEER") {
    return { ...currentState, volunteers: [...currentState.volunteers, action.payload] }
  } else if (action.type === "ADD_NEW_INTERVIEW") {
    return { ...currentState, interviews: [...currentState.interviews, action.payload] }
  } else if (action.type === "EDIT_INTERVIEW") {
    return { ...currentState, interview: action.payload }
  } else if (action.type === "PATCH_INTERVIEW") {
    let newArray = currentState.interviews.filter(int => int.id !== action.payload.id);
    return { ...currentState, interviews: [...newArray, action.payload] }
  } else if (action.type === "APPROVE_VOLUNTEER") {
    let newArray = currentState.volunteers.filter(vol => vol.id !== action.payload.id);
    return { ...currentState, volunteers: [...newArray, action.payload] }
  } else if (action.type === "EDIT_VOLUNTEER") {
    let newArray = currentState.volunteers.filter(vol => vol.id !== action.payload.id);
    return { ...currentState, volunteers: [...newArray, action.payload] }
  } else if (action.type === "SIGNOUT_USER") {
    return { ...currentState, user: ""} 
  } else if (action.type === "REMOVE_VOLUNTEER") {
    let newArray = currentState.volunteers.filter(vol => vol.id !== action.payload.id);
    return { ...currentState, volunteers: newArray} 
  } else if (action.type === "ADD_MEETING") {
    return { ...currentState, meetings: [...currentState.meetings, action.payload]} 
  } else if (action.type === "MEETING_NOTES") {
    return { ...currentState, meeting: action.payload }
  } else if (action.type === "PATCH_MEETING") {
    let newArray = currentState.meetings.filter(meet => meet.id !== action.payload.id);
    return { ...currentState, meetings: [...newArray, action.payload] }
  } else if (action.type === "ADMIN_LOGIN") {
    return { ...currentState, adminLogin: true, volLogin:false}
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

