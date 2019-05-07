import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authorization } from "./Authorization"
import { Event } from "./Event"

const App: React.FC = () => {

  //const urlParams = new URLSearchParams(window.location.hash.substr(1));
  const accessToken: string | null = "de746c71717e568b17f4ea9f5f91e1f1";

  console.log(`window.location.search = ${window.location.search}`);
  console.log(`accessToken = ${accessToken}`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {accessToken?  <Event accessToken={accessToken} />: <Authorization />}
      </header>
    </div>
  );
}

export default App;