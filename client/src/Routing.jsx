import { Routes, Route } from 'react-router-dom'
import FlightSearch from './components/FlightSearch.jsx'
import DateInput from './components/DateInput.jsx'
import FlightResults from './components/FlightsResults.jsx'
import FlightDetails from './components/FlightDetails.jsx'





const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<FlightSearch />} />
            <Route path="/date" element={<DateInput />} />
            <Route path='/results' element={<FlightResults />} />
            <Route path='/flight-details/:id' element={<FlightDetails />} />
        </Routes>
    )
}

export default Routing;