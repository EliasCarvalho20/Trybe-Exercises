import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      selected: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  removeTodo() {
    const { listTodo, selected } = this.state;
    const text = selected;
    let filteredArray = listTodo.filter(item => item !== text);

    this.setState({
      selected: '',
      listTodo: filteredArray,
    });
  }

  isSelected({ target }) {
    const value = target.innerText;
    this.setState({ selected: value });
  }

  render() {
    const { listTodo, selected } = this.state;
    return (
      <div className="App">
        <InputTodo
          selected={selected}
          addTodo={(todo) => this.addTodo(todo)}
          removeTodo={this.removeTodo}
        />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} isSelected={this.isSelected} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;
