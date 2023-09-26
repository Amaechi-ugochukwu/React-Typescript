import Private from "./Private"
import Profile from "./profile"



export default function Login(){
    return(
        <div>
           <Private  isLoggedIn ={false} component ={Profile} />
        </div>
    )
}