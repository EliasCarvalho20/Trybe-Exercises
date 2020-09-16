import React, { Component } from 'react';
import './pokemon.css';

class Pokemon extends Component {
  render() {  
    const { name, type, image, averageWeight: { value, measurementUnit } } = this.props.item;

    return (<div className="poke-item">
      <div className="img-container">
        <img className="poke-img" src={image} />
      </div>
      
      <div className="item-container">
        <p className="poke-name">{`Name: ${name}`}</p>
        <p className="poke-type">{`Type: ${type}`}</p>
        <p className="poke-weight">{`Average Weight: ${value}${measurementUnit}`}</p></div>      
    </div>)
  }
}

export default Pokemon;
