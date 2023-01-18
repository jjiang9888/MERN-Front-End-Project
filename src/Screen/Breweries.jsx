import React from 'react';
import { useEffect,useState } from 'react';
import {getBreweries} from "../Services/characters";

export default function Breweries() {
    const [breweries, setBreweries] = useState([])

    useEffect(() => {
        fetchBreweries()
    },[])

    async function fetchBreweries() {
        const allBreweries = await getBreweries();
        setBreweries(allBreweries);
    }

  return (
    <div>
        <h1>Breweries</h1>
    </div>
  )
};
