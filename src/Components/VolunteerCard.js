import React from 'react';
import {deleteVol} from '../Redux/action'
import styled from 'styled-components';
import {connect} from 'react-redux';



const VolunteerCard = (props) => {

    const clickHandle = () => {
        props.clickHandle(props.volunteer.id)
    }

    return(
            <Container>
                <Image alt="profile_image" src={props.volunteer.profile_image} />
                <h1>{props.volunteer.name}</h1>
                <p><b>Age: </b> {props.volunteer.age}</p> 
                <p><b>Email: </b> {props.volunteer.email}</p> 
                <p><b>Approved?: </b> {props.volunteer.approved ? "Yes" : "No"}</p>
                <p><button onClick={clickHandle}>Remove Volunteer</button></p>
            </Container>
    )
}

const mdp = (dispatch) => {
    return { 
        clickHandle: (id) => { dispatch(deleteVol(id))}
    }
}

export default connect(null, mdp)(VolunteerCard);


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