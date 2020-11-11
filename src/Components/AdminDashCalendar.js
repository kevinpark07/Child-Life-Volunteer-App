import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Clock from 'react-live-clock';
import InterviewContainer from '../Containers/InterviewContainer'

const BACKGROUND_URL = "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

function DashCalendar(props) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
        <Background alt="background" src={BACKGROUND_URL} />
        <InterviewContainer />
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
  }
}

export default connect(msp)(DashCalendar);

const Background = styled.img`
  position: fixed;
  width: 100%;
  z-index: -1;
  height: 120%;
`

const Container = styled.div`
  position: absolute;
  right: 5%;
  bottom: 7%;
  opacity: 95%;
  border-style: outset;
  border-radius: 20%;
  padding: 2%;
  background-color: #1565C0;
  border-radius: 5px;
  box-shadow: 5px 5px 5px grey;
  z-index: 1;
`

const DashCal = styled(Calendar)`
  background-color: #EFEBE9;
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