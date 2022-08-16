import React from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h2>Seja bem vindo ao site em React hospedado por IPFS</h2>
      </header>
    </div>
  );
}

export default App;
