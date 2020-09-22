import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.renderDogImg = this.renderDogImg.bind(this);
    this.saveImg = this.saveImg.bind(this);

    this.state = {
      dogImg: undefined,
      loading: true,
      storedImg: [],
      name: '',
    };
  }

  async fetchImg() {
    this.setState(
      { loading: true },
      async () => {
        const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
        const requestObj = await requestReturn.json();

        this.setState({
          dogImg: requestObj,
          loading: false,
        });
      });
  }

  componentDidMount() {
    if (localStorage.dogImage !== undefined) {
      const arrayImg = JSON.parse(localStorage.dogImage);
      const dog = arrayImg[arrayImg.length - 1];
      return this.setState({
        dogImg: { message: dog },
        loading: false,
      });
    }

    this.fetchImg();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.dogImg !== undefined) {
      if (nextState.dogImg.message.includes('terrier')) {
        return false;
      }
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.dogImg !== this.state.dogImg) {
      return console.log(this.state.dogImg.message.split('/')[4]);
    }

    localStorage.setItem('dogImage', JSON.stringify(this.state.storedImg));
  }

  saveImg() {
    if (this.state.dogImg !== '') {
      this.setState(({ storedImg, dogImg }) => ({
        storedImg: [...storedImg, dogImg.message]
      }));
    }

    this.fetchImg();
  }

  renderDogImg() {
    return (
      <div>
        <img className="dog-img" src={this.state.dogImg.message} />
        <br />
        <button onClick={this.saveImg}>Save Dog Image</button>
      </div>
    );
  }

  resetStorage() {
    localStorage.removeItem('dogImage');
  }

  render() {
    const { storedImg, loading, name } = this.state;
    const loadingElement = <span>Loading...</span>

    return (
      <div className="App">
        <span>{storedImg.map((item, index) => <img key={index} className="stored-img" src={item} />)}</span>
        <div>{loading ? loadingElement : this.renderDogImg()}</div>
        <input
          type="text"
          value={name}
          onChange={({ target }) => this.setState({ name: target.value })}
        />
        <br />
        <button onClick={this.resetStorage}>Reset Storage</button>
      </div>
    );
  }
}

export default App;
