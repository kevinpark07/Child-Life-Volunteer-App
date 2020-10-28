import React from 'react';
import VolunteerDashBoard from './Containers/VolunteerDashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage'
import { Route, Switch, Redirect } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route path='/volunteer' render={ () => <VolunteerDashBoard />} />
        <Route path='/login' render={ () => <Login />} />
        <Route path='/signup' render={ () => <SignUp />} />
        <Route path='/' render={ () => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
