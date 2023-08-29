// import React from 'react';
import ModuleCard from './ModuleCard';

export default function TP() {
    return (
    <div className="w-full h-full flex flex-col gap-4">
        <ModuleCard title="MODUL 1 - Searching" status="Open" />
        <ModuleCard title="MODUL 2 - Knowledge Representation" status="Open" />
        <ModuleCard title="MODUL 3 - Fuzzyfikasi" status="Open" />
        <ModuleCard title="MODUL 4 - Fuzzyfikasi: Mamdani" status="Open" />
        <ModuleCard title="MODUL 5 - Fuzzyfikasi: Sugeno" status="Open" />
        <ModuleCard title="MODUL 6 - Algoritma Genetika" status="Open" />
    </div>
    );
}