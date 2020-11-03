import React from 'react';
import VolNavBar from '../Components/VolNavBar';
import DashCalendar from '../Components/DashCalendar';
// import EditProfile from '../Components/EditProfile';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import VolMeetingContainer from './VolMeetingContainer';
import VolunteerProfile from '../Components/VolunteerProfile';



function VolunteerDashboard(props) {
  return (
   <div>
     {console.log(props.user)}
       <VolNavBar />
       <Switch>
         {/* <Route path={'/volunteer/:id/edit'} render={() => <EditProfile /> } /> */}
          <Route path={'/volunteer/:id/meetings'} render={() => <VolMeetingContainer />} />
          <Route path={'/volunteer/:id'} render={(routerProps) => {
                        let id = parseInt(routerProps.match.params.id);
                        if (props.volunteers.length > 0) {
                            let foundVol = props.volunteers.find(vol => vol.id === id);
                            return (<VolunteerProfile volunteer={foundVol} />)
                        }
                    }} />
          <Route path="/volunteer" render={() => <DashCalendar />} />
       </Switch>
   </div>
  );
}

 const msp = (state) => {
   return { 
     user: state.user, 
      volunteers: state.volunteers
    }
 }


export default connect(msp)(VolunteerDashboard);

