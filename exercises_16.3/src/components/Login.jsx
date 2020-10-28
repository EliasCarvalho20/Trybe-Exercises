import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAssignment } from '../actions/';


class Login extends Component {
  constructor() {
    super();

    this.state = {
      user: '',
      senha: '',
    }
  }

  render() {
    return (
      <div>
        <label>e-mail</label>
        <input
          name="login"
          type="text"
          placeholder="Digite seu email"
          onChange={event => this.setState({ user: event.target.value })}
        />
        <label>senha</label>
        <input
          name="senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={event => this.setState({ senha: event.target.value })}
        />
        <Link onClick={() => this.props.add(this.state)} to={'/clientes'}>Enviar</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))
});

export default connect(null, mapDispatchToProps)(Login);
