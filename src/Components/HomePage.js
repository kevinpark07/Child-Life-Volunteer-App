import React from 'react';
import {NavLink} from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <NavLink to={'/login'}>
                <p>Log-In</p>
            </NavLink>
            <NavLink to={'/signup'}>
                <p>Sign-Up</p>
            </NavLink>
        </div>
    )
}

export default HomePage;