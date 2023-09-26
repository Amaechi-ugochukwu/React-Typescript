type StatusProps = {
    status : 'loading' | 'success' | 'error'
}

export default function Status(props:StatusProps) {
    let message

    if (props.status === 'loading'){
        message ='loading'
    }
    else if (props.status === 'success'){
        message = 'data fetched successfully'
    }
    else if (props.status === 'error'){
        message = 'error fetching data'
    }
    return (
        <div>

        </div>
    )
}