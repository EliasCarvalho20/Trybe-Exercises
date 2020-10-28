import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clientes extends Component {
  render() {
    const { data: { userLogin, userClient } } = this.props;
    if (!userLogin) {
      return (<p>Login não efetuado</p>);
    }

    if (!userClient) {
      return (
        <div>
          <p>Nenhum cliente cadastrado</p>
          <Link to={'/cadastro'}>Cadastrar</Link>
        </div>
      );
    }

    return (
      <div>
        <div>
          {userClient.map((item) => (
            <div>
              <p>Nome: {item.nome} | Idade: {item.idade} | Email: {item.email}</p>
            </div>
          ))}
        </div>
        <br />
        <Link to={'/cadastro'}>Cadastrar Novo Cliente</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.cadastroReducer,
});

export default connect(mapStateToProps)(Clientes);