import lazyCoder from './lazy_coder.js';

const ESTADOS = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
  "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC",
  "SE", "SP", "TO"];

const CAMPOS = {
  0: 'Nome: ',
  1: 'E-mail: ',
  2: 'CPF: ',
  3: 'Endereço: ',
  4: 'Cidade: ',
  5: 'Estado: ',
  6: 'Tipo de residência: ',
  7: 'Resumo do currículo: ',
  8: 'Cargo: ',
  9: 'Descrição do cargo:  ',
  10: 'Data de início: ',
};

const selElement = lazyCoder(0, '#estado');
let inputValue = [];

ESTADOS.forEach((e) => {
  selElement.
    appendChild(lazyCoder(2, 'option')).
    innerHTML = e;
});

function getAllInput(clear) {
  inputValue = [];

  for (const value of Object.values(lazyCoder(1, 'input'))) {
    if (clear) {
      if (value.type === 'radio') {
        if (value.checked === true) {
          value.checked = false;
        }
      } else {
        value.value = '';
      }
      continue;
    }
    if (value.type === 'radio') {
      if (value.checked === true) {
        inputValue.push(value.value);
      }
    } else {
      inputValue.push(value.value);
    }
  }

  for (const value of Object.values(lazyCoder(1, 'textarea'))) {
    if (clear) {
      value.value = '';
    } else {
      inputValue.push(value.value);
    }
  }

  if (clear) {
    lazyCoder(0, 'select').selectedIndex = 0;
  } else {
    inputValue.splice(5, 0, lazyCoder(0, 'select').selectedOptions[0].value);
  }
}

function printToDiv() {
  inputValue.forEach((element, index) => {
    lazyCoder(0, '.output').
      innerHTML += `${CAMPOS[index]} ${element}<br>`;
  });
}

function clearDiv() {
  lazyCoder(0, '.output').innerHTML = '';
}

lazyCoder(0, '.btn-enviar').addEventListener('click', (e) => {
  e.preventDefault();

  getAllInput(false);
  clearDiv();
  printToDiv();
});

lazyCoder(0, '.btn-limpar').addEventListener('click', (e) => {
  getAllInput(true);
  clearDiv();
});

const METHODS = {
  0: 'querySelector',
  1: 'querySelectorAll',
  2: 'createElement',
};
