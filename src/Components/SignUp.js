import { NaturePeopleOutlined } from '@material-ui/icons';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {newVol} from '../Redux/action';

const SignUp = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("")
    const [profileImage, setProfileImage] = useState("");

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
        formData.append('password', password);
        formData.append('profile_image', profileImage);
        console.log(formData)

        if (password === secondPassword) {
            props.submitHandle(formData)
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
            <h1>Sign-Up Page</h1>
            <form id="signup" onSubmit={submitHandle}>
                <p><input type="text" name= "name" placeholder="Full Name" value={name} onChange={changeHandle} /></p>
                <p><input type="number" name= "age" placeholder="Age" value={age} onChange={changeHandle} /></p>
                <p><input type="text" name= "email" placeholder="Email" value={email} onChange={changeHandle} /></p>
                <p><input type="password" name= "password1" placeholder="Choose a Password" value={password} onChange={changeHandle} /></p>
                <p><input type="password" name= "password2" placeholder="Re-Type Password" value={secondPassword} onChange={changeHandle} /></p>
                <p><input type="file" name= "image" onChange={changeHandle} /></p>
                <p><button type="submit">Submit</button></p>
            </form>
        </div>
    )
}

const mdp = dispatch => {
    return { submitHandle:(newVolObj) => dispatch(newVol(newVolObj))}
}

export default connect(null, mdp)(SignUp);