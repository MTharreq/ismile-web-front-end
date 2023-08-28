import TP from "../components/Content/TP"
import Sidebar from "../components/Sidebar/Sidebar"

function App() {
  return (
    <div>
      <div className="flex flex-row">
        {/* SIDEBAR */}
        <Sidebar />
        
        {/* CONTENT */}
        <div className="flex flex-col bg-[#F2F2F2] w-full font-bold p-8 gap-8">
          {/* APPBAR */}
          <div className="bg-white w-full shadow-md rounded-lg flex justify-between p-4">
            <div className="w-fit self-center text-3xl">☀️</div>
            <div className="flex gap-4 basis-full justify-end items-center">
              <div className="flex flex-col items-end">
                <p className="text-[#6E6B7B] font-bold">Alifia Mutia</p>
                <p className="text-[#6E6B7B] font-normal">Selasa, Shift 2 | Kelompok 36</p>
              </div>
              <img src="src\assets\3d_avatar_20.png" alt="picture-profile" />
            </div>
          </div>
          {/* LIST-CONTENT */}
          <TP />
        </div>
      </div>
    </div>
  )
}

export default App