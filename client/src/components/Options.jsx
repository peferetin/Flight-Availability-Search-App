

import React, { useState } from "react";

function Options() {
    const optionGroups = {
        travelers: ["1 Traveler", "2 Travelers", "3 Travelers", "4 Travelers"],
        stops: ["Any stops", "Non-stop", "Up to 1 stop", "Up to 2 stops"],
        class: ["Economy", "Premium Economy", "Business", "First Class"],
        carryOns: ["0 carry-ons", "1 carry-on", "2 carry-ons"]
    };

    const [selectedOptions, setSelectedOptions] = useState({
        travelers: "1 Traveler",
        stops: "Any stops",
        class: "Economy",
        carryOns: "0 carry-ons"
    });

    const handleSelectionChange = (category, value) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [category]: value
        }));
    };

    return (
        <section className="flex flex-col items-center">
            <h2 className="self-center mt-7 text-lg font-bold leading-6 text-neutral-900">
                Options
            </h2>
            <div className="flex flex-wrap gap-3 content-start p-4 mt-2 text-sm font-medium leading-5 text-neutral-900">
                {Object.entries(optionGroups).map(([category, options]) => (
                    <div key={category} className="flex flex-col">
                        <label className="font-bold">{category}</label>
                        <select
                            className="justify-center px-4 py-3 rounded-xl border border-solid border-slate-300"
                            value={selectedOptions[category]}
                            onChange={(e) => handleSelectionChange(category, e.target.value)}
                        >
                            {options.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Options;