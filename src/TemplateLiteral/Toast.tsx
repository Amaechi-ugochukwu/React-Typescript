import { type } from "@testing-library/user-event/dist/type"

type HorizontalPosition =  'left' | 'center' | 'right'

type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position : Exclude<`${HorizontalPosition} = ${VerticalPosition}` , 'center-center' > | 'center'
}

export default function Toast({position} : ToastProps){
    return(
        <div>
            <h2>Toast Notification - ${position}</h2>
        </div>
    )
}