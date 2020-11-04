import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <Container>
            <NavLink to={'/login'}>
                <p>Log-In</p>
            </NavLink>
            <NavLink to={'/signup'}>
                <p>Sign-Up</p>
            </NavLink>
        </Container>
    )
}

export default HomePage;

const Container = styled.div`
    position: absolute;
    left: 45%;
    top: 40%;
    text-align: center;
`