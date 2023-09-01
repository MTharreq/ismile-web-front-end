import React from "react";
import ModuleCard from './ModuleCard';

export default function Jurnal() {
    const moduleStatus = ({
        "MODUL 1": "Open",
        "MODUL 2": "Open",
        "MODUL 3": "Open",
        "MODUL 4": "Open",
        "MODUL 5": "Open",
        "MODUL 6": "Open",
    });

    const moduleLastUpdate =({
        "MODUL 1": "Sat, 13 July 19:32",
        "MODUL 2": "Sat, 13 July 19:33",
        "MODUL 3": "Sat, 13 July 19:34",
        "MODUL 4": "Sat, 13 July 19:35",
        "MODUL 5": "Sat, 13 July 19:36",
        "MODUL 6": "Sat, 13 July 19:37",
    })

    return (
        <div className="w-full h-full flex flex-col gap-4">
            <ModuleCard title="MODUL 1 - Searching" status={moduleStatus["MODUL 1"]} lastUpdated={moduleLastUpdate["MODUL 1"]}/>
            <ModuleCard title="MODUL 2 - Knowledge Representation" status={moduleStatus["MODUL 2"]} lastUpdated={moduleLastUpdate["MODUL 2"]}/>
            <ModuleCard title="MODUL 3 - Fuzzyfikasi" status={moduleStatus["MODUL 3"]} lastUpdated={moduleLastUpdate["MODUL 3"]}/>
            <ModuleCard title="MODUL 4 - Fuzzyfikasi: Mamdani" status={moduleStatus["MODUL 4"]} lastUpdated={moduleLastUpdate["MODUL 4"]}/>
            <ModuleCard title="MODUL 5 - Fuzzyfikasi: Sugeno" status={moduleStatus["MODUL 5"]} lastUpdated={moduleLastUpdate["MODUL 5"]}/>
            <ModuleCard title="MODUL 6 - Algoritma Genetika" status={moduleStatus["MODUL 6"]} lastUpdated={moduleLastUpdate["MODUL 6"]}/>
        </div>
    );
}