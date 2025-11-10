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
