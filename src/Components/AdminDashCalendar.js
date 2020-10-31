import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Clock from 'react-live-clock';
import InterviewContainer from '../Containers/InterviewContainer'


function DashCalendar(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
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
        <InterviewContainer />
    </div>
  );
}

const msp = state => {
  return {
    user: state.user,
  }
}

export default connect(msp)(DashCalendar);

const Container = styled.div`
    float: right;
    padding-top: 10%;
    padding-right: 15%;
`


const ClockContainer = styled.div`
  float: left;
  padding-top: 15%;
  padding-left: 20%;
  font-size: 40pt;
`