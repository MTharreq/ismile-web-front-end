// import Sidebar from '../components/Sidebar/Sidebar'
// import Container from '../components/Container/Container'

function App() {
  return (
    <>
      <div>
        <div className="flex flex-row">
          {/* SIDEBAR */}
          <div className="bg-white h-screen basis-1/6">
            <img className="w-1/2 bg-white ml-6 mt-6 mb-6" src="src\assets\logo\Horizontal.jpg" alt="i-Smile Logo" />
            
            {/* LIST-BUTTON */}
            <div className="flex flex-col gap-4 py-4">
              <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-md cursor-pointer">
                <span className="material-symbols-rounded align-middle">library_books</span>
                <span className="pl-2">Tugas Pendahuluan</span>
              </div>
              <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-md cursor-pointer">
              <span className="material-symbols-rounded align-middle">library_books</span>
                <span className="pl-2">Tes Awal</span>
              </div>
              <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-md cursor-pointer">
                <span className="material-symbols-rounded align-middle">laptop_chromebook</span>
                <span className="pl-2">Jurnal</span>
              </div>
              <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-md cursor-pointer">
              <span className="material-symbols-rounded align-middle">slideshow</span>
                <span className="pl-2">Modul Praktikum</span>
              </div>
              <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-md cursor-pointer">
                <span className="material-symbols-rounded align-middle">search</span>
                <span className="pl-2">About i-Smile 8</span>
              </div>
            </div>
          </div>
          
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
            <div className="w-full h-full flex flex-col gap-4">
              {/* MODUL 1 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 1 - Searching</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>

              {/* MODUL 2 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 2 - Knowledge Representation</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>

              {/* MODUL 3 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 3 - Fuzzyfikasi</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>

              {/* MODUL 4 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 4 - Fuzzyfikasi: Mamdani</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>

              {/* MODUL 5 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 5 - Fuzzyfikasi: Sugeno</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>

              {/* MODUL 6 */}
              <div className="flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center">
                <div className="flex flex-col w-fit">
                  <h2 className="text-xl">MODUL 6 - Algoritma Genetika</h2>
                  <p className="font-normal italic text-[#A3A7A8]">Last edited: Sat, 13 July 19:20</p>
                </div>
                <div className="flex w-fit gap-4">
                  <div className="font-bold rounded-lg text-slate-800 text-md flex self-center">
                    Closed
                    <span className="material-symbols-rounded align-middle ml-2">lock</span>
                  </div>
                  <div className="flex justify-center m-auto py-5 px-6 bg-[#4DD7BE] text-white rounded-lg shadow-md cursor-pointer">Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Sidebar /> */}
        {/* <Container /> */}
      </div>
    </>
  )
}

export default App