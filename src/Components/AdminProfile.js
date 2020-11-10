import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const AdminProfile = (props) => {

    return(
        <div>
            <Background alt="background" src={BACKGROUND_IMAGE} />
            <ImageContainer>
                <Image cloudName="childlifeappmod5project" publicId="profile_pic" src={props.admin.profile_image} height="400" width="350" crop="fill" />
                {/* <Image alt="profile_image" src={props.admin.profile_image} /> */}
            </ImageContainer>
            <Container>
                <h1>{props.admin.name}</h1>
                <p><b>Age: </b> {props.admin.age}</p> 
                <p><b>Email: </b> {props.admin.email}</p> 
                <p><b>Department:</b> {props.admin.department}</p> 
                <p><b>Position:</b> {props.admin.position}</p> 
            </Container>
        </div>
    )
}

export default AdminProfile;

const Background = styled.img`
    width: 100%;
    height: 100%;
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