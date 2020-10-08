import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];
    const { getByText, getByLabelText } = render(<App />);
    const inputTodo = getByLabelText('Tarefa:');
    const btnAdc = getByText('Adicionar');

    expect(inputTodo).toBeInTheDocument();
    expect(inputTodo).toHaveTextContent('');
    expect(btnAdc).toBeInTheDocument();
    expect(btnAdc.type).toBe('button');

    listTodo.forEach(item => {
      fireEvent.change(inputTodo, { target: { value: item } });
      fireEvent.click(btnAdc);
    });

    const liElement = listTodo.map(item => getByText(item));

    expect(liElement.length).toBe(3);
    liElement.forEach((element, index) => (
      expect(element).toHaveTextContent(listTodo[index])
    ));
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const string = 'I wish I knew';
    const { getByText } = render(<Item content={string} />);
    const divElement = getByText(string);

    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveTextContent(string);
  });
});
