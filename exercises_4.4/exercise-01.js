let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas"
};

console.log(`Bem vinda, ${info.personagem}`);

info["recorrente"] = "Sim";
info2["recorrente"] = "Sim";
console.log(info);

for (key in info) {
  console.log("\n", key);
}

for (key in info) {
  console.log("\n", info[key], "\n",);
}

for (key in info) {
  if (key != "recorrente") {
    console.log(`${info[key]} e ${info2[key]}`)
  }
  else {
    console.log("Ambos recorrentes")
  }
}
