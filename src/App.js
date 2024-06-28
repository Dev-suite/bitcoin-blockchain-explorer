// src/App.js
import React from 'react';
import './App.css';
import BlockInfo from './BlockInfo';
import TransactionInfo from './TransactionInfo';
import AccountInfo from './AccountInfo';

function App() {
  return (
    <div className="App">
      <h1>Bitcoin Blockchain Explorer</h1>
      <BlockInfo />
      <TransactionInfo />
      <AccountInfo />
    </div>
  );
}

export default App;
