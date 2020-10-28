import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addClient } from '../actions';

class Cadastro extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      idade: '',
      email: '',
    };
  }
  render() {
    const { data: { userLogin } } = this.props;

    if (!userLogin) {
      return(<p>Login não efetuado</p>);
    }

    return(
      <div>Cadastro de Clientes <br/>
        <label>Nome</label>
        <input
          name="nome"
          type="text"
          placeholder="Digite seu Nome"
          onChange={event => this.setState({ nome: event.target.value })}
        />
        <label>Idade</label>
        <input
          name="idade"
          type="number"
          placeholder="Digite sua idade"
          onChange={event => this.setState({ idade: event.target.value })}
        />
        <label>e-mail</label>
        <input
          name="email"
          type="text"
          placeholder="Digite seu email"
          onChange={event => this.setState({ email: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state)}>Cadastrar</button>
        <br/>
        <Link to={'/clientes/'}>Voltar</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.cadastroReducer
});

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addClient(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);