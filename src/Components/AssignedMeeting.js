import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { addNotes } from '../Redux/action'


const AssignedMeeting = (props) => {

    const [edit, setEdit] = useState(false)


    const clickHandle = () => {
        props.clickHandle(props.meeting)
        setEdit(!edit)
    }

    return(
            <Container>
                {edit ? <Redirect to="/volunteer/addnotes" /> : null}
                <p><b>Date: </b> {props.meeting.date}</p>
                <p><b>Time: </b> {props.meeting.time}</p>
                <p><b>Zoom Link: </b> {props.meeting.link}</p>
                <p><b>Patient: </b> {props.meeting.patient_name}</p>
                <p><b>Patient Age: </b> {props.meeting.patient_age}</p>
                <p><b>Patient Info: </b> {props.meeting.patient_info}</p>
                <p><button onClick={clickHandle}>Add Notes</button></p>
            </Container>
    )
}

    const msp = (state) => {
        return {
            user: state.user
        }
    }

    const mdp = (dispatch) => {
        return {
            clickHandle: (meeting) => dispatch(addNotes(meeting))
        }
    }

export default connect(msp, mdp)(AssignedMeeting);


const Container = styled.div`
    display: inline-block;
    float: left;
    margin-right: 3%;
    border-style: solid;
    padding: 10px;
    width: 300px;
    height: 200px;
    overflow: scroll;
`