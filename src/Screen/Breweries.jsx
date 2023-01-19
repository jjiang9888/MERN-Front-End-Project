import React from 'react';
import { useEffect,useState } from 'react';
import Brewery from "../Components/Brewery.jsx"
import {getBreweries} from "../Services/breweries.js";

export default function Breweries() {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        fetchBreweries();
    },[])

    async function fetchBreweries() {
        const allBreweries = await getBreweries();
        setBreweries(allBreweries);
    }

  return (
    <div className="Breweries-Page">
        <h1 className='Breweries-Title'>Locations</h1>
        {
         breweries.map((breweryData) => (
            <Brewery brewery={breweryData} key={breweryData._id} />
         ))   
        }
    </div>
  )
};
