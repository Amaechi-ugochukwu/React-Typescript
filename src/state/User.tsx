import React, {useState } from 'react'

type AuthUser = {
    name : string ,
    email : string , 
}

export default function User(){

    // const [user , setUser] = useState<AuthUser | null >(null)
    // const handleLogin = () => {
    //     setUser(
    //         {
    //             name : 'ugochukwu',
    //             email : 'amaechi100@gnail.com '
    //         }
    //     )
    // }
    // const handleLogout = () => {
    //     setUser(null)
    // }

    //using type assertion
    const [user , setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser(
            {
                name : 'ugochukwu',
                email : 'amaechi100@gnail.com '
            }
        )
    }
    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
                {/* <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <h3>user name is {user?.name}</h3>
            <h3>user email is {user?.email}</h3> */}

            {/* using type assertion */}
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>

            <h3>user name is {user.name}</h3>
            <h3>user email is {user.email}</h3>
        </div>
    )
}