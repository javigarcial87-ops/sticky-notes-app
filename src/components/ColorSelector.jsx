import {useContext} from "react"
import { ColorContext } from "../context/ColorContext"

export default function ColorSelector() {
    const {color, setColor} = useContext(ColorContext)

    return (
        <div>
            <label> Elige el color de la nota </label>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                    width: "40px",
                    height: "40px",
                    border: "none",
                    cursor: "pointer",
                    background: "none",
                    marginBottom: "10px"
        }}
            />


        </div>
    )
}