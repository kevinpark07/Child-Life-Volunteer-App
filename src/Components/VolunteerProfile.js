import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';


const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"

const VolunteerProfile = (props) => {


    return(
        <div>
        <Background alt="background" src={BACKGROUND_IMAGE} />
        <ImageContainer>
            <Image cloudName="childlifeappmod5project" publicId="profile_pic" src={props.volunteer.profile_image} height="400" width="350" crop="fill" />
            {/* <Image alt="profile_image" src={props.volunteer.profile_image} /> */}
        </ImageContainer>
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
    height: 110%;
    z-index: -1;
`

const ImageContainer = styled.div`
    position: absolute;
    top: 32%;
    left: 30%;
    z-index: 1;
    border-style: outset;
    border-width: thick;
    background-color: black;
    height: 410px;
`

const Container = styled.div`
    position: absolute;
    text-align: left;
    right: 22%;
    top: 40%;
    font-size: 12pt;
    z-index: 1;
    padding: 2%;
    color: black;
    border-style: inset;
    border-radius: 20%;
    background: #EFEBE9;
`