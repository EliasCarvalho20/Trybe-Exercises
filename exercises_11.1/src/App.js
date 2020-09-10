import React from 'react';
import './App.css';

function App() {
  const TASKS = ['Hello Word', 'Hello Friend', 'Hello Old Friend', 'Hello Darkness'];
  return (
    TASKS.map(item => <li>{item}</li>)
  );
}

export default App;
