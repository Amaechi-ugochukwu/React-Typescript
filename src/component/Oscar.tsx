type OscarProps = {
    children : React.ReactNode
}

export default function Oscar(props : OscarProps){
    return(
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}