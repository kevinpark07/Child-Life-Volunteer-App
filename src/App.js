import React from 'react';
import SignUp from './Components/SignUp';
import HomePage from './Components/HomePage';
import LoginContainer from './Containers/LoginContainer';
import VolunteerDashboard from './Containers/VolunteerDashboard';
import AdminDashboard from './Containers/AdminDashboard';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {getVols, getAdmins, getInterviews, getMeetings} from './Redux/action';
import SetInterview from './Components/SetInterview';



class App extends React.Component {

  componentDidMount(){
    this.props.fetchVols();
    this.props.fetchAdmins();
    this.props.fetchInterviews();
    this.props.fetchMeetings();
  }
  
  render() {
      return (
        <div>
          <Switch>
            <Route path='/setinterview' render={ () => <SetInterview />} />
            <Route path='/volunteer' render={ () => <VolunteerDashboard />} />
            <Route path='/admin' render={ () => <AdminDashboard />} />
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
    meetings: state.meetings
  }
}

const mdp = (dispatch) => {
  return {
      fetchVols: () => dispatch(getVols()),
      fetchAdmins: () => dispatch(getAdmins()),
      fetchInterviews: () => dispatch(getInterviews()),
      fetchMeetings: () => dispatch(getMeetings()),
  }
}


export default connect(msp, mdp)(App);
