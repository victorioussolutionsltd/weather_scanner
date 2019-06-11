import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import WeatherInformation from './components/WeatherInformation'
import SimpleExpansionPanel from './components/SimpleExpansionPanel'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SimpleExpansionPanel></SimpleExpansionPanel>
      <WeatherInformation />
    </div>
  );
}

export default App;
