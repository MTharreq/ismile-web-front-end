import React from "react"
import { Link } from 'react-router-dom'

export default function Sidebar({setPageTitle}) {
    const handleLinkClick = (title) => {
        setPageTitle(title);
    };
    return (
        <div className="bg-white h-screen w-[300px]">
            <img className="w-1/2 bg-white ml-6 mt-6 mb-6" src="src\assets\logo\Horizontal.jpg" alt="i-Smile Logo" />

            {/* LIST-BUTTON */}
            <div className="flex flex-col gap-4 py-4 ">
                <Link to="/tugas-pendahuluan" onClick={() => handleLinkClick("Tugas Pendahuluan")} className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">library_books</span>
                    Tugas Pendahuluan
                </Link>

                <Link to="/tugas-awal" onClick={() => handleLinkClick("Tugas Awal")} className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">library_books</span>
                    Tes Awal
                </Link>

                <Link to="/jurnal" onClick={() => handleLinkClick("Jurnal")} className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">laptop_chromebook</span>
                    Jurnal
                </Link>
                
                <a href="https://drive.google.com/file/d/1ZbEN7-_Bd2Zv0Slb-aHuOabnwMjCgZ2w/view?usp=drive_link"className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">slideshow</span>
                    Modul Praktikum
                </a>
                
                <Link to="/" onClick={() => handleLinkClick("About")} className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">search</span>
                    About i-Smile 8
                </Link>
            
            </div>
        </div>
    )
}


