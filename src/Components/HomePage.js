import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

const TEDDY_BACKGROUND = "https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1218&q=80"

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const HomePage = () => {

    const classes = useStyles();

    return (
        <div>
        <Background alt="teddy" src={TEDDY_BACKGROUND} />
        <Header>Child Life Volunteer Portal</Header>
        <Container>
            <Link to={'/login'}>
                <p>
                    <BigButton
                        variant="outlined"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<FingerprintIcon />}
                    >
                    Log-In
                    </BigButton>
                </p>
            </Link>
            <br></br>
            <Link to={'/signup'}>
                <p>
                     <BigButton
                        variant="outlined"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        startIcon={<AssignmentIndIcon />}
                    >
                    Sign-Up
                    </BigButton>
                </p>
            </Link>   
        </Container>
        </div>
    )
}

export default HomePage;

const Container = styled.div`
    position: absolute;
    right: 17%;
    top: 30%;
    text-align: center;
    z-index: 1;
`
const Background = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: - 1;
`

const BigButton = styled(Button)`
    zoom: 150%
`

const Link = styled(NavLink)`
    text-decoration: none;
`
const Header = styled.h1`
    position: absolute;
    right: 5%;
    top: 2%;
    font-family: Chalkduster, fantasy;
    color: #f44336;
    z-index: 1;
    zoom: 150%;
`