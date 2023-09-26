import React from 'react'

type FormProps = {
    value : string ,
    handleChange : (event :  React.ChangeEvent<HTMLInputElement> ) => void
}

export default function Form( {value , handleChange}: FormProps){
    const handlechange = (event :  React.ChangeEvent<HTMLInputElement> ) =>{
        console.log(event)
    }
    return(
        <div>
            <input type = 'text' value={value} onChange = {handleChange} />
        </div>
    )
}