import { BrowserRouter } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Container from "../components/Container/Container";
import { useEffect, useRef, useState } from 'react';

export default function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    // DOESNT WORK
    // let menuRef = useRef()
    // useEffect(() => {
    //     let handler = (e) => {
    //         if(!menuRef.current.contains(e.target)){
    //             setIsSidebarOpen(false)
    //             console.log(isSidebarOpen)
    //         }
    //     }
    //     document.addEventListener('mousedown', handler)
    //     return() => {
    //         document.removeEventListener('mousedown', handler)
    //     }
    // })

    const [pageTitle, setPageTitle] = useState("");

    return (
        <BrowserRouter>
        {/* <div ref={menuRef}> */}
            <Sidebar setPageTitle={setPageTitle} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <Container pageTitle={pageTitle} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        {/* </div> */}
        </BrowserRouter>
    )
}
