
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

function FlightCard({ itineraries, price, id }) {
    const departure = itineraries[0].segments[0].departure;
    const arrival = itineraries[0].segments[0].arrival;
    const airline = itineraries[0].segments[0].carrierCode;
    const flightNumber = itineraries[0].segments[0].number;
    let Navigate = useNavigate();


    return (
        // <Link to={`/flight-details/${itineraries, price}`} >
        <a href={`/flight-details`} className="block w-full">

            <div className="flex flex-col justify-center items-center p-6 mt-4 w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                <div className="flex justify-between w-full items-center">
                    <div className="flex items-center">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6447350ff9ba16b8bd083974a94fde46db864ce26846e3f7bd608941786ecc35?apiKey=3f2049d439554684b0911a513d3cf4d4&" alt="Departure" className="w-6 h-6 mr-2" />
                        <div>
                            <div className="text-lg font-bold text-blue-800">{departure.iataCode}</div>
                            <div className="text-sm text-blue-600">{new Date(departure.at).toLocaleTimeString()}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="text-right">
                            <div className="text-lg font-bold text-blue-800">{arrival.iataCode}</div>
                            <div className="text-sm text-blue-600">{new Date(arrival.at).toLocaleTimeString()}</div>
                        </div>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dada292eb18de56160a5baad09c43f59acd42bceb5c7ff2a9c3d58d9018a25f?apiKey=3f2049d439554684b0911a513d3cf4d4&" alt="Arrival" className="w-6 h-6 ml-2" />
                    </div>
                </div>
                <div className="mt-2 text-sm text-blue-700">
                    {airline} {flightNumber}
                </div>
                <div className="mt-4 text-xl font-bold text-blue-900">
                    Price: {price.currency} {price.grandTotal}
                </div>
            </div>
        </a>
        // </Link>
    );
}

export default FlightCard;