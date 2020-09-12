import React from 'react';
import './App.css';
import pokemons from './data';
import Pokemon from '../Pokemon/Pokemon';

class App extends React.Component {
  render() {  
    return (
      <div className="poke-container">{
        pokemons.map(pokemon => (
          <Pokemon item={pokemon} />
        ))}
      </div>
    );
  }
}

export default App;
