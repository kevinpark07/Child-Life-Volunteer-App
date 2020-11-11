import React, { useState } from 'react';
import {connect} from 'react-redux';
import {newMeeting} from '../Redux/action';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AdminMeetingCard from '../Components/AdminMeetingCard';
import styled from 'styled-components';
import EditIcon from '@material-ui/icons/Edit';
import AppsIcon from '@material-ui/icons/Apps';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const BACKGROUND = "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

const MeetingContainer = (props) => {

    const [form, setForm] = useState(false);
    const [date, setDate] = useState("yyyy-mm-dd");
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
        setForm(!form);
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
        <div>
            <Background alt="background" src={BACKGROUND} />
            {form ? null : <Header>Meet-Ups</Header>}
            <Container>
                <p>
                    { form ?
                        <EditButton
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={clickHandle}
                            startIcon={<AppsIcon />}
                        >Show All Meet-Ups
                        </EditButton> 
                :
                        <EditButton
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={clickHandle}
                            startIcon={<EditIcon />}
                        >Create a Meet-Up   
                        </EditButton>  }
                </p>
                {
                form ? 
                    <Form onSubmit={submitHandle}>
                        <FormHeader>Assign New Meet-Up</FormHeader>
                        <StyledAutocomplete
                        value={volunteer}
                        onChange={(event, newVol) => {
                        setVolunteer(newVol);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="volunteer search"
                        options={approvedVols().map(vol => vol.name)}
                        renderInput={(params) => <TextField {...params} label="Search Volunteer" variant="outlined" />}
                    />
                        <p>
                        <Input
                            required  
                            label="Date" 
                            type="date" 
                            name="date"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            value={date} 
                            onChange={changeHandle}/>
                        </p>
                        <p>
                        <Input
                            required  
                            label="Time" 
                            type="time" 
                            name="time"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                              }}
                            value={time} 
                            onChange={changeHandle}/>
                        </p>
                        <p>
                        <Input
                            required  
                            label="Zoom Link"  
                            name="link"
                            variant="outlined"
                            value={link} 
                            onChange={changeHandle}/>
                        </p>
                        <p>
                        <Input
                            required  
                            label="Patient Name"  
                            name="name"
                            variant="outlined"
                            value={name} 
                            onChange={changeHandle}/>
                        </p>
                        <p>
                        <Input
                            required  
                            label="Patient Age"  
                            name="age"
                            type="number"
                            variant="outlined"
                            value={age} 
                            onChange={changeHandle}/>
                        </p>
                        <p><Textarea
                            required  
                            placeholder="Enter Patient Information"
                            rowsMin={5}
                            rowsMax={10}  
                            name="info"
                            variant="outlined"
                            value={info} 
                            onChange={changeHandle}/>
                        </p>
                        <p><Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            startIcon={<EditIcon />}
                            >Create
                        </Button></p>
                    </Form>
                    :
                    renderMeetings()
                }
            </Container>
        </div>
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

const Input = styled(TextField)`
    width: 400px;
`

const Textarea = styled(TextareaAutosize)`
    width: 400px;
`

const EditButton = styled(Button)`
    postion: absolute;
    left: 43%;
`

const Background = styled.img`
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 120%;
`

const Container = styled.div`
    position: absolute;
    top: 25%;
    left: 10%;
    overflow: auto;
    height: 100%;
    z-index: 1;
    width: 80%;
    border-style: solid;
    border-color: white;
    box-shadow: 5px 5px 5px 2px grey;
    margin-bottom: 5%;
`

const Form = styled.form`
    position: absolute;
    left: 26%;
    top: 10%;
    text-align: center;
    border-style: solid;
    border-color: transparent;
    border-radius: 2%;
    width: 50%;
    opacity: 95%;
    box-shadow: 3px 3px 3px 1px grey;
    background-color: #EFEBE9;
    margin-bottom: 5%;
`
const StyledAutocomplete = styled(Autocomplete)`
    width: 400px;
    margin-left: 19%;
    margin-top: 3%;
`
const Header = styled.h1`
    position: absolute;
    top: 10%;
    left: 42%;
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #EFEBE9;
    text-shadow: 2px 2px 4px #000000;
    font-size: 40pt;
    text-decoration: underline;
`

const FormHeader = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #4287f5;
    text-shadow: 2px 2px 4px #bac3d1;
    font-size: 30pt;
    text-decoration: underline;
`