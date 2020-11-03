import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { patchMeeting } from '../Redux/action';
import { Redirect } from 'react-router-dom';


const InterviewForm = (props) => {

    const [notes, setNotes] = useState("");
    const [redirect, setRedirect] = useState(false);

    const changeHandle = (event) => {
        if (event.target.name === "notes") {
            setNotes(event.target.value)
        } 
    }

    const submitHandle = (event) => {
        event.preventDefault()
        let noteObj = {
            notes: notes
        }

        props.submitHandler(noteObj, props.meeting.id);

        setRedirect(!redirect)
    }


    return(
        <Container>
            {redirect ? <Redirect to={`/volunteer/${props.user.id}/meetings`} /> : null}
            <form onSubmit={submitHandle}>
                {console.log(props.meeting)}
                <h1>Add Notes for {props.meeting.patient_name} on {props.meeting.date}</h1>
                <p><Textarea name="notes" placeholder="Add Notes Here" value={notes} onChange={changeHandle} /></p>
                <br></br>
                <p><button type="submit">Submit</button></p>
            </form>
        </Container>
    )
    
}

    const msp = (state) => {
        return {
            user: state.user,
            meeting: state.meeting
        }
    }

    const mdp = dispatch => {
        return { 
            submitHandler: (note, id) =>  dispatch(patchMeeting(note, id))
        }
    }
    

    export default connect(msp, mdp)(InterviewForm);


const Container = styled.div`
    position: absolute;
    left: 30%;
    top: 30%;
    text-align: center;
    width: 500px;
    height: 300px;
`
const Textarea = styled.textarea`
    width: 75%;
    height: 75px;
`