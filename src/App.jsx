import { ColorProvider } from "./context/ColorContext"
import NoteBoard from "./components/NoteBoard"
import ColorSelector from "./components/ColorSelector"

function App() {
  return (
    <ColorProvider>
      <h1>Sticky Notes</h1>
      <ColorSelector />
      <NoteBoard />
    </ColorProvider>
  )
}

export default App