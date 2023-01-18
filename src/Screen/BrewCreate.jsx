import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { createBrewery } from '../Services/breweries.js';

export default function BrewCreate() {
    const [brewery, setBrewery] = useState({
        "_id": "",
        "name": "",
        "brewery_type": "",
        "street": "",
        "city": "",
        "state": ""   
    })

    let navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        await createBrewery(brewery)
        navigate(`/breweries/${brewery._id}`, {replace:true});
    }

    const handleChange = () => {

    }
    return (
        <div>
            <h1>Brewery Creation</h1>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Enter Brewery entry here.</button>
            </form>
        </div>
    )
};

