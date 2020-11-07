import React from 'react';
import styled from 'styled-components';

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1500042825080-66d3b701f10f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"

const VolunteerProfile = (props) => {


    return(
        <div>
        <Background alt="background" src={BACKGROUND_IMAGE} />
        <Image alt="profile_image" src={props.volunteer.profile_image} />
        <Container>
            {/* {redirect ? <Redirect to={`/volunteer/${props.volunteer.id}/edit`} /> : null } */}
            <h1><u>{props.volunteer.name}</u></h1>
            <p><b><u>Age</u>: </b> {props.volunteer.age}</p> 
            <p><b><u>Email</u>: </b> {props.volunteer.email}</p> 
            <p><b><u>Approved</u>: </b> {props.volunteer.approved ? "Yes":"No"}</p> 
            {/* <button onClick={changeHandle} >Edit Profile</button> */}
        </Container>
        </div>
    )
}

export default VolunteerProfile;

const Background = styled.img`
    width: 100%;
    z-index: -1;
`

const Image = styled.img`
    position: absolute;
    top: 32%;
    left: 20%;
    width: 30%;
    height: auto;
    border-radius: 50%;
    z-index: 1;
`

const Container = styled.div`
    position: absolute;
    text-align: left;
    right: 22%;
    top: 35%;
    font-size: 12pt;
    z-index: 1;
    padding: 2%;
    color: black;
    border-style: inset;
    border-radius: 20%;
    background: #EFEBE9;
`
