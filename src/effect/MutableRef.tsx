import { useRef ,useEffect , useState} from "react";
import { idText } from "typescript";


export default function MutableRef(){
    const [timer , setTimer] = useState(0)
    const interValRef = useRef<number | null >(null)

    const StopTimer = () => {
       if(interValRef.current) window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1 )
            
        } , 1000)

        return () => {
        StopTimer()
        }

    }, [])
  
    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => StopTimer()}> Stop Timer</button>
        </div> 
    )
}
