import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VolunteerLogin from '../Components/VolunteerLogin';
import AdminLogin from '../Components/AdminLogin';
import LoginHome from '../Components/LoginHome';





class LoginContainer extends React.Component {


    render () {
        return (
            <div>
                <Switch>
                    <Route path='/login/volunteer' render={ () => <VolunteerLogin />} />
                    <Route path='/login/admin' render={ () => <AdminLogin />} />
                    <Route path={'/login'} render={ () => <LoginHome />} />
                </Switch>
            </div>
        )
    }
}


export default LoginContainer;
