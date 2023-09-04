import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Container from "../components/Container/Container";
import LandingPage from './LandingPage';
import TP from '../components/Content/TP';
import TA from '../components/Content/TA';
import Jurnal from '../components/Content/Jurnal';

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    useEffect(() => {
        console.log('app component mounted');
        // ... other code
    }, []);

    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}/>
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
