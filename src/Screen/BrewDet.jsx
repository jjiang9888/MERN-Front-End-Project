import {useState, useEffect} from 'react';
import { deleteBrewery, getBrewery } from '../Services/characters';
import {Link, useParams, useNavigate} from "react-router-dom";


export default function BrewDet() {

    const [brewery, setBrewery]=useState({});

    let {id} = useParams()
    let navigate = useNavigate();

    useEffect(( )=> {
        fetchBrewery();
    },[])

    async function fetchBrewery() {
        let oneBrewery =  await getBrewery(id);
        setBrewery(oneBrewery);
    }
    
    return (
        <div>
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.street}</p>
            <p>{brewery.city}</p>
            <p>{brewery.state}</p>
        </div>
    )
};