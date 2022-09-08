import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Main } from './views/main';
import { PlanetView } from './views/planetView';
import { PeopleView } from './views/peopleView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Main/>}/>
        <Route path="/people/:id" element={<PeopleView/>}/>
        <Route path="/planets/:id" element={<PlanetView/>}/>
      </Routes>
    </div>
  );
}

export default App;
