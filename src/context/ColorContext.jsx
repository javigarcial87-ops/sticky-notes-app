import { createContext, useState } from "react";

export const ColorContext = createContext()

export const ColorProvider =({children})=>{
    const [color, setColor] = useState("#ffd966")

    return (
        <ColorContext.Provider value={{color,setColor}}>
        {children}
        </ColorContext.Provider>
    )
} 