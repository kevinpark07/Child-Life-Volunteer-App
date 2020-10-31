import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newInterview} from '../Redux/action';
import {Redirect} from 'react-router-dom';

const SetInterview = props => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [redirect, setRedirect] = useState(false)

    const changeHandle = event => {
        if (event.target.name === "date") {
            setDate(event.target.value)
        } else if (event.target.name === "time") {
            setTime(event.target.value)
        }
    }

    const submitHandle = event => {
        event.preventDefault()
        const interviewObj = {
            date: date,
            time: time,
            volunteer_id: props.user.id
        }
        props.submitHandle(interviewObj);
        alert("Thank you for selecting an interview date & time. A Child Life coordinator will reach out to you by email to confirm or suggest a different time.");
        setRedirect(!redirect)
    }

    return (
        <form onSubmit={submitHandle} >
            {redirect ? <Redirect to="/volunteer" /> : null }
            <h1>Set and Interview Time and Date</h1>
            <h4>Availability is from Monday - Friday 9:00 AM - 5:00 PM</h4>
            <p><input type="date" name="date" value={date} onChange={changeHandle} /></p>
            <p><input type="time" name="time" value={time} onChange={changeHandle} /></p>
            <p><button type="submit">Submit</button></p>
        </form>
    )
}

const msp = state => {
    return {user: state.user}
}

const mdp = (dispatch) => {
    return { submitHandle: (interview) => dispatch(newInterview(interview)) }
}

export default connect(msp, mdp)(SetInterview);