import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PeopleIcon from '@material-ui/icons/People';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const LoginHome = (props) => {

    const classes = useStyles();

    const [volunteer, setVolunteer] = useState(false);
    const [admin, setAdmin] = useState(false);

    const clickHandle = event => {
        if (event.target.outerText === "VOLUNTEER") {
            setVolunteer(!volunteer);
            setAdmin(false)
        } else if (event.target.outerText === "ADMINISTRATOR") {
            setAdmin(!admin);
            setVolunteer(false)
        }
    }

    return(
        <Container>
            {volunteer ? <Redirect to={'/login/volunteer'} /> : null}
            {admin ? <Redirect to={'/login/admin'} /> : null}
                <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        onClick={clickHandle}
                        className={classes.button}
                        startIcon={<PeopleIcon />}
                        zoom="200%"
                    >Volunteer
                </Button> 
                <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        onClick={clickHandle}
                        className={classes.button}
                        startIcon={<SupervisedUserCircleIcon />}
                        zoom="200%"
                    >Administrator
                </Button> 
        </Container>
    )
}


export default LoginHome;

const Container = styled.div`
    position: absolute;
    right: 13%;
    top: 25%;
    text-align: center;
    z-index: 1;
`
