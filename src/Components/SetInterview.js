import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newInterview} from '../Redux/action';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const BACKGROUND_URL = "https://images.unsplash.com/photo-1560130958-0ea787c275de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  

const SetInterview = props => {

    const classes = useStyles();

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        setRedirect(!redirect);
      };

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
        setOpen(true);
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="title">Thank you for signing up to volunteer!</h2>
          <p id="description">
            A Child Life coordinator will reach out to you by email to confirm or suggest a different time.
          </p>
        </div>
      );

    return (

        <div>
            <Background alt="background" src={BACKGROUND_URL} />
            <Container>
                <form onSubmit={submitHandle} >
                    {redirect ? <Redirect to="/volunteer" /> : null }
                    <Header>Schedule an Interview</Header>
                    <SubHeader>Monday - Friday 9:00 AM - 5:00 PM</SubHeader>
                    <br></br>
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
                    <br></br>
                    <p>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="secondary"
                            size="small"
                            >Set Interview
                        </Button>
                    </p>
                </form>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="title"
                aria-describedby="description"
            >
                {body}
            </Modal>
        </div>
    )
}

const msp = state => {
    return {user: state.user}
}

const mdp = (dispatch) => {
    return { submitHandle: (interview) => dispatch(newInterview(interview)) }
}

export default connect(msp, mdp)(SetInterview);

const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: - 1;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    text-align: center;
    color: #E53935;
    text-shadow: 2px 2px 4px #000000;
    font-size: 30pt;
`

const SubHeader = styled.h4`
    color: #E53935; 
`

const Container = styled.div`
    position: absolute;
    left: 37%;
    top: 25%;
    text-align: center;
    z-index: 1;
    border-style: outset;
    background-color: #EFEBE9;
    padding: 2%;
`
const Input = styled(TextField)`
    width: 400px;
`