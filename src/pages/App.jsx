import Sidebar from "../components/Sidebar/Sidebar"
import Container from "../components/Container/Container"

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />      
      <Container />
    </div>
  )
}

export default App