import React from 'react';
import logo from './media/App_logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <button className='header_buttons'>Play</button>
        <img src={logo} className="logo" alt="logo" />
        <button className='header_buttons'>Scoreboard</button>
      </header>
      <body className='body'>
        <p>Yoooooo.</p> 
      </body>
    </div>
  );
}

export default App;
