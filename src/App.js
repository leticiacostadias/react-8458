import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './Cabecalho';

function App() {
  return (
    <Fragment>
      <Cabecalho />
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bem vindos ao curso de React!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
