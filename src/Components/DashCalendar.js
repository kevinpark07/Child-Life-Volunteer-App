import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import Clock from 'react-live-clock';


function DashCalendar(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        {props.user.approved ? 
          null
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
            <Calendar
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

const Container = styled.div`
    float: right;
    padding-top: 10%;
    padding-right: 15%;
`

const Header = styled.h3`
    text-align: center;
    position: absolute;
    bottom: 30%;
    left: 40%;
`

const ClockContainer = styled.div`
  float: left;
  padding-top: 15%;
  padding-left: 20%;
  font-size: 40pt;
`