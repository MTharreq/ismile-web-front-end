import React,{useState} from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import AppBar from "../components/AppBar/AppBar";
import TP from "../components/Content/TP";
import TA from "../components/Content/TA";
import About from "../components/Content/About";
import Jurnal from "../components/Content/jurnal";

export default function App() {
    const [pageTitle, setPageTitle] = useState("");
    return (
        <BrowserRouter>
            <div className="flex flex-row">
                <Sidebar setPageTitle={setPageTitle}/>
                <div className="flex flex-col bg-[#F2F2F2] w-full font-bold p-8 gap-8">
                    <AppBar pageTitle={pageTitle}/>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/tugas-pendahuluan" element={<TP />} />
                        <Route path="/tugas-awal" element={<TA />} />
                        <Route path="/jurnal" element={<Jurnal />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
