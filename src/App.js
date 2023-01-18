import React from 'react';
import Home from './Screen/HomeScreen.jsx';
import Breweries from './Screen/Breweries.jsx';
import BrewCreate from './Screen/BrewCreate.jsx';
import BrewEdit from './Screen/BrewEdit.jsx';
import BrewDet from './Screen/BrewDet.jsx';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import './App.css';


function App() {
  return (
    <div className="BrewApp">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/breweries" element={<Breweries />}/>
        <Route path="/breweries/:id" element={<BrewDet />}/>
        <Route path="/add-brewery" element={<BrewCreate />}/>
        <Route path="/breweries/:id/edit" element={<BrewEdit />}/>
      </Routes>
</div>
  );
  }

export default App;
