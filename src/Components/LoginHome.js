import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogin, volLogin } from '../Redux/action'
import styled from 'styled-components';

const LoginHome = (props) => {

    const [volunteer, setVolunteer] = useState(false);
    const [admin, setAdmin] = useState(false);

    const clickHandle = event => {
        if (event.target.name === "volunteer") {
            setVolunteer(!volunteer);
        } else if (event.target.name === "admin") {
            setAdmin(!admin)
        }
    }

    return(
        <Container>
            {volunteer ? <Redirect to={'/login/volunteer'} /> : null}
            {admin ? <Redirect to={'/login/admin'} /> : null}
            <ButtonContainer>
                <Button name="volunteer" onClick={clickHandle}>
                    Volunteer
                </Button>
                <Button name="admin" onClick={clickHandle}>
                    Administrator
                </Button>
            </ButtonContainer>
            
        </Container>
    )
}

const msp = (state) => {
    return {
        adminLogin: state.adminLogin
    }
}

const mdp = (dispatch) => {
    return {adminLogin: () => dispatch(adminLogin())}
}

export default connect(msp, mdp)(LoginHome);

const Container = styled.div`
    position: absolute;
    left: 43%;
    top: 30%;
    text-align: center;
`

const ButtonContainer = styled.div`
    width: 100%
`

const Button = styled.button`
    float: left;
    display: inline;
    margin-right: 10px;
`