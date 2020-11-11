import React, {useState} from 'react';
import {connect} from 'react-redux';
import {editVol} from '../Redux/action';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';


const EditProfile = (props) => {

    const [name, setName] = useState(props.user.name);
    const [age, setAge] = useState(props.user.age);
    const [email, setEmail] = useState(props.user.email);
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [profileImage, setProfileImage] = useState(props.user.profile_image);
    const [redirect, setRedirect] = useState(false);

    const changeHandle = (event) => {
        if (event.target.name === "name") {
            setName(event.target.value)
        } else if (event.target.name === "age") {
            setAge(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password1") {
            setPassword(event.target.value)
        } else if (event.target.name === "password2") {
            setSecondPassword(event.target.value)
        } else if (event.target.name === "image") {
            setProfileImage(event.target.files[0])
        }
    }
    
    const submitHandle = (event) => {
        event.preventDefault();
        let formData = new FormData();
        
        formData.append('name', name);
        formData.append('age', age);
        formData.append('email', email);
        formData.append('profile_image', profileImage);
        formData.append('approved', props.user.approved);
        
        if (secondPassword === "") {
            formData.append('password', password)
        } else {
            formData.append('password', secondPassword)
        }
        
        if (password === props.user.password) {
                props.submitHandle(formData, props.user.id);
                setRedirect(!redirect)   
            } else {
                alert("Your password does not match what we have on file. Please re-enter your current password.");
                setPassword("");
            }
    }

    return (
        <Container>
            {redirect ? <Redirect to={`/volunteer/${props.user.id}`} /> : null}
            <Header>Edit Volunteer Profile</Header>
            <form id="edit" onSubmit={submitHandle}>
            <TextInput  
                    label="Full Name"  
                    name="name"
                    variant="outlined"
                    value={name} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextInput
                    type= "number" 
                    label="Age"  
                    name="age"
                    variant="outlined"
                    value={age} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextInput
                    label="E-mail"  
                    name="email"
                    variant="outlined"
                    value={email} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextInput
                    label="Type New Password"
                    type="password"  
                    name="password2"
                    variant="outlined"
                    value={secondPassword} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <p><Label>Upload a Profile Photo</Label></p>
                <Input type="file" name= "image" label="Choose a Profile Image" onChange={changeHandle} />
                    <br></br>
                    <br></br>
                <h4>Please enter current Password to confirm changes</h4>
                <TextInput
                    required 
                    label="Enter Current Password" 
                    type="password" 
                    name="password1"
                    variant="outlined"
                    value={password} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <Button type="submit" variant="contained" color="secondary">
                    Update Volunteer Account
                </Button>
            </form>
        </Container>
    )
}

const msp = state => {
    return { 
        volunteers: state.volunteers,
        user: state.user 
    }
}

const mdp = dispatch => {
    return { 
        submitHandle:(formData, id) => dispatch(editVol(formData, id))
    }
}

export default connect(msp, mdp)(EditProfile);

const Container = styled.div`
    position: absolute;
    right: 35%;
    top: 15%;
    text-align: center;
    z-index: 1;
    color: #f44336;
`

const TextInput = styled(TextField)`
    width: 400px;
`

const Label = styled.label`
    text-decoration: underline;
    font-weight: bold;
`
const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    color: #f44336;
    text-decoration: underline;
`