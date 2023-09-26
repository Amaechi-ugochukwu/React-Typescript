
type GreetProps = {
    name : string ,
    messageCount? : number  , 
    isLoggedIn : boolean ,
}

export  default function Greet (props: GreetProps) {
    const { messageCount = 0 } = props
    return(
        <div> 
            {
               props.isLoggedIn ? (  <h2>welcome {props.name} you have {props.messageCount} unread messages</h2> )
               :(<h2>welcome guest</h2>)
            }
                   
        </div>
    )
}