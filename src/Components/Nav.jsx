import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Breweries">Breweries</NavLink>
        <NavLink to="/add-brewery">Add a brewery.</NavLink>
    </nav>
  )
}   
