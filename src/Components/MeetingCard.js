import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MeetingCard = (props) => {

    return(
        <Container>
            <p><b>Date: </b> {props.meeting.date}</p>
            <p><b>Time: </b> {props.meeting.time}</p>
            <p><b>Zoom Link: </b> {props.meeting.link}</p>
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

export default connect(msp, null)(MeetingCard);

const Container = styled.div`
    display: inline-block;
    width: 350px;
    height: 350px;
    float: left;
    margin-left: 5%;
    padding-right: 3%;
    padding-left: 2%;
    padding-top: 1%;
    padding-bottom: 2%;
    margin-bottom: 5%;
    overflow: scroll;
    background-color:#EFEBE9;
    opacity: 90%;
    box-shadow: 5px 5px 5px 2px grey;
`