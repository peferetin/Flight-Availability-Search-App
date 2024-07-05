import { useState, useEffect } from 'react';
import axios from 'axios';
import getAccessToken from './auth.jsx';

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
            console.log(response.data.data);
            // setFlights(response.data.data);
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

    return (
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


        <div class="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style='font-family: "Plus Jakarta Sans", "Noto Sans", sans-serif;'>
            <div class="flex items-center bg-slate-50 p-4 pb-2 justify-between">
                <h2 class="text-[#0d141c] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">Flights</h2>
                <div class="flex w-12 items-center justify-end">
                    <button
                        class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#0d141c] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
                    >
                        <div class="text-[#0d141c]" data-icon="Bell" data-size="24px" data-weight="regular">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path
                                    d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div class="pb-3">
                <div class="flex border-b border-[#cedbe8] px-4 gap-8">
                    <a class="flex flex-col items-center justify-center border-b-[3px] border-b-[#0d80f2] text-[#0d141c] pb-[13px] pt-4" href="#">
                        <p class="text-[#0d141c] text-sm font-bold leading-normal tracking-[0.015em]">One way</p>
                    </a>
                    <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" href="#">
                        <p class="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Round trip</p>
                    </a>
                    <a class="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#49739c] pb-[13px] pt-4" href="#">
                        <p class="text-[#49739c] text-sm font-bold leading-normal tracking-[0.015em]">Multi-city</p>
                    </a>
                </div>
            </div>
            <div class="h-5 bg-slate-50"></div>
        </div>



    );

};

export default Home;