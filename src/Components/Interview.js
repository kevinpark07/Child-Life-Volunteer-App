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
    width: 350px;
    height: 325px;
    float: left;
    margin-left: 5%;
    padding-right: 3%;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-bottom: 5%;
    border-style: solid;
    border-color: transparent;
    border-radius: 2%;
    overflow: scroll;
    background-color:#EFEBE9;
    opacity: 90%;
    box-shadow: 3px 3px 3px 1px grey;
`