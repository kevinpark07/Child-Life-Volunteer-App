import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { editInterview } from '../Redux/action';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const InterviewCard = (props) => {

    const classes = useStyles();

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
                <p>
                    <NoteButton
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={clickHandle}
                            className={classes.button}
                            startIcon={<EditIcon />}
                        >Edit Interview
                    </NoteButton>
                </p>
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
    margin-left: 9%;
    margin-top: 3%;
    opacity: 100%;
    border-style: outset;
    border-radius: 5%;
    padding: 8px;
    width: 300px;
    height: 240px;
    overflow: scroll;
    color: #F3BB15;
    background-color: #1565C0;
`

const NoteButton = styled(Button)`
    postion: absolute;
    left: 20%;
`