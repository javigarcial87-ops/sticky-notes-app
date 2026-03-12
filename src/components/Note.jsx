export default function Note({ note, deleteNote }) {
  return (
    <div
      style={{
        backgroundColor: note.color,
        padding: "10px",
        width: "150px",
        borderRadius: "5px",
      }}
    >
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>Eliminar</button>
    </div>
  )
}