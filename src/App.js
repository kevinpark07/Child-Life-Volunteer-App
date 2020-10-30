import React from 'react';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import LoginContainer from './Containers/LoginContainer';
import VolunteerDashboard from './Containers/VolunteerDashboard';
import AdminDashboard from './Containers/AdminDashboard';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {getVols, getAdmins, getInterviews} from './Redux/action';
import InterviewArchive from './Components/InterviewArchive'



class App extends React.Component {

  componentDidMount(){
    this.props.fetchVols();
    this.props.fetchAdmins();
    this.props.fetchInterviews();
  }
  
  render() {
      return (
        <div>
          <Switch>
            <Route path={'/admin/archive'} render={ () => <InterviewArchive />} />  
            <Route path={'/volunteer'} render={ () => <VolunteerDashboard />} />
            <Route path={'/admin'} render={ () => <AdminDashboard />} />
            <Route path='/signup' render={ () => <SignUp />} />
            <Route path='/login' render={ () => <LoginContainer />} />
            <Route path='/' render={ () => <HomePage />} />
          </Switch>
        </div>
      );
    }
}

const msp = (state) => {
  return {
    user: state.user,
    volunteers: state.volunteers, 
    admins: state.admins,
  }
}

const mdp = (dispatch) => {
  return {
      fetchVols: () => dispatch(getVols()),
      fetchAdmins: () => dispatch(getAdmins()),
      fetchInterviews: () => dispatch(getInterviews())
  }
}


export default connect(msp, mdp)(App);
