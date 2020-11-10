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
    width: 300px;
    height: 385px;
    float: left;
    text-align: center;
    margin-left: 7%;
    margin-top: 2%;
    margin-bottom: 2%;
    overflow: scroll;
    background-color:#EFEBE9;
    opacity: 90%;
    box-shadow: 5px 5px 5px 2px grey;
`

const Image = styled.img`
    margin-top: 5%;
    width: 200px;
    height: 150px;
    border-radius: 7px;
`