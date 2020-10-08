import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se ele contém o texto "Adicionar"', () => {
    const {getByText} = render(<App />);
    const btnAdc = getByText('Adicionar');

    expect(btnAdc).toBeInTheDocument();
    expect(btnAdc.type).toBe('button');
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
    const inputTodo = getByLabelText('Tarefa:');
    const btnAdc = queryByText('Adicionar'); 
    const toDo = 'Ler Livros';

    expect(inputTodo).toBeInTheDocument();
    expect(inputTodo).toHaveTextContent('');
  
    fireEvent.change(inputTodo, { target: { value: toDo } });
    fireEvent.click(btnAdc);

    const liElement = queryByText(toDo);
    expect(liElement).toBeInTheDocument();
    expect(liElement).toHaveTextContent(toDo);
  });
});
