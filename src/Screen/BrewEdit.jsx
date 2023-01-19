import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBrewery, getBrewery } from '../Services/breweries.js';

export default function BrewEdit() {
    const [brewery, setBrewery] = useState();
    
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(()=> {
        fetchBrewery();
    },[]);
    
    async function fetchBrewery() {
        let oneBrewery =  await getBrewery(id);
        setBrewery(oneBrewery);
        };

    const handleSubmit = async(e) => {
        e.preventDefault()
        await updateBrewery(id, brewery);
        navigate(`/breweries/${brewery._id}`, {replace:true});
    };

    const handleChange = (e) => {
        const{value, name}= e.target;

        setBrewery((prev) => ({
            ...prev,
            [name]:value
        }))
    };
    
    return (
        <div>
            <h1>Edit Brewery Entry</h1>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    placeholder="Enter Brewery ID"
                    name="_id"
                    value={brewery._id}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Enter Brewery name"
                    name="name"
                    value={brewery.name}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Enter Brewery type"
                    name="brewery_type"
                    value={brewery.brewery_type}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Enter Brewery's street address"
                    name="street"
                    value={brewery.street}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Enter Brewery's city location."
                    name="city"
                    value={brewery.city}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    placeholder="Enter Brewery's state located in"
                    name="state"
                    value={brewery.state}
                    onChange={handleChange}
                />
                <button type="submit">Edit brewery info here.</button>
            </form>
        </div>
    )
};

