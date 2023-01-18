import React from 'react';
import Home from './Screen/HomeScreen';
import Breweries from './Screen/Breweries';
import BrewCreate from './Screen/BrewCreate';
import BrewEdit from './Screen/BrewEdit';
import BrewDet from './Screen/BrewDet';
import {Routes, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import './App.css';


function App() {
  return (
    <div className="BrewApp">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Breweries" element={<Breweries />}/>
        <Route path="/Breweries/:BrewId" element={<BrewDet/>}/>
        <Route path="/add-brewery" element={<BrewCreate/>}/>
        <Route path="/Breweries/:id/edit" element={<BrewEdit/>}/>
      </Routes>
</div>
  );
  }

export default App;
