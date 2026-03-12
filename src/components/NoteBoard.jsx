import { useState, useContext } from "react";
import useNotes from "../hooks/useNotes";
import { ColorContext } from "../context/ColorContext";
import note from "./Note"

export default function NoteBoard() {
    const {notes, addNote, deleteNote} = useNotes()
    const {color} = useContext(ColorContext)

    const[text, setText] = useState("")

    const handleAdd = () => {
        if(!text.trim()) return

        addNote(text, color)
        setText("")
    }

    return(
        <div>
            <h2>Notas</h2>

            <input
                type="text"
                placeholder="Escribe la nota..."
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />

            <button>Añadir</button>
        </div>
    )
}