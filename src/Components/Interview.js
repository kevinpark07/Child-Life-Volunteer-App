import React from 'react';
import { connect } from 'react-redux'

const Interview = (props) => {

    return(
        <div>
            <p><b>Volunteer: </b> {props.volunteers.find(vol => vol.id === props.interview.volunteer_id).name}</p>
            <p><b>Date: </b> {props.interview.date}</p>
            <p><b>Time: </b> {props.interview.time}</p>
            <p><b>Completed: </b> {props.interview.completed ? "Yes" : "No"}</p>
            <p><b>Notes: </b> {props.interview.notes}</p>
        </div>
    )
}

const msp = (state) => {
    return {volunteers: state.volunteers}
}

export default connect(msp, null)(Interview);