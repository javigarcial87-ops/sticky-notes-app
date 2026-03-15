export default function Note({ note, deleteNote }) {
  return (
    <div
      style={{
        backgroundColor: note.color,
        padding: "10px",
        width: "150px",
        borderRadius: "5px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        textAlign: "center",
        fontFamily: "Helvetica",
        fontWeight: "bolder",
        margin: "10px auto"
      }}
    >
      <p>{note.text}</p>

      <button onClick={() => deleteNote(note.id)}>Eliminar</button>
    </div>
  )
}