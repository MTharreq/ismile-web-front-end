/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'

export default function Sidebar({setPageTitle, isSidebarOpen, setIsSidebarOpen, handleLinkSelect,selectedLink}) {
    const itemStyle = "flex items-center p-2 rounded-lg gap-3 px-3 py-4 w-full"
    const activeItemStyle = `${itemStyle} bg-[#4DD7BE] text-white`
    const inactiveItemStyle = `${itemStyle} bg-white text-gray-900 hover:bg-[#CAF3EB] hover:text-[#1CAB43]`
    const itemsStyle = ({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? `${activeItemStyle}` : `${inactiveItemStyle}`

    const handleLinkClick = (title,link) => {
        setPageTitle(title);
        handleLinkSelect(link);
    };
    

    return (
        <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}`} aria-label="Sidebar" >
            <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                
                {/* iSmile Logo */}
                <div className="flex justify-between items-center pl-2.5 mb-5">
                    <a href="#" >
                        <img
                        src="src\assets\logo\Horizontal.jpg"
                        className="h-12 mr-3 sm:h-12"
                        alt="iSmile Logo"
                        />
                    </a>
                    <button 
                        className='inline-flex h-12 items-center px-2 text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                        onClick={() => {setIsSidebarOpen(true)}}
                    >
                        <span className="material-symbols-rounded">close</span>
                    </button>
                </div>
                
                {/* SIDEBAR LIST */}
                <ul className="space-y-2 font-semibold text-gray-900">
                    <li>
                    <button onClick={() => handleLinkClick("Tugas Pendahuluan", 'tugas-pendahuluan')} className={itemsStyle({ isActive: selectedLink === 'tugas-pendahuluan' })}>
                            <span className="material-symbols-rounded">library_books</span>
                            <span>Tugas Pendahuluan</span>
                        </button>
                    </li>
                    <li>
                    <button
                        onClick={() => handleLinkClick("Tes Awal", 'tes-awal')}
                        className={itemsStyle({ isActive: selectedLink === 'tes-awal' })}
                    >
                        <span className="material-symbols-rounded">library_books</span>
                        <span>Tes Awal</span>
                    </button>
                    </li>
                    <li>
                    <button
                        onClick={() => handleLinkClick("Jurnal", 'jurnal')}
                        className={itemsStyle({ isActive: selectedLink === 'jurnal' })}
                    >
                        <span className="material-symbols-rounded">laptop_chromebook</span>
                        <span>Jurnal</span>
                    </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleLinkClick("Pilih Grup", 'pilih-grup')}
                            className={itemsStyle({ isActive: selectedLink === 'input-grup' })}
                        >
                            <span className="material-symbols-rounded">laptop_chromebook</span>
                            <span>Pilih Grup</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => handleLinkClick("Input Nilai", 'input-nilai')}
                            className={itemsStyle({ isActive: selectedLink === 'input-nilai' })}
                        >
                            <span className="material-symbols-rounded">laptop_chromebook</span>
                            <span>Input Nilai</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}