import React from 'react';
import VolunteerDashBoard from './Containers/VolunteerDashboard';
import LoginContainer from './Containers/LoginContainer';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage'
import VolunteerLogin from './Components/VolunteerLogin';
import AdminLogin from './Components/AdminLogin';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div>
      <Switch>
        <Route path='/login/volunteer' render={ () => <VolunteerLogin />} />
        <Route path='/login/admin' render={ () => <AdminLogin />} />
        <Route path='/login' render={ () => <LoginContainer />} />
        <Route path='/volunteer' render={ () => <VolunteerDashBoard />} />
        <Route path='/signup' render={ () => <SignUp />} />
        <Route path='/' render={ () => <HomePage />} />
      </Switch>
    </div>
  );
}

export default App;
