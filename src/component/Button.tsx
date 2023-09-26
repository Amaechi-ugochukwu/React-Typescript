import React from'react'

type ButtonProps = {
    handleclick : (event: React.MouseEvent<HTMLButtonElement>  , id : number) => void 
}


export default function Button(props : ButtonProps){
return(
    <div>
        <button onClick={(event) => props.handleclick(event , 1)}>  click </button>
    </div>
)
}