import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/action';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AdminLogin = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") ;
    const [redirect, setRedirect] = useState(false);  
    
    const changeHandle = event => {
        if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }

    const submitHandle = event => {
        event.preventDefault();
        let foundAdmin = props.admins.find(admin => admin.email === email && admin.password === password)
        if(foundAdmin) {
            props.submitHandle(foundAdmin);
            setRedirect(!redirect)
        } else {
            setEmail("");
            setPassword("");
            return (alert("Invalid e-mail and password. Please try again."))
        }
        
    }
    
    return (
        <Container>
            <form onSubmit={submitHandle}>
                {redirect ? <Redirect to={'/admin/'} /> : null}
                <Header>Administrator Log-In</Header>
                    <TextField
                        required  
                        label="Email"  
                        name="email"
                        variant="outlined"
                        value={email} 
                        onChange={changeHandle}/>
                    <br></br>
                    <br></br>
                    <TextField
                        required 
                        label="Password"
                        type="password"
                        name="password"
                        variant="outlined"
                        value={password} 
                        onChange={changeHandle}
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button type="submit" variant="contained" color="secondary">
                        Log-In
                    </Button>
            </form>
        </Container>
    )
}

const msp = (state) => {
    return { 
        user: state.user,
        admins: state.admins
     }
}


const mdp = (dispatch) => {
    return { submitHandle: (user) => dispatch(loginUser(user)) }
}

export default connect(msp, mdp)(AdminLogin);

const Container = styled.div`
    position: absolute;
    right: 15%;
    top: 35%;
    text-align: center;
    z-index: 1;
    color: #f44336;
`

const Header = styled.h1`
    font-family: Marker Felt, fantasy;
    color: #f44336;
`