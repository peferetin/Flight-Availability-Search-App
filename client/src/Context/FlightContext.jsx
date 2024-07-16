
import { createContext, useState, useContext } from 'react';
import axios from 'axios';
import getAccessToken from '../auth';
import { useNavigate } from 'react-router-dom';

const FlightContext = createContext();



export const FlightProvider = ({ children }) => {
    let navigate = useNavigate();
    const [flights, setFlights] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState('');
    const [airline, setAirline] = useState('');
    const [imageSrc, setImageSrc] = useState('https://cdn.builder.io/api/v1/image/assets/TEMP/3b8370eb2b888745cef5395af732844112b62d97b9d3397ad1104b9f71a62fba?apiKey=3f2049d439554684b0911a513d3cf4d4&');

    const formatDate = (date) => {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    };

    const searchFlights = async () => {
        const token = await getAccessToken();
        const formattedDepartureDate = formatDate(departureDate);
        try {
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
            ).then((res) => {
                setFlights(res.data.data);
            });
        } catch (err) {
            setError(err);
        } finally {
            navigate('/results');
        }
    };
    return (
        <FlightContext.Provider value={{
            searchFlights,
            flights, setFlights,
            origin, setOrigin,
            destination, setDestination,
            departureDate, setDepartureDate,
            loading, setLoading,
            error, setError,
            search, setSearch,
            results, setResults,
            imageSrc, setImageSrc,
            airline, setAirline,
            // fetchFlightDetails
            // getFlightDetails // Make sure to include this in the context value
        }}>
            {children}
        </FlightContext.Provider>
    );
};

export const useFlightContext = () => useContext(FlightContext);
