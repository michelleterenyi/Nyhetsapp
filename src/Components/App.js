import React from 'react';
import './App.css';
import News from './News/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="App-title">Nyheter</h1>
        </a>
      </header>
      <News />
    </div>
  );
}

export default App;
