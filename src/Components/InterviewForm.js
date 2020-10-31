import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { patchInterview, patchApproval } from '../Redux/action';
import { Redirect } from 'react-router-dom';


const InterviewForm = (props) => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const [approved, setApproved] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const changeHandle = (event) => {
        if (event.target.name === "date") {
            setDate(event.target.value)
        } else if (event.target.name === "time") {
            setTime(event.target.value)
        } else if (event.target.name === "notes") {
            setNotes(event.target.value)
        } else if (event.target.name === "approved") {
            setApproved(!approved)
        }
    }

    const submitHandle = (event) => {
        event.preventDefault()
        let interviewObj = {
            date: date,
            time: time, 
            notes: notes
        }

        props.submitHandler(interviewObj, props.interview.id);
        props.approveHandle(approved, props.interview.volunteer_id);

        setRedirect(!redirect)
    }

    let volunteer = props.volunteers.find(vol => vol.id === props.interview.volunteer_id)

    return(
        <Container>
            {redirect ? <Redirect to='/admin' /> : null}
            <form onSubmit={submitHandle}>
                {console.log(props.volunteers)}
                <h1>Update Interview for {volunteer.name}</h1>
                <p><input type="date" name="date" value={date} onChange={changeHandle} /></p>
                <p><input type="time" name="time" value={time} onChange={changeHandle} /></p>
                <p><Textarea name="notes" placeholder="Add Notes Here" value={notes} onChange={changeHandle} /></p>
                <p><input type="checkbox" name="approved" value={approved} onChange={changeHandle} /><label><b>Approved?</b></label></p>
                <br></br>
                <p><button type="submit">Submit</button></p>
            </form>
        </Container>
    )
    
}

    const msp = (state) => {
        return {
            interviews: state.interviews,
            volunteers: state.volunteers,
            user: state.user,
            interview: state.interview
        }
    }

    const mdp = dispatch => {
        return { 
            submitHandler: (interview, id) =>  dispatch(patchInterview(interview, id)),
            approveHandle: (approve, id) => dispatch(patchApproval(approve, id))
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