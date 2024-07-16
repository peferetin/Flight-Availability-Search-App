import React from "react";
import { useFlightContext } from "../Context/FlightContext";



const SearchButton = () => {
    const { searchFlights } = useFlightContext();

    const handleSearch = () => {
        searchFlights();
        console.log('I have been clicked');
    };
    return (
        <button
            onClick={handleSearch}
            className="self-center mt-8 px-8 py-3 text-lg font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
        >
            Search Flights
        </button>
    );
}
export default SearchButton;


