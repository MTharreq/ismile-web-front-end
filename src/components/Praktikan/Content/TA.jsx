import { useState } from 'react';

export default function TA() {
    const [isOpenClicked, setIsOpenClicked] = useState(false);
    const [selectedModule, setSelectedModule] = useState(null);

    const moduleTitle = {
        "MODUL 1": "Searching",
        "MODUL 2": "Knowledge Representation",
        "MODUL 3": "Fuzzyfikasi",
        "MODUL 4": "Defuzzyfikasi: Mamdani",
        "MODUL 5": "Defuzzyfikasi: Sugeno",
        "MODUL 6": "Algoritma Genetika",
    }

    const moduleStatus = {
        "MODUL 1": "Open",
        "MODUL 2": "Open",
        "MODUL 3": "Open",
        "MODUL 4": "Open",
        "MODUL 5": "Open",
        "MODUL 6": "Open",
    }

    const [lastUpdate,setLastUpdate] = useState({
        "MODUL 1": "Sat, 13 July 19:20",
        "MODUL 2": "Sat, 13 July 19:21",
        "MODUL 3": "Sat, 13 July 19:22",
        "MODUL 4": "Sat, 13 July 19:23",
        "MODUL 5": "Sat, 13 July 19:24",
        "MODUL 6": "Sat, 13 July 19:25",
    });

    const linkSoal = {
        "MODUL 1": "https://www.soalta1.com",
        "MODUL 2": "https://www.soalta2.com",
        "MODUL 3": "https://www.soalta3.com",
        "MODUL 4": "https://www.soalta4.com",
        "MODUL 5": "https://www.soalta5.com",
        "MODUL 6": "https://www.soalta6.com",
    }

    return (
    <div className="w-full h-full flex flex-col gap-4">
        {/* Module 1 */}
        <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
            <a className="flex flex-col w-fit">
            <h2 className={`text-base ${moduleStatus["MODUL 1"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 1 - {moduleTitle["MODUL 1"]}</h2>
            {moduleStatus["MODUL 1"] === "Closed" ? null : (
                <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 1"]}</p>
            )}
            </a>
            <div className="flex w-fit gap-4">
            {moduleStatus["MODUL 1"] === "Closed" ? (
                <div className={`text-sm font-bold flex items-center text-slate-800`}>
                Close
                <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                </div>
            ) : (
                <a
                className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 1"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                href={linkSoal["MODUL 1"]}
                >
                Open
                </a>
            )}
            </div>
        </div>

        {/* Module 2 */}
            <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
                <a className="flex flex-col w-fit">
                    <h2 className={`text-base ${moduleStatus["MODUL 2"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 2 - {moduleTitle["MODUL 2"]}</h2>
                    {moduleStatus["MODUL 2"] === "Closed" ? null : (
                        <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 2"]}</p>
                    )}
                </a>
                <div className="flex w-fit gap-4">
                    {moduleStatus["MODUL 2"] === "Closed" ? (
                        <div className={`text-sm font-bold flex items-center text-slate-800`}>
                            Close
                            <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                        </div>
                    ) : (
                        <a
                            className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 2"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                    href={linkSoal["MODUL 2"]}
                        >
                            Open
                        </a>
                    )}
                </div>
            </div>
    
    {/* Module 3 */}
            <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
                <a className="flex flex-col w-fit">
                    <h2 className={`text-base ${moduleStatus["MODUL 3"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 3 - {moduleTitle["MODUL 3"]}</h2>
                    {moduleStatus["MODUL 3"] === "Closed" ? null : (
                        <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 3"]}</p>
                    )}
                </a>
                <div className="flex w-fit gap-4">
                    {moduleStatus["MODUL 3"] === "Closed" ? (
                        <div className={`text-sm font-bold flex items-center text-slate-800`}>
                            Close
                            <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                        </div>
                    ) : (
                        <a
                            className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 3"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                            href={linkSoal["MODUL 3"]}
                        >
                            Open
                        </a>
                    )}
                </div>
            </div>

        {/* Module 4 */}
            <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
                <a className="flex flex-col w-fit">
                    <h2 className={`text-base ${moduleStatus["MODUL 4"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 4 - {moduleTitle["MODUL 4"]}</h2>
                    {moduleStatus["MODUL 4"] === "Closed" ? null : (
                        <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 4"]}</p>
                    )}
                </a>
                <div className="flex w-fit gap-4">
                    {moduleStatus["MODUL 4"] === "Closed" ? (
                        <div className={`text-sm font-bold flex items-center text-slate-800`}>
                            Close
                            <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                        </div>
                    ) : (
                        <a
                            className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 4"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                            href={linkSoal["MODUL 4"]}
                        >
                            Open
                        </a>
                    )}
                </div>
            </div>

        {/* Module 5 */}
            <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
                <a className="flex flex-col w-fit">
                    <h2 className={`text-base ${moduleStatus["MODUL 5"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 5 - {moduleTitle["MODUL 5"]}</h2>
                    {moduleStatus["MODUL 5"] === "Closed" ? null : (
                        <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 5"]}</p>
                    )}
                </a>
                <div className="flex w-fit gap-4">
                    {moduleStatus["MODUL 5"] === "Closed" ? (
                        <div className={`text-sm font-bold flex items-center text-slate-800`}>
                            Close
                            <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                        </div>
                    ) : (
                        <a
                            className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 5"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                            href={linkSoal["MODUL 5"]}
                        >
                            Open
                        </a>
                    )}
                </div>
            </div>

        {/* Module 6 */}
            <div className={"flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center"}>
                <a className="flex flex-col w-fit">
                    <h2 className={`text-base ${moduleStatus["MODUL 6"] === "Closed" ? 'text-slate-800' : ''}`}>MODUL 6 - {moduleTitle["MODUL 6"]}</h2>
                    {moduleStatus["MODUL 6"] === "Closed" ? null : (
                        <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdate["MODUL 6"]}</p>
                    )}
                </a>
                <div className="flex w-fit gap-4">
                    {moduleStatus["MODUL 6"] === "Closed" ? (
                        <div className={`text-sm font-bold flex items-center text-slate-800`}>
                            Close
                            <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                        </div>
                    ) : (
                        <a
                            className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${moduleStatus["MODUL 6"] ? 'bg-[#4DD7BE] text-white' : ''}`}
                            href={linkSoal["MODUL 6"]}
                        >
                            Open
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
