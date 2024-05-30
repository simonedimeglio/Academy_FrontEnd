// CARTA FORBICE SASSO

// Lista di scelte possibili
const scelte = ["carta", "forbice", "sasso"];

// Chiedo all'utente di inserire una scelta
const sceltaUtente = prompt("Inserisci carta, forbice o sasso");

// Indice casuale tra 0 e 2 (ovvero lunghezza dell'array di scelte)
const indiceCasuale = Math.floor(Math.random() * scelte.length);

// Genero una scelta casuale associando l'indice casuale all'array di scelte
const sceltaCasualeDelPc = scelte[indiceCasuale];
console.log(sceltaCasualeDelPc);

// Dobbiamo determinare il vincitore del match
let risultato;

console.log(sceltaUtente);
console.log(sceltaCasualeDelPc);
// IF PER VEDERE CHI VINCE
if (sceltaUtente === sceltaCasualeDelPc) {
  risultato = "Pareggio!";
} else if (
  (sceltaUtente === "carta" && sceltaCasualeDelPc === "sasso") ||
  (sceltaUtente === "sasso" && sceltaCasualeDelPc === "forbice") ||
  (sceltaUtente === "forbice" && sceltaCasualeDelPc === "carta")
) {
  risultato = "Ho vinto!";
} else {
  risultato = "Ho perso";
}

console.log(risultato);
