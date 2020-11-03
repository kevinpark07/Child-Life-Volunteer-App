import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Interview = (props) => {

    return(
        <Container>
            <p><b>Volunteer: </b> {props.volunteers.find(vol => vol.id === props.interview.volunteer_id).name}</p>
            <p><b>Date: </b> {props.interview.date}</p>
            <p><b>Time: </b> {props.interview.time}</p>
            <p><b>Approved: </b> {props.volunteers.find(vol => vol.id === props.interview.volunteer_id).approved ? "Yes" : "No"}</p>
            <p><b>Notes: </b> {props.interview.notes}</p>
        </Container>
    )
}

const msp = (state) => {
    return {volunteers: state.volunteers}
}

export default connect(msp, null)(Interview);

const Container = styled.div`
    display: inline-block;
    width: 300px;
    height: 250px;
    float: left;
    margin-right: 3%;
    border-style: solid;
    padding: 10px;
    margin-bottom: 5%;
    overflow: scroll;
`