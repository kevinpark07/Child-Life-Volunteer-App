import React, { useState } from 'react';

const AdminLogin = () => {
    
    const [email, setEmail] = useState("")  

    const changeHandle = event => {
        setEmail(event.target.value)
    }
    
    return (
        <form>
            <input type="textfield" value={email} onChange={changeHandle} />
        </form>
    )
}

export default AdminLogin;