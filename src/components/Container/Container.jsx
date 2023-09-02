/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import AppBar from "../AppBar/AppBar";
import About from "../Content/About";
import TP from "../Content/TP";
import TA from "../Content/TA";
import Jurnal from "../Content/Jurnal";


export default function Container({isSidebarOpen, setIsSidebarOpen}) {
  return (
    <div className={`flex flex-col bg-[#F2F2F2] h-screen font-bold gap-4 p-4  ${isSidebarOpen ? '':'sm:ml-64'}`}>
    {/* <div className="flex flex-col bg-[#F2F2F2] h-screen font-bold gap-4 p-4"> */}
      <AppBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tugas-pendahuluan" element={<TP />} />
          <Route path="/tugas-awal" element={<TA />} />
          <Route path="/jurnal" element={<Jurnal />} />
      </Routes>
    </div>
  )
}