import React,{useState} from "react";
import AppBar from "../AppBar/AppBar";
import TP from "../Content/TP";
import TA from "../Content/TA";
import Jurnal from "../Content/Jurnal";
import Profile from "../Content/Profile";
import Sidebar from "../Sidebar/Sidebar"

export default function Container({ pageTitle, isSidebarOpen, setIsSidebarOpen, setPageTitle }) {
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkSelect = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className={`flex flex-col bg-[#F2F2F2] h-screen font-bold gap-4 p-4 ${isSidebarOpen ? '':'sm:ml-64'}`}>
      <Sidebar setPageTitle={setPageTitle} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} handleLinkSelect={handleLinkSelect} selectedLink={selectedLink} />
      <AppBar pageTitle={pageTitle} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <div className="mt-16 sm:mt-0">
        {selectedLink === 'tugas-pendahuluan' && <TP />}
        {selectedLink === 'tes-awal' && <TA />}
        {selectedLink === 'jurnal' && <Jurnal />}
      </div>
    </div>
  );
}
