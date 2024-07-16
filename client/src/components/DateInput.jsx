import React, { useState } from "react";
import { useFlightContext } from "../Context/FlightContext";


function DateInput() {

    const { departureDate, setDepartureDate } = useFlightContext();
    return (
        <div className="flex gap-0 self-center mt-28 rounded-xl">
            <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="flex-1 justify-center items-start py-4 pr-2 pl-4 text-base leading-6 rounded-xl bg-slate-200 text-slate-500"
            />
            <div className="flex flex-col justify-center items-start py-4 pr-4 rounded-none bg-slate-200">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73a4e3ddc289634ed49c4b4f74dd9cfeaeb06a10b69f6c1110315a97544c6ff5?apiKey=3f2049d439554684b0911a513d3cf4d4&"
                    className="w-6 aspect-square"
                    alt=""
                />
            </div>
        </div>
    );
}

export default DateInput;
