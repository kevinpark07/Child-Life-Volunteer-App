import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../Redux/action'
import {Redirect} from 'react-router-dom'

const VolunteerLogin = (props) => {
    
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
        let foundVol = props.volunteers.find(vol => vol.email === email && vol.password === password)
        if(foundVol) {
            props.submitHandle(foundVol);
            setRedirect(!redirect)
        } else {
            return alert("Incorrect Username and Password")
        }
        
    }
    
    return (
        <>
        {redirect ? <Redirect to={'/volunteer'} /> : null}
        <form onSubmit={submitHandle}>
            <h1>Volunteer Log-In</h1>
            <label>E-mail</label>
            <p><input type="textfield" name="email" placeholder="E-mail" value={email} onChange={changeHandle} /></p>
            <label>Password</label>
            <p><input type="password" name="password" placeholder="Password" value={password} onChange={changeHandle} /></p>
            <button type="submit">Log-In</button>
        </form>
        </>
    )
}

const msp = (state) => {
    return { 
        user: state.user,
        volunteers: state.volunteers
     }
}


const mdp = (dispatch) => {
    return { submitHandle: (user) => dispatch(loginUser(user))}
}

export default connect(msp, mdp)(VolunteerLogin);