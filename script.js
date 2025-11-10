const fs = require("fs");
const filepath = "data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);

// Etape 1 : Vérifier que data à bien un type object
console.log(typeof data);

// Etape 2 : Affiche dans la console, le premier objet du tableau d’objets
const firstObject = data[0];
console.log(firstObject);

// Etape 3 : Afficher dans la console le nombre d’objets contenu dans le tableau
const dataLength = data.length;
console.log(dataLength);

// Etape 4 : Afficher dans la console, les informations de la candidate arrivée au 4e rang
function candidateRankingFour() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].ranking === 4) {
      console.log(data[i]);
    }
  }
}
candidateRankingFour();

// Etape 5 : Afficher dans la console l’âge moyen des candidates

// const ages = Array.from();

// console.log(ages);

// const moyenneAge = ages / dataLength;
// console.log(moyenneAge);
candidatesAges = [];

for (let i = 0; i < data.length; i++) {
  candidatesAges.push(data[i].age);
}

const sumWithInitial = candidatesAges.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const moyenneAge = sumWithInitial / dataLength;

console.log(moyenneAge);
