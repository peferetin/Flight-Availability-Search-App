import React, { useState } from "react";

function TripTypeSelector() {
    const [selectedType, setSelectedType] = useState("One-way");
    const tripTypes = ["Round-trip", "One-way", "Multi-city"];

    return (
        <nav className="flex gap-0 justify-between px-4 py-px text-sm font-bold leading-5 whitespace-nowrap border-b border-solid border-slate-300 text-slate-500">
            {tripTypes.map((type) => (
                <div
                    key={type}
                    className={`flex-1 justify-center px-5 pt-4 pb-3.5 border-gray-200 border-solid border-b-[3px] cursor-pointer ${type === selectedType ? "text-neutral-900" : ""
                        }`}
                    onClick={() => setSelectedType(type)}
                >
                    {type}
                </div>
            ))}
        </nav>
    );
}

export default TripTypeSelector;

// import React from 'react';

// function TripTypeSelector({ selectedType, onTypeChange }) {
//     const tripTypes = ['Round-trip', 'One-way', 'Multi-city'];

//     return (
//         <nav className="flex gap-0 justify-between px-4 py-px text-sm font-bold leading-5 whitespace-nowrap border-b border-solid border-slate-300 text-slate-500">
//             {tripTypes.map((type) => (
//                 <div
//                     key={type}
//                     className={`flex-1 justify-center px-5 pt-4 pb-3.5 border-gray-200 border-solid border-b-[3px] cursor-pointer ${type === selectedType ? 'text-neutral-900' : ''
//                         }`}
//                     onClick={() => onTypeChange(type)}
//                 >
//                     {type}
//                 </div>
//             ))}
//         </nav>
//     );
// }

// export default TripTypeSelector;