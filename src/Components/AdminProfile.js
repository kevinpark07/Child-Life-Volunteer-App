import React from 'react';
import styled from 'styled-components'

const AdminProfile = (props) => {

    return(
        <Container>
            <Image alt="profile_image" src={props.admin.profile_image} />
            <h1>{props.admin.name}</h1>
            <p><b>Age: </b> {props.admin.age}</p> 
            <p><b>Email: </b> {props.admin.email}</p> 
            <p><b>Department:</b> {props.admin.department}</p> 
            <p><b>Position:</b> {props.admin.position}</p> 
        </Container>
    )
}

export default AdminProfile;

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