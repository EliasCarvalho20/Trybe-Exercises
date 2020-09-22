import React, { Component } from 'react';
import './buttons.css';
import Pokemon from '../Pokemon/Pokemon';
import pokemons from '../App/data';


class Buttons extends Component {
  constructor() {
    super();
    this.changeElement = this.changeElement.bind(this);
    this.increasePosition = this.increasePosition.bind(this);

    this.state = {
      currentElement: 'All',
      currentPosition: [0]
    };
  }

  changeElement(pokeElement) {
    if (pokeElement === 'All') {
      this.setState({
        currentPosition: [0],
        currentElement: pokeElement
      });
    } else {
      const elementIndex = pokemons.reduce((acc, item, index) => {
        return item.type === pokeElement ? acc.concat(index) : acc;
      }, []);

      this.setState({
        currentPosition: elementIndex,
        currentElement: pokeElement
      });
    }
  }

  increasePosition() {
    if (this.state.currentElement === 'All') {
      let number = this.state.currentPosition;
      number[0] === pokemons.length - 1 ? number[0] = 0 : number[0] += 1;

      this.setState({ currentPosition: number });
    }
  }

  render() {
    let elementType = pokemons.reduce((acc, item) => {
      return acc.includes(item.type) ? acc : acc.concat(item.type);
    }, ["All"]);

    return (
      <div>
        <div className="button-container">
          <button className="poke-button button-next" type="button"
            onClick={this.increasePosition}>Next Pokemon</button>
        </div>

        <div className="poke-container">{
          this.state.currentPosition.map(index => <Pokemon key={index} item={pokemons[index]} />)
        }</div>

        <div className="element-container">{
          elementType.map((element) => (
            <button key={element} className="poke-button element-button" type="button"
              onClick={() => this.changeElement(element)}>{element}</button>
          ))
        }</div>
      </div>
    )
  }
}

export default Buttons;
