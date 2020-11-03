import React, { useState } from 'react';
import {connect} from 'react-redux';
import {newMeeting} from '../Redux/action';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminMeetingCard from '../Components/AdminMeetingCard';
import styled from 'styled-components';


const MeetingContainer = (props) => {

    const [form, setForm] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [info, setInfo] = useState("");
    const [link, setLink] = useState("");
    const [volunteer, setVolunteer] = useState("")
    const [inputValue, setInputValue] = useState("");

    const renderMeetings = () => {
        return props.meetings.map(meeting => <AdminMeetingCard key={meeting.id} meeting={meeting} />)
    }

    const clickHandle = () => {
        setForm(!form)
    }

    const changeHandle = (event) => {
        if (event.target.name === "date") {
            setDate(event.target.value)
        } else if (event.target.name === "time") {
            setTime(event.target.value)
        } else if (event.target.name === "name") {
            setName(event.target.value)
        } else if (event.target.name === "age") {
            setAge(event.target.value)
        } else if (event.target.name === "info") {
            setInfo(event.target.value)
        } else if (event.target.name === "link") {
            setLink(event.target.value)
        }
    }

    const submitHandle = (event) => {
        event.preventDefault();
        let chosenVol = props.volunteers.find(vol => vol.name === volunteer)
        let newMeeting = {
            date: date,
            time: time, 
            patient_name: name,
            patient_age: age,
            patient_info: info,
            link: link,
            volunteer: chosenVol.id
        }
        props.submitHandle(newMeeting);
        setDate("");
        setTime("");
        setName("");
        setAge("");
        setLink("");
        setInfo("");
        setVolunteer("");
    }

    const approvedVols = () => {
        return props.volunteers.filter(vol => vol.approved === true)
    }

    return (
        <Container>
            <p><button onClick={clickHandle}>{form ? "Show All Meet-Ups" : "Create a Meet-Up"}</button></p>
            {
            form ? 
                <Form onSubmit={submitHandle}>
                    <StyledAutocomplete
                    value={volunteer}
                    onChange={(event, newVol) => {
                    setVolunteer(newVol);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={approvedVols().map(vol => vol.name)}
                    renderInput={(params) => <TextField {...params} label="Search Volunteer" variant="outlined" />}
                />
                    <p><b>Date </b><input type="date" name="date" value={date} onChange={changeHandle} /></p>
                    <p><b>Time </b><input type="time" name="time" value={time} onChange={changeHandle} /></p>
                    <p><b>Zoom Link </b><input type="text" name="link" placeholder="Enter Link Here" value={link} onChange={changeHandle} /></p>
                    <p><b>Patient Name </b><input type="text" name="name" placeholder="Enter Name Here" value={name} onChange={changeHandle} /></p>
                    <p><b>Patient Age </b><input type="number" name="age" placeholder="Enter Age Here" value={age} onChange={changeHandle} /></p>
                    <p><TextArea type="text" name="info" placeholder="Enter Patient Information" value={info} onChange={changeHandle} /></p>
                    <p><button type="submit">Create</button></p>
                </Form>
                :
                renderMeetings()
            }
        </Container>
    )

}

const msp = state => {
    return {
        user: state.user,
        meetings: state.meetings, 
        volunteers: state.volunteers
    }
}

const mdp = dispatch => {
    return { submitHandle: (meetingObj) => dispatch(newMeeting(meetingObj))}
}

export default connect(msp,mdp)(MeetingContainer);

const Container = styled.div`
    position: absolute;
    top: 20%;
    left: 20%;
    width: 100%;
    padding: 5%;
    overflow: scroll;
`

const Form = styled.form`
    text-align: center;
    border-style: solid;
`
const TextArea = styled.textarea`
    height: 100px;
    width: 350px;
`
const StyledAutocomplete = styled(Autocomplete)`
    width: 30%;
    margin-left: 35%;
    margin-top: 3%;
`