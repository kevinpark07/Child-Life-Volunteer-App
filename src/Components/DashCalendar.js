import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Clock from 'react-live-clock';
import AssignedMeetingsContainer from '../Containers/AssignedMeetingsContainer';


const BACKGROUND_URL = "https://images.unsplash.com/photo-1599836818135-1ddc9c54fe8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

function DashCalendar(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <Background alt="background" src={BACKGROUND_URL} />
        {props.user.approved ? 
          <AssignedMeetingsContainer />
          :
          props.interviews.find(interview => interview.volunteer_id === props.user.id) ? 
          <Header>Interview Pending...</Header> 
          : 
          <NavLink to={'/setinterview'}><Header>Set Interview</Header></NavLink>}
           <ClockContainer>
            <Clock 
            format={'hh:mm:ss'}
            ticking={true}
            timezone={'America/New_York'}/>
          </ClockContainer>
          <Container>
            <DashCal
              onChange={onChange}
              value={value}
            />
          </Container>
    </div>
  );
}

const msp = state => {
  return {
    user: state.user,
    interviews: state.interviews
  }
}

export default connect(msp)(DashCalendar);

const Background = styled.img`
  position: fixed;
  width: 100%;
  z-index: -1;
`


const DashCal = styled(Calendar)`
  background-color: #EFEBE9;
`

const Container = styled.div`
    position: absolute;
    right: 5%;
    bottom: 7%;
    opacity: 95%;
    border-style: outset;
    border-radius: 20%;
    padding: 2%;
    background-color: #C62828;
    border-radius: 5px;
    box-shadow: 5px 5px 5px grey;
    z-index: 1;
`

const Header = styled.h3`
    text-align: center;
    position: absolute;
    top: 30%;
    left: 25%;
    z-index: 1;
    font-family: Marker Felt, fantasy;
    color: #EFEBE9;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
    text-decoration: underline;
`

const ClockContainer = styled.div`
  position: absolute;
  right: 9%;
  top: 20%;
  padding: 2%;
  font-size: 40pt;
  opacity: 95%;
  background-color: #080002;
  color: #CC3604;
  text-shadow: 2px 2px 5px red;
  border-style: double;
  border-radius: 5%;
  border-color: black;
  box-shadow: 5px 5px 5px grey;
  z-index: 1;
`