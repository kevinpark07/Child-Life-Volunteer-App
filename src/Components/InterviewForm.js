import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { patchInterview, patchApproval } from '../Redux/action';
import { Redirect } from 'react-router-dom';
import { Button, TextareaAutosize, TextField, Switch, FormControlLabel } from '@material-ui/core';

const BACKGROUND = "https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

const InterviewForm = (props) => {

    const [date, setDate] = useState(props.interview.date);
    const [time, setTime] = useState(props.interview.time);
    const [notes, setNotes] = useState("");
    const [approved, setApproved] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [dropDown, setDropDown] = useState(false);

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

    const dropDownHandle = () => {
        setDropDown(!dropDown)
    }

    const submitHandle = (event) => {
        event.preventDefault()
        let dateTimeObj = {
            date: date,
            time: time, 
        }
        let noteObj = {notes: notes}

        let formData = new FormData();
        formData.append('name', volunteer.name);
        formData.append('age', volunteer.age);
        formData.append('email', volunteer.email);
        formData.append('password', volunteer.password);
        formData.append('profile_image', volunteer.profile_image);
        formData.append('approved', approved);
        
        if (notes === "") {
            props.submitHandler(dateTimeObj, props.interview.id);
        } else {
            props.submitHandler(noteObj, props.interview.id);
            props.approveHandle(formData, props.interview.volunteer_id);
        }

        setRedirect(!redirect)
    }

    let volunteer = props.volunteers.find(vol => vol.id === props.interview.volunteer_id)

    return(
        <div>
            {console.log(volunteer)}
            <Background alt="background" src={BACKGROUND} />
            <ChangeButton
                    variant="contained" 
                    onClick={dropDownHandle}
                    color="default"
                    size="small"
                    > {dropDown ? "Change Date & Time" : "Add Notes & Approve"}
            </ChangeButton>
            <Container>
                {redirect ? <Redirect to='/admin' /> : null}
                <form onSubmit={submitHandle}>
                    <Header>Interview for {volunteer.name}</Header>
                    <p>
                    {dropDown === false ? 
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
                    :
                    null}
                    </p>
                    <p>
                    { dropDown === false ?
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
                    :
                    null}
                    </p>
                    <p>
                    {dropDown ? 
                    <Textarea
                        required  
                        placeholder="Add Interview Notes Here"
                        rowsMin={5}
                        rowsMax={10}  
                        name="notes"
                        variant="outlined"
                        value={notes} 
                        onChange={changeHandle}/>
                    :
                    null
                    }
                    </p>
                    <p>
                    {dropDown ? <FormControlLabel
                        control={
                        <Switch
                            label="Approved ?"
                            checked={approved}
                            onChange={changeHandle}
                            name="approved"
                            value={approved}
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />}
                        label="Approved ?"
                    />
                    :
                    null }
                    </p>
                    <br></br>
                    <p>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            >Update
                        </Button>
                    </p>
                </form>
            </Container>
        </div>
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

const Background = styled.img`
    position: absolute;
    width: 100%;
    z-index: - 1;
`

const Input = styled(TextField)`
    width: 400px;
`

const Container = styled.div`
    position: absolute;
    left: 37%;
    top: 30%;
    text-align: center;
    z-index: 1;
    border-style: outset;
    background-color: #EFEBE9;
    padding: 2%;
`
const Textarea = styled(TextareaAutosize)`
    width: 400px;
`
const ChangeButton = styled(Button)`
    position: absolute;
    left: 46%;
    top: 25%;
    z-index: 1;
`
const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #1565C0;
    text-decoration: underline;
    margin-bottom: 10%;
`