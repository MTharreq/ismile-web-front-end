/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import AppBar from "../AppBar/AppBar";
import About from "../Content/About";
import TP from "../Content/TP";
import TA from "../Content/TA";
import Jurnal from "../Content/Jurnal";
import ChangePassword from '../Content/ChangePassword';
import Profile from "../Content/Profile"

export default function Container({pageTitle, isSidebarOpen, setIsSidebarOpen}) {
  return (
    <div className={`flex flex-col bg-[#F2F2F2] h-screen font-bold gap-4 p-4  ${isSidebarOpen ? '':'sm:ml-64'}`}>
    {/* <div className="flex flex-col bg-[#F2F2F2] h-screen font-bold gap-4 p-4"> */}
      <AppBar pageTitle={pageTitle} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/tugas-pendahuluan" element={<TP />} />
          <Route path="/tugas-awal" element={<TA />} />
          <Route path="/jurnal" element={<Jurnal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-pass" element={<ChangePassword />} />
      </Routes>
    </div>
  )
}