import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { patchMeeting } from '../Redux/action';
import { Redirect } from 'react-router-dom';
import { Button, TextareaAutosize } from '@material-ui/core';

const BACKGROUND = "https://images.unsplash.com/photo-1583937912858-433447c0bcaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

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
        <div>
             <Background alt="background" src={BACKGROUND} />
            <Container>
                {redirect ? <Redirect to={`/volunteer/${props.user.id}/meetings`} /> : null}
                <form onSubmit={submitHandle}>
                    <Header>Post Meet-Up Notes: {props.meeting.patient_name}</Header>
                    <Textarea
                            required  
                            placeholder="Add Meet-Up Notes Here"
                            rowsMin={5}
                            rowsMax={10}  
                            name="notes"
                            variant="outlined"
                            value={notes} 
                            onChange={changeHandle}/>
                    <br></br>
                    <br></br>
                    <p>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="small"
                            >Add Notes
                        </Button>
                    </p>
                </form>
            </Container>
        </div>
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

const Background = styled.img`
    position: absolute;
    width: 100%;
    z-index: - 1;
`

const Container = styled.div`
    position: absolute;
    left: 35%;
    top: 37%;
    text-align: center;
    z-index: 1;
    border-style: outset;
    background-color: #EFEBE9;
    padding: 2%;
`
const Textarea = styled(TextareaAutosize)`
    width: 450px;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #1565C0;
    text-decoration: underline;
    margin-bottom: 7%;
`