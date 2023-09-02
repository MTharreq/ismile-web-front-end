import { BrowserRouter } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Container from "../components/Container/Container";
import { useEffect, useRef, useState } from 'react';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    let menuRef = useRef()

    useEffect(() => {
        let handler = (e) => {
            if(!menuRef.current.contains(e.target)){
                setIsSidebarOpen(false)
                console.log(isSidebarOpen)
            }
        }

        document.addEventListener('mousedown', handler)

        return() => {
            document.removeEventListener('mousedown', handler)
        }

    })

    return (
        <BrowserRouter>
        <div ref={menuRef}>
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <Container isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        </BrowserRouter>
    )
}

export default App;
