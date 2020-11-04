import React, { useState } from 'react';
import {Redirect } from 'react-router-dom';
import styled from 'styled-components';

const LoginHome = () => {

    const [volunteer, setVolunteer] = useState(false);
    const [admin, setAdmin] = useState(false);

    const clickHandle = event => {
        if (event.target.name === "volunteer") {
            setVolunteer(!volunteer);
        } else if (event.target.name === "admin") {
            setAdmin(!admin);
        }
    }

    return(
        <Container>
            {volunteer ? <Redirect to={'/login/volunteer'} /> : null}
            {admin ? <Redirect to={'/login/admin'} /> : null}
            <p><button name="volunteer" onClick={clickHandle}>
                Volunteer
            </button></p>
            <p><button name="admin" onClick={clickHandle}>
                Administrator
            </button></p>
        </Container>
    )
}

export default LoginHome;

const Container = styled.div`
    position: absolute;
    left: 50%;
    top: 30%;
    text-align: center;
`