import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorization from "./Authorization"
import { Events } from "./Events"

const App: React.FC = () => {

  const urlParams = new URLSearchParams(window.location.hash.substr(1));
  const accessToken: string | null = urlParams.get("access_token");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { accessToken ?  <Events accessToken={accessToken} /> : <Authorization /> }
      </header>
    </div>
  );
}

export default App;
