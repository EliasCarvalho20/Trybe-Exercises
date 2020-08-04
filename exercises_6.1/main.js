window.onload = () => {
  const METHODS = {
    0: 'querySelector',
    1: 'querySelectorAll',
    2: 'createElement',
  };

  function lazyCoder(keyMethod, tagName) {
    return document[`${METHODS[keyMethod]}`](tagName);
  }

  const estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
    "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC",
    "SE", "SP", "TO"];

  const selElement = lazyCoder(0, '#estado');

  estados.forEach((e) => {
    selElement.
      appendChild(lazyCoder(2, 'option')).
      innerHTML = e;
  });
};
