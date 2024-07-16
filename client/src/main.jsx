import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Routing.jsx'
import { FlightProvider } from './Context/FlightContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FlightProvider>
      <Routing />
    </FlightProvider>
  </BrowserRouter>
)
