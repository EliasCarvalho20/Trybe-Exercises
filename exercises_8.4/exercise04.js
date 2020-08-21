const assert = require('assert');

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
];

const [...persons] = people;
const filteredPeople = [];

for (p of persons) {
  const { _, bornIn, nationality } = p;
  if (nationality === "Australian" && bornIn < 2000) {
    filteredPeople.push(p);
  }
}

assert.deepEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" });
assert.deepEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" });