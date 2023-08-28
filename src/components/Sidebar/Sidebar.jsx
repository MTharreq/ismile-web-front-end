import React from "react"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="bg-white h-screen w-[300px]">
            <img className="w-1/2 bg-white ml-6 mt-6 mb-6" src="src\assets\logo\Horizontal.jpg" alt="i-Smile Logo" />

            {/* LIST-BUTTON */}
            <div className="flex flex-col gap-4 py-4">
                <Link to="/tugas-pendahuluan" className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-sm cursor-pointer">
                    <span className="material-symbols-rounded align-middle">library_books</span>
                    <span className="pl-2">Tugas Pendahuluan</span>
                </Link>
                <Link to="/tugas-awal" className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-sm cursor-pointer">
                    <span className="material-symbols-rounded align-middle">library_books</span>
                    <span className="pl-2">Tugas Awal</span>
                </Link>

                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-sm cursor-pointer">
                    <span className="material-symbols-rounded align-middle">laptop_chromebook</span>
                    <span className="pl-2">Jurnal</span>
                </div>
                
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-sm cursor-pointer">
                    <span className="material-symbols-rounded align-middle">slideshow</span>
                    <span className="pl-2">Modul Praktikum</span>
                </div>
                
                <div className="transition font-bold bg-white hover:bg-[#4DD7BE] hover:text-white hover:shadow-md mx-4 px-4 py-3 rounded-lg text-slate-800 text-sm cursor-pointer">
                    <span className="material-symbols-rounded align-middle">search</span>
                    <span className="pl-2">About i-Smile 8</span>
                </div>
            
            </div>
        </div>
    )
}


