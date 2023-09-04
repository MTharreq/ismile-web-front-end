import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Container from "../components/Container/Container";
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
            path="app/*"
            element={
                <Container
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
