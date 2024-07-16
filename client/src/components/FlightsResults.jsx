import axios from "axios"
import { useState, useEffect } from "react"
import FlightCard from './FlightCard';
import { Link } from 'react-router-dom';
import { useFlightContext } from "../Context/FlightContext";


const FlightResults = () => {
    const { flights, origin, destination, } = useFlightContext()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)




    const filteredFlights = flights.filter(flight => destination === flight.itineraries[0].segments[0].arrival.iataCode)
    console.log(filteredFlights);
    console.log(flights);
    { loading && <p>Loading...</p> }
    { error && <p>{error}</p> }
    return (

        <main className="flex flex-col justify-between items-center self-stretch mx-auto w-full text-sm bg-slate-50 max-w-[480px] text-neutral-900">
            <header className="flex gap-5 justify-between self-stretch px-4 pt-4 pb-2 text-lg font-bold leading-6 text-center whitespace-nowrap bg-slate-50">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8370eb2b888745cef5395af732844112b62d97b9d3397ad1104b9f71a62fba?apiKey=3f2049d439554684b0911a513d3cf4d4&" className="shrink-0 self-start w-6 aspect-square" alt="" />
                <h1>Flights</h1>
            </header>
            <section className="justify-center self-stretch p-4 text-base leading-6 bg-slate-50 text-ellipsis">
                {origin} to {destination}
            </section>
            <h2 className="mt-5 text-2xl font-bold leading-7">
                Select your flight
            </h2>

            {filteredFlights && filteredFlights.map((flight, index) => (
                <FlightCard key={index} {...flight} />
            ))}

            {/* <button className="justify-center items-center px-5 py-3 mt-56 w-full text-base font-bold leading-6 text-center whitespace-nowrap bg-blue-500 rounded-xl max-w-[358px] text-ellipsis text-slate-50">
                Continue
            </button> */}
            <footer className="self-stretch mt-3 w-full bg-slate-50 min-h-[20px]" />
        </main>

    )
}



export default FlightResults