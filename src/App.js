

import { useState, useEffect } from 'react';

import './App.css';

import {Routes, Route} from "react-router-dom";


import Home from '../src/pages/Home';

import SearchApp from '../src/pages/SearchApp';

import Hotel from  '../src/pages/Hotel';

function App() {

    return(
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/search"  element={<SearchApp/>}/>
        <Route path="/hotel"  element={<Hotel/>}/>
      </Routes>
    )
  
}

export default App;
