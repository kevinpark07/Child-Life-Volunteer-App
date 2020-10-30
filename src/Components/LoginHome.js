import React, { useState } from 'react';
import {Redirect } from 'react-router-dom';

const LoginHome = () => {

    const [volunteer, setVolunteer] = useState(false);
    const [admin, setAdmin] = useState(false);

    const clickHandle = event => {
        if (event.target.name === "volunteer") {
            setVolunteer(!volunteer);
        } else if (event.target.name === "admin") {
            setAdmin(!admin);
        }
    }

    return(
        <div>
            {volunteer ? <Redirect to={'/login/volunteer'} /> : null}
            {admin ? <Redirect to={'/login/admin'} /> : null}
            <button name="volunteer" onClick={clickHandle}>
                Volunteer
            </button>
            <button name="admin" onClick={clickHandle}>
                Administrator
            </button>
        </div>
    )
}

export default LoginHome;