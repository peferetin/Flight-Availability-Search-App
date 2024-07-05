import { Routes, Route } from 'react-router-dom'
import FlightSearch from './components/FlightSearch.jsx'

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<FlightSearch />} />
        </Routes>
    )
}

export default Routing;