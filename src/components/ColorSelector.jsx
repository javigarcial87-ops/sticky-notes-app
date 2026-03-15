import {useContext} from "react"
import { ColorContext } from "../context/ColorContext"

export default function ColorSelector() {
    const {color, setColor} = useContext(ColorContext)

    return (
        <div>
            <label> Elige el color de tu nota </label>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />


        </div>
    )
}