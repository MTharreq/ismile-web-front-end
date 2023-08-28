// import Sidebar from '../components/Sidebar/Sidebar'
// import Container from '../components/Container/Container'

function App() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <div className="bg-slate-400 w-20 h-screen basis-1/6">
            Sidebar
          </div>
          
          {/* CONTENT */}
          <div className="flex flex-col bg-green-200 basis-full">
            <div className="bg-pink-400 w-full h-20">Appbar</div>
            <div className="bg-slate-400 w-full h-20">Content</div>
          </div>
        </div>

        {/* <Sidebar /> */}
        {/* <Container /> */}
      </div>
    </>
  )
}

export default App