function Character(personagem, origem, nota) {
  this.personagem = personagem;
  this.origem = origem;
  this.nota = nota;
}

let info = new Character("Margarida", "Pato Donald",
  "Namorada do personagem principal nos quadrinhos do Pato Donald");

let info2 = new Character("Tio Patinhas",
  "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  "O último MacPatinhas");

console.log(`Bem vinda, ${info.personagem}\n`);

info["recorrente"] = "Sim";
info2["recorrente"] = "Sim";

for (key in info) {
  if (key != "recorrente") {
    console.log(`${info[key]} e ${info2[key]}`)
  }
  else {
    console.log("Ambos recorrentes")
  }
}
