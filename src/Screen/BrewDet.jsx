import {useState, useEffect} from 'react';
import { deleteBrewery, getBrewery } from '../Services/breweries.js';
import { Link, useParams, useNavigate } from "react-router-dom";


export default function BrewDet() {

    const [brewery, setBrewery]=useState({});

    let {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=> {
        fetchBrewery();
    },[]);

    async function fetchBrewery() {
        let oneBrewery =  await getBrewery(id);
        setBrewery(oneBrewery);
    }

    async function handleDelete() {
        await deleteBrewery(id);
        navigate("/breweries", {replace:true});
    }    

    return (
        <div>
            <h2>{brewery.name}</h2>
            <p>{brewery.brewery_type}</p>
            <p>{brewery.street}</p>
            <p>{brewery.city}</p>
            <p>{brewery.state}</p>
            <div>
            <Link to={`/breweries/${brewery._id}/edit`}>
                <button>Edit Brewery</button>
            </Link>
            <button onClick={handleDelete}>Delete the Brewery</button>
            </div>
        </div>  
    );
}