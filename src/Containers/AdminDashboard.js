import React from 'react';
import AdminNavBar from '../Components/AdminNavBar';
import AdminDashCalendar from '../Components/AdminDashCalendar';
import AdminProfile from '../Components/AdminProfile';
import InterviewArchive from './InterviewArchive';
import InterviewForm from '../Components/InterviewForm';
import VolunteerList from '../Components/VolunteerList';
import MeetingContainer from './MeetingsContainer';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';




function AdminDashBoard(props) {
  return (
   <>
   { props.user ?
   <div>
       <AdminNavBar />
       <Switch>
       <Route path={'/admin/editinterview'}render={() => <InterviewForm />} />
       <Route path={'/admin/meetings'}render={() => <MeetingContainer />} />
       <Route path={'/admin/roster'}render={() => <VolunteerList />} />
       <Route path='/admin/archive' render={ () => <InterviewArchive />} />
       <Route path={'/admin/:id'} render={(routerProps) => {
         let id = parseInt(routerProps.match.params.id);
         if (props.admins.length > 0) {
           let foundAdmin = props.admins.find(admin => admin.id === id);
           return (<AdminProfile admin={foundAdmin} />)
          }
        }} />
       <Route path={'/admin'} render={() => <AdminDashCalendar />} />
       </Switch>
   </div>
   :
   <Redirect to="/" />
  }
   </>
  );
}

const msp = (state) => {
  return { 
      user: state.user, 
      admins: state.admins
   }
}

export default connect(msp)(AdminDashBoard);