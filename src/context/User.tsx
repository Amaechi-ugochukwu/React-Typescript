import { useContext } from "react"
import { UserContext} from "./UserContext"



export default function User(){
    const userContext = useContext(UserContext)

    const handleLogin = () => {
              userContext.setUser(
                {
                    name : 'ugochukwu ' ,
                    email : 'amaechi100@gmail.com'
                }
            )
    }
    const handleLogout = () => {
        
            userContext.setUser(null)
    }

    return(
        <div>
            <button onClick = { handleLogin }></button>
            <button onClick = { handleLogout }></button>
          <h4>user name is  {userContext.user?.name}</h4>
          <h4>user email is  {userContext.user?.email}</h4>
        </div>
    )
} 