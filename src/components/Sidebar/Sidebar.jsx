import React from "react"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="bg-white h-screen w-[300px]">
            <img className="w-1/2 bg-white ml-6 mt-6 mb-6" src="src\assets\logo\Horizontal.jpg" alt="i-Smile Logo" />

            {/* LIST-BUTTON */}
            <div className="flex flex-col gap-4 py-4 ">
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">library_books</span>
                    Tugas Pendahuluan
                </div>
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">library_books</span>
                    Tes Awal
                </div>
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">laptop_chromebook</span>
                    Jurnal
                </div>
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">slideshow</span>
                    Modul Praktikum
                </div>
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 flex gap-2 text-sm items-center active:bg-[#4DD7BE] cursor-pointer">
                    <span className="material-symbols-rounded">search</span>
                    About i-Smile 8
                </div>
            
            </div>
        </div>
    )
}


