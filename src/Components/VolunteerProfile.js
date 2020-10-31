import React from 'react';
import styled from 'styled-components'

const VolunteerProfile = (props) => {

    return(
        <Container>
            <Image alt="profile_image" src={props.volunteer.profile_image} />
            <h1>{props.volunteer.name}</h1>
            <p><b>Age: </b> {props.volunteer.age}</p> 
            <p><b>Email: </b> {props.volunteer.email}</p> 
            <p><b>Approved:</b> {props.volunteer.approved ? "Yes":"No"}</p> 
        </Container>
    )
}

export default VolunteerProfile;

const Image = styled.img`
    width: 40%;
    height: 37%;
    border-radius: 7px;
`

const Container = styled.div`
    position: absolute;
    text-align: left;
    left: 50%;
    top: 30%;
}
`