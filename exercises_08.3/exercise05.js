const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce((count, name) => (
    count + name.toLowerCase().split('a').length - 1
  ), 0);
}

assert.deepEqual(containsA(), 20);
