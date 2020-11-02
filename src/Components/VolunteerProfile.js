import React from 'react';
import styled from 'styled-components';
// import {Redirect} from 'react-router-dom'

const VolunteerProfile = (props) => {

    // const [redirect, setRedirect] = useState(false)

    // const changeHandle = () => {
    //     setRedirect(!redirect)
    // }

    return(
        <Container>
            {/* {redirect ? <Redirect to={`/volunteer/${props.volunteer.id}/edit`} /> : null } */}
            <Image alt="profile_image" src={props.volunteer.profile_image} />
            <h1>{props.volunteer.name}</h1>
            <p><b>Age: </b> {props.volunteer.age}</p> 
            <p><b>Email: </b> {props.volunteer.email}</p> 
            <p><b>Approved:</b> {props.volunteer.approved ? "Yes":"No"}</p> 
            {/* <button onClick={changeHandle} >Edit Profile</button> */}
        </Container>
    )
}

export default VolunteerProfile;

const Image = styled.img`
    width: 40%;
    height: 50%;
    border-radius: 7px;
`

const Container = styled.div`
    position: absolute;
    text-align: left;
    left: 50%;
    top: 30%;
`
