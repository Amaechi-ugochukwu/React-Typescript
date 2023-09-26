

type  InputProps =  React.ComponentProps<'input'>



export default function CustomButton(props : InputProps){
    return(
        <div>
            <input {...props}/>
        </div>
    )
}