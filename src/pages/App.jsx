import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Container from "../components/Container/Container";
import AppBar from "../components/AppBar/AppBar";
import TP from "../components/Content/TP";
import TA from "../components/Content/TA";
import About from "../components/Content/About";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-row">
                <Sidebar />
                <div className="flex flex-col bg-[#F2F2F2] w-full font-bold p-8 gap-8">
                    <AppBar />
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/tugas-pendahuluan" element={<TP />} />
                        <Route path="/tugas-awal" element={<TA />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
