import React from 'react'
import {Link} from 'react-router-dom';

export default function Brewery({brewery}) {
  return (
    <div>
        <Link to={`/breweries/${brewery._id}`}>
        <h2>{brewery.name}</h2>
        </Link>
    </div>
  )
}
