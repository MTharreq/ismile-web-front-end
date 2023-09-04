import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ContainerPr from "../components/Praktikan/Container/Container";
import ContainerAs from "../components/Asisten/Container/Container";
import LandingPage from './LandingPage';
import Login from "./Login"
export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState("");

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route
            path="praktikan/*"
            element={
                <ContainerPr
                pageTitle={pageTitle}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setPageTitle={setPageTitle}
                />
            }
            />
            <Route
            path="asisten/*"
            element={
                <ContainerAs
                pageTitle={pageTitle}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                setPageTitle={setPageTitle}
                />
            }
            />
        </Routes>
        </BrowserRouter>
    );
}
