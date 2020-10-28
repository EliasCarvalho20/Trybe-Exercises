import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Login from './components/Login';
import Clientes from './components/Clientes';
import Cadastro from './components/Cadastro';
import store from './store/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/clientes" component={Clientes} />
              <Route path="/cadastro" component={Cadastro} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
