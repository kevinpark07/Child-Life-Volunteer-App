import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { addNotes } from '../Redux/action';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const AssignedMeeting = (props) => {

    const classes = useStyles();

    const [edit, setEdit] = useState(false)


    const clickHandle = () => {
        props.clickHandle(props.meeting)
        setEdit(!edit)
    }

    return(
            <Container>
                {edit ? <Redirect to="/volunteer/addnotes" /> : null}
                <p><b><u>Date</u>: </b> {props.meeting.date}</p>
                <p><b><u>Time</u>: </b> {props.meeting.time}</p>
                <p><b><u>Zoom Link</u>: </b> {props.meeting.link}</p>
                <p><b><u>Patient</u>: </b> {props.meeting.patient_name}</p>
                <p><b><u>Patient Age</u>: </b> {props.meeting.patient_age}</p>
                <p><b><u>Patient Info</u>: </b> {props.meeting.patient_info}</p>
                <p>
                    <NoteButton
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={clickHandle}
                            className={classes.button}
                            startIcon={<AddCircleOutlineIcon />}
                        >Add Notes
                    </NoteButton> 
                </p>
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
    margin-left: 8%;
    margin-right: 3%;
    margin-top: 2%;
    opacity: 100%;
    border-style: outset;
    border-radius: 5%;
    padding: 8px;
    width: 300px;
    height: 300px;
    overflow: scroll;
    color: #F3BB15;
    background-color: #1565C0;
`

const NoteButton = styled(Button)`
    float: left;
    margin-left: 25%;
`