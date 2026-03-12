import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function useNotes() {
    const [notes, setNotes] =useState([])

    const addNote =(text, color) => {
        const newNote = {
            id: uuidv4(),
            text,
            color,
        }
        setNotes((prev)=>[...prev, newNote])
    }

    const deleteNote = (id) => {
        setNotes((prev)=> prev.filter((note)=> note.id !== id))
    }

    return {notes, addnote, deleteNote}
}