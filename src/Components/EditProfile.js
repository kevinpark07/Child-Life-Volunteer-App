import React, {useState} from 'react';
import {connect} from 'react-redux';
// import {editVol} from '../Redux/action';
import {Redirect} from 'react-router-dom';

const EditProfile = (props) => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
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
        if(name !== "") {
            formData.append('name', name);
        } else if (age !== "") {
            formData.append('age', age);
        } else if (email !== "") {
            formData.append('email', email);
        } else if (secondPassword !== "") {
            formData.append('password', secondPassword);
        } else if (profileImage !== "") {
            formData.append('profile_image', profileImage);
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
        <div>
            {redirect ? <Redirect to="/volunteer" /> : null}
            <h1>Sign-Up Page</h1>
            <form id="edit" onSubmit={submitHandle}>
                <p><input type="text" name= "name" placeholder="Full Name" value={name} onChange={changeHandle} /></p>
                <p><input type="number" name= "age" placeholder="Age" value={age} onChange={changeHandle} /></p>
                <p><input type="email" name= "email" placeholder="Email" value={email} onChange={changeHandle} /></p>
                <p><input type="password" name= "password2" placeholder="Type in a new password" value={secondPassword} onChange={changeHandle} /></p>
                <p><input type="file" name= "image" onChange={changeHandle} /></p>
                <p><h4>Please enter current Password to confirm changes</h4></p>
                <p><input type="password" name= "password1" placeholder="Enter Current Password Here" value={password} onChange={changeHandle} /></p>
                <p><button type="submit">Submit</button></p>
            </form>
        </div>
    )
}

// const msp = state => {
//     return { 
//         volunteers: state.volunteers,
//         user: state.user 
//     }
// }

// const mdp = dispatch => {
//     return { 
//         submitHandle:(formData, id) => dispatch(editVol(formData, id))
//     }
// }

export default connect(null, null)(EditProfile);