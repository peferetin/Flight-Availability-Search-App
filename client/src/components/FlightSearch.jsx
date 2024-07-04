import { useState, useEffect } from 'react';
import axios from 'axios';
import getAccessToken from '../auth.jsx';



const FlightSearch = () => {
    const [flights, setFlights] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchFlights = async (e, origin, destination, departureDate,) => {
        e.preventDefault();
        const token = await getAccessToken();
        console.log(token);

        const response = await axios.get(
            'https://test.api.amadeus.com/v2/shopping/flight-offers',
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                params: {
                    originLocationCode: origin,
                    destinationLocationCode: destination,
                    departureDate: '2024-07-14',
                    adults: 1,
                },
            }

        );
        console.log(response.data.data);
        setFlights(response.data.data);
    }

    // useEffect(() => {
    //     searchFlights()
    // }, [])

    return (
        <div>
            <h1>Flight Search</h1>
            <form onSubmit={(e) => searchFlights(e)}>
                <label>Origin:</label>
                <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
                <label>Destination:</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
                <label>Departure Date:</label>
                <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} />
                <label> Departure Time</label>
                <input type="time" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />

                <button type="submit">Search</button>
            </form>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {flights.map((flight) => (
                    <div key={flight.id}>
                        <h2>{flight.price.total}</h2>
                        <p>{flight.itineraries[0].segments[0].departure.iataCode} - {flight.itineraries[0].segments[0].arrival.iataCode}</p>
                    </div>
                ))}
            </div>
        </div>

    );
}


export default FlightSearch;