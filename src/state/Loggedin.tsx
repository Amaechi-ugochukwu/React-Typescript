import React, {useState } from 'react'

export default function Loggedin(){
    const [isLoggedIn , setIsLoggedIn] = useState(false)


    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <div> user is { isLoggedIn ? 'loggedin' : 'loggedout' } </div>
        </div>
    )
}