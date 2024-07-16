import { useState, useEffect } from 'react';
import axios from 'axios';
import getAccessToken from './auth.jsx';
import styled from "styled-components";

const Home = () => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-'); // The format is already in "Year-Month-Day"
    }

    const searchFlights = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            setLoading(true);
            const token = await getAccessToken();
            const formattedDepartureDate = formatDate(departureDate); // Pass departureDate to formatDate
            console.log(token, formattedDepartureDate, destination);

            const response = await axios.get(
                'https://test.api.amadeus.com/v2/shopping/flight-offers',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    params: {
                        originLocationCode: origin,
                        destinationLocationCode: destination,
                        departureDate: formattedDepartureDate,
                        adults: 1,
                    },
                }
            );

            const filteredFlights = response.data.data.filter(flight => flight.itineraries[0].segments[0].departure.iataCode === origin && flight.itineraries[0].segments[0].arrival.iataCode === destination);
            setFlights(filteredFlights);
            console.log(filteredFlights);

        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Removed the call to searchFlights here to prevent automatic execution on component mount
    }, []);


    // <div style={{ backgroundColor: 'aqua' }}>
    //     <h1>Flight Search</h1>
    //     <form onSubmit={searchFlights}>
    //         <label>Origin:</label>
    //         <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
    //         <label>Destination:</label>
    //         <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
    //         <label>Departure Date:</label>
    //         <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />

    //         <button type="submit">Search</button>
    //     </form>
    //     <div>
    //         {loading && <p>Loading...</p>}
    //         {error && <p>Error: {error.message}</p>}
    //         {flights.map((flight) => (
    //             <div key={flight.id}>
    //                 <h2>{flight.price.total}</h2>
    //                 <p>{flight.itineraries[0].segments[0].departure.iataCode} - {flight.itineraries[0].segments[0].arrival.iataCode}</p>
    //             </div>
    //         ))}
    //     </div>
    // </div>






    // return (



    return (
        <h1>Hello world</h1>
    );

}


export default Home