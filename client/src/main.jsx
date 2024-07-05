import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import FlightSearch from './components/FlightSearch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FlightSearch /> */}
    <Home />
  </React.StrictMode>,
)
