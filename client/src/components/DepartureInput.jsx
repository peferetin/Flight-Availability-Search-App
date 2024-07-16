import React, { useState } from "react";
import { useFlightContext } from "../Context/FlightContext";

function DepartureInput({ label }) {
    const { origin, setOrigin } = useFlightContext()

    return (
        <div className="flex gap-0 self-center mt-28 rounded-xl">
            <input
                type="text"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder={label}
                className="flex-1 justify-center items-start py-4 pr-2 pl-4 text-base leading-6 rounded-xl bg-slate-200 text-slate-500"
            />

            <div className="flex flex-col justify-center items-start py-4 pr-4 rounded-none bg-slate-200">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/588948a6b115f7b7ac802a382ade4bca56b76ab2918b0d69e540ed731a01151e?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                    className="w-6 aspect-square"
                    alt=""
                />
            </div>
        </div>
    );
}

export default DepartureInput;