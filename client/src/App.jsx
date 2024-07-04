import axios from 'axios';
import getAccessToken from './auth.jsx';


const searchFlights = async (origin, destination, departureDate) => {
  const token = await getAccessToken();
  const response = await axios.get(
    'https://test.api.amadeus.com/v2/shopping/flight-offers',
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      params: {
        originLocationCode: origin,
        destinationLocationCode: destination,
        departureDate: departureDate,
        adults: 1,
      },
    }
  );
  return response.data;
};
export default searchFlights;