import React from 'react';
import styled from 'styled-components';



const VolunteerCard = (props) => {

    return(
            <Container>
                <Image alt="profile_image" src={props.volunteer.profile_image} />
                <h1>{props.volunteer.name}</h1>
                <p><b>Age: </b> {props.volunteer.age}</p> 
                <p><b>Email: </b> {props.volunteer.email}</p> 
            </Container>
    )
}

export default VolunteerCard;


const Container = styled.div`
    display: inline-block;
    float: left;
    margin-right: 3%;
    border-style: solid;
    padding: 10px;
    margin-bottom: 5%;
`

const Image = styled.img`
    width: 200px;
    height: 150px;
    border-radius: 7px;
`