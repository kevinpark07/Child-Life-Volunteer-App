import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AdminMeetingCard = (props) => {

    return(
        <Container>
            <p><b>Date: </b> {props.meeting.date}</p>
            <p><b>Time: </b> {props.meeting.time}</p>
            <p><b>Zoom Link: </b> {props.meeting.link}</p>
            <p><b>Volunteer: </b> {props.meeting.volunteer_id ? props.volunteers.find(vol => vol.id === props.meeting.volunteer_id).name:"NO VOLUNTEER AVAILABLE"}</p>
            <p><b>Patient: </b> {props.meeting.patient_name}</p>
            <p><b>Patient Age: </b> {props.meeting.patient_age}</p>
            <p><b>Patient Info: </b> {props.meeting.patient_info}</p>
            <p><b>Patient Notes: </b> {props.meeting.notes}</p>
        </Container>
    )
}

const msp = (state) => {
    return {volunteers: state.volunteers}
}

export default connect(msp, null)(AdminMeetingCard);

const Container = styled.div`
    display: inline-block;
    width: 300px;
    height: 300px;
    float: left;
    margin-right: 3%;
    border-style: solid;
    padding: 10px;
    margin-bottom: 5%;
    overflow: scroll;
`