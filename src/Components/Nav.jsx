import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="navBar">
        <NavLink className="navLinks" to="/">Home</NavLink>
        <NavLink className="navLinks" to="/Breweries">Breweries</NavLink>
        <NavLink className="navLinks" to="/add-brewery">Add Brewery</NavLink>
    </nav>
  )
}   
