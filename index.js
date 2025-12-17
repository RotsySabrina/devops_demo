const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function addition(a, b){
    return a + b;
}

const result = addition(2, 3);
console.log("Résultat :", result);

// route principale
app.get("/", (req, res) => {
  res.send(`Résultat de l'addition : ${result}`);
});

// démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur actif sur le port ${port}`);
});