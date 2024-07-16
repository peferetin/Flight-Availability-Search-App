import { useState, useEffect } from 'react'
import getAccessToken from "../auth";
import axios from "axios";
import React from "react";
import Header from "./Header";
import TripTypeSelector from "./TripTypeSelector";
import DepartureInput from "./DepartureInput";
import DateInput from "./DateInput";
import Options from "./Options";
import SearchButton from "./SearchButton";
import ArrivingInput from './ArrivingInput';
// import { useNavigate } from 'react-router-dom';
// import { FlightProvider } from '../Context/FlightContext'

function FlightSearch() {


    return (

        <main className="flex flex-col px-5 w-full bg-slate-50">
            <Header />
            <TripTypeSelector />
            <DepartureInput label="Departure city" />
            <ArrivingInput label="Arrival city" />
            <DateInput />
            <SearchButton />
            <Options />
            <div className="w-full bg-slate-50 min-h-[20px]" />
        </main>
    );
}
export default FlightSearch;
