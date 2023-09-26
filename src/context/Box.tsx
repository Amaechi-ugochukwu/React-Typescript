import { useContext } from "react"
import {ThemeContext} from "./ThemeContext"

export default function Box(){
    const theme = useContext(ThemeContext)
    return(
        <div>
            <h4 style = {{backgroundColor : theme.primary.main , color : theme.secondary.text}}></h4>
        </div>
    )
} 