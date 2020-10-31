import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { editInterview } from '../Redux/action'


const InterviewCard = (props) => {

    const [edit, setEdit] = useState(false)

    let volunteer = props.volunteers.find(vol => vol.id === props.interview.volunteer_id)

    const clickHandle = () => {
        props.clickHandle(props.interview)
        setEdit(!edit)
    }

    return(
            <Container>
                {edit ? <Redirect to="/admin/editinterview" /> : null}
                <p><b>Candidate: </b> {volunteer.name}</p>
                <p><b>E-mail: </b> {volunteer.email}</p>
                <p><b>Current Date of Interview: </b> {props.interview.date}</p>
                <p><b>Current Time of Interview: </b> {props.interview.time}</p>
                <p><button onClick={clickHandle}>Edit Interview</button></p>
            </Container>
    )
}

    const msp = (state) => {
        return {
            volunteers: state.volunteers,
            user: state.user
        }
    }

    const mdp = (dispatch) => {
        return {
            clickHandle: (interview) => dispatch(editInterview(interview))
        }
    }

export default connect(msp, mdp)(InterviewCard);


const Container = styled.div`
    display: inline-block;
    float: left;
    margin-right: 3%;
    border-style: solid;
    padding: 10px;
`