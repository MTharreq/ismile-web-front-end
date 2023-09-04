import React from "react";

function ModuleCard({ title, status, lastUpdated}) {
    const isOpen = status === 'Closed';

    return (
        <div className={`flex bg-white py-4 px-6 rounded-lg shadow-md justify-between items-center ${isOpen ? 'bg-[#4DD7BE] text-white' : 'bg-white text-slate-800'}`}>
            {/* Module content */}
            <a className="flex flex-col w-fit">
                <h2 className={`text-base ${isOpen ? 'text-slate-800' : ''}`}>{title}</h2>
                {isOpen ? null : (
                    <p className={`text-xs font-normal italic text-[#A3A7A8]`}>Last edited: {lastUpdated}</p>
                )}
            </a>
            {/* Open button */}
            <div className="flex w-fit gap-4">
                {isOpen ? (
                    <div className={`text-sm font-bold flex items-center text-slate-800`}>
                        Close
                        <span className={`material-symbols-rounded align-middle ml-2 text-slate-800`}>lock</span>
                    </div>
                ) : (
                    <a className={`text-sm flex justify-center m-auto py-3 px-5 rounded-lg shadow-md cursor-pointer ${isOpen ? 'bg-white text-slate-800' : 'bg-[#4DD7BE] text-white'}`}>
                        Open
                    </a>
                )}
            </div>
        </div>
    );
}

export default ModuleCard;

