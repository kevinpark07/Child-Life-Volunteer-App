import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/action';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

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
        {redirect ? <Redirect to={'/admin/'} /> : null}
        <form onSubmit={submitHandle}>
            <h1>Administrator Log-In</h1>
            <label>E-mail</label>
            <p><input type="textfield" name="email" placeholder="E-mail" value={email} onChange={changeHandle} /></p>
            <label>Password</label>
            <p><input type="password" name="password" placeholder="Password" value={password} onChange={changeHandle} /></p>
            <button type="submit">Log-In</button>
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
    margin-top: 20%;
    text-align: center;
`