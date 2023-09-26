import React, { useContext, useState , createContext } from "react";

export type AuthUser = {
    name : string ,
    email : string 
}

type UserContextProviderProps = {
    children : React.ReactNode 
}

type UserContextType = {
    user : AuthUser | null
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null >>
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({children} : UserContextProviderProps) => {
    const [user , setUser] = useState<AuthUser | null >( null)
    return(
        <div>
            <UserContext.Provider value= {{user , setUser}}>
                {children}
            </UserContext.Provider>
        </div>

    )

}