import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'

function DashCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

export default DashCalendar;

const Container = styled.div`
    float: right;
    padding-top: 10%;
    padding-right: 5%;
`