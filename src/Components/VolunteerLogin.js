import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/action'

const VolunteerLogin = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("") ;  
    
    const changeHandle = event => {
        if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }

    const submitHandle = event => {
        event.preventDefault();
        props.submitHandle(email);
    }
    
    return (
        <form onSubmit={submitHandle}>
            {console.log(props.user)}
            <h1>Volunteer Log-In</h1>
            <label>E-mail</label>
            <p><input type="textfield" name="email" placeholder="E-mail" value={email} onChange={changeHandle} /></p>
            <label>Password</label>
            <p><input type="password" name="password" placeholder="Password" value={password} onChange={changeHandle} /></p>
            <button type="submit">Log-In</button>
        </form>
    )
}

const msp = (state) => {
    return {user: state.user }
}


const mdp = (dispatch) => {
    return { submitHandle: (user) => dispatch(loginUser(user))}
}

export default connect(msp, mdp)(VolunteerLogin);