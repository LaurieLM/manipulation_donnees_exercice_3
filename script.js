const fs = require("fs");
const filepath = "data.json";

const content = fs.readFileSync(filepath, { encoding: "utf8", flag: "r" });
const data = JSON.parse(content);
console.log(data);
