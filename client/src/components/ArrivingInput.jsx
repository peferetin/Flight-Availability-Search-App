
import React, { useState } from "react";
import { useFlightContext } from "../Context/FlightContext";

function ArrivingInput({ label }) {
    const { destination, setDestination } = useFlightContext()

    return (
        <div className="flex gap-0 self-center mt-28 rounded-xl">
            <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={label}
                className="flex-1 justify-center items-start py-4 pr-2 pl-4 text-base leading-6 rounded-xl bg-slate-200 text-slate-500"
            />

            <div className="flex flex-col justify-center items-start py-4 pr-4 rounded-none bg-slate-200">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dada292eb18de56160a5baad09c43f59acd42bceb5c7ff2a9c3d58d9018a25f?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                    className="w-6 aspect-square"
                    alt=""
                />
            </div>
        </div>
    );
}

export default ArrivingInput