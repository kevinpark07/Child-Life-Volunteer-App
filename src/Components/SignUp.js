import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newVol, loginUser} from '../Redux/action';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const TEDDY_BACKGROUND = "https://images.unsplash.com/photo-1585435421671-0c16764628ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1218&q=80"

const SignUp = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [home, setHome] = useState(false);

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

    const homeHandle = () => {
        setHome(!home);
    }
    
    const submitHandle = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('profile_image', profileImage);

        if (password === secondPassword) {
            if (props.volunteers.find(vol => vol.email === email)) {
                alert("The email you used already has a Volunteer account.");
                setEmail("");
                setPassword("");
            setSecondPassword("");
            } else {
                props.submitHandle(formData);
                setRedirect(!redirect)
            }
        } else {
            alert("Passwords do not match, please try again.");
            setName("");
            setAge("");
            setEmail("");
            setPassword("");
            setSecondPassword("");
            setProfileImage("");
        }
    }

    return (
        <div>
            {redirect ? <Redirect to="/volunteer" /> : null}
            {home ? <Redirect to="/" /> : null}
            <Background alt="teddy" src={TEDDY_BACKGROUND} />
            <Home onClick={homeHandle} />
            <Container>
                <Header>Sign-Up To Be A Volunteer</Header>
                <form id="signup" onSubmit={submitHandle}>
                <TextField
                    required  
                    label="Full Name"  
                    name="name"
                    variant="outlined"
                    value={name} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextField
                    required 
                    type= "number" 
                    label="Age"  
                    name="age"
                    variant="outlined"
                    value={age} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextField
                    required 
                    label="E-mail"  
                    name="email"
                    variant="outlined"
                    value={email} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextField
                    required 
                    label="Choose a Password" 
                    type="password" 
                    name="password1"
                    variant="outlined"
                    value={password} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                <TextField
                    required 
                    label="Re-Enter Password"
                    type="password"  
                    name="password2"
                    variant="outlined"
                    value={secondPassword} 
                    onChange={changeHandle}
                />
                    <br></br>
                    <br></br>
                    <br></br>
                <p><Label>Upload a Profile Photo</Label></p>
                <Input type="file" name= "image" label="Choose a Profile Image" onChange={changeHandle} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                <Button type="submit" variant="contained" color="secondary">
                    Create Volunteer Account
                </Button>
                </form>
            </Container>
        </div>
    )
}

const msp = state => {
    return { volunteers: state.volunteers }
}

const mdp = dispatch => {
    return { 
        submitHandle:(newVolObj) => dispatch(newVol(newVolObj)),
        loginHandle: (user) => dispatch(loginUser(user))
    }
}

export default connect(msp, mdp)(SignUp);

const Container = styled.div`
    position: absolute;
    right: 15%;
    top: 8%;
    text-align: center;
    z-index: 1;
    color: #f44336;
`

const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: - 1;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    color: #f44336;
    text-decoration: underline;
`

const Label = styled.label`
    text-decoration: underline;
    font-weight: bold;
`

const Home = styled(HomeIcon)`
    color: #f44336;
    position: absolute;
    right: 2%;
    top: 6%;
    zoom: 250%;
`