
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useFlightContext } from "../Context/FlightContext"
import getAccessToken from '../auth';

function FlightDetails() {

    const { id } = useParams();
    const [error, setError] = useState('');
    const [flightDetails, setFlightDetails] = useState(null);

    const fetchFlightDetails = async () => {

        try {
            const token = await getAccessToken(); // Ensure token is retrieved before making the request

            const response = await axios.get(`https://test.api.amadeus.com/v2/shopping/flight-offers/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Use the token in the Authorization header
                }
            });
            setFlightDetails(response.data); // Save the response data to state
            console.log(response.data);
        } catch (error) {
            console.error("Failed to load flight details:", error);
            setError(error.message);
        }
    };

    fetchFlightDetails();

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div>

            <h2>My Flight Details</h2>
            <div>
                <div>
                    <h2>Price</h2>
                    <p>{flightDetails.price.currency} {flightDetails.price.grandTotal}</p>
                </div>
            </div>
        </div>

    );
}

export default FlightDetails;