{
}

// VARIABILI -> LET & VAR

// Dichiarare
let variabile;

// Assegnare
variabile = 3;

// Inizializzazione
let nome = "Simone";

/**
 * Var: Può essere riassegnata e ridichiarata nello stesso "scope" senza errori!
 * Var: HOISTING - Può essere utilizzata prima della sua dichiarazione ma il suo valore sarà undefined
 */

console.log(banana);
var banana = 3;

// var a = 5;
// var a = 10;
// console.log(a);

/**
 * Let: Può essere riassegnata ma non può essere ridichiarata nello stesso "scope"
 */

let b = 10;

b = 20;
console.log(b);

// console.log(cosaNascosta);
console.log(b);

// SCOPE -> visibilità

if (true) {
  var x = "Simone";
  let y = "Ciao";
}

let y = "Benvenuti";

console.log(x);
console.log(y);

// Costante ? Obbligatoria Inizializzazione!
const costante = 3;

// TIPI DI DATI
let numeroIntero = -123; // Number (Integer)
console.log(typeof numeroIntero);
let numeroDecimale = 39.2; // Number (Float)
console.log(typeof numeroDecimale);

let nomeCompleto = "Simone Di Meglio";

let apiceDoppio = "Era l'ora"; // String
console.log(typeof apiceDoppio);
let apiceSingolo = "E"; // String
console.log(typeof apiceSingolo);
let backtick = `ciao ${nomeCompleto}`; // String
console.log(backtick);
console.log(typeof backtick);

let vero = true; // Boolean
console.log(typeof vero);
let falso = false; // Boolean
console.log(typeof falso);

let persona = {
  nome: "Simone",
  cognome: "Di Meglio",
  età: 28,
  vivo: true,
};

console.log(typeof persona);

let array = ["a", "b", "c"]; // Array (PSA!)
console.log(typeof array);

let qualcosa;
console.log(typeof qualcosa);

let vuoto = null; // PSA!!!!!
console.log(typeof vuoto);

// OPERATORI
/**
 *
 * ARITMETICI
 * + somma
 * - sottrazione
 * * moltiplicazione
 * / divisione
 * ** esponente
 * ++ incremento (qualcosa aumenta di uno)
 * -- decremento (qualcosa diminuisce di uno)
 * % modulo (qualcosa diviso qualcos'altro che resto da?)
 *
 *
 * LOGICI -> risultato ? boolean!
 * && - AND (true se entrambi true)
 * || - OR (true se almeno uno è true)
 * != - DISUGUAGLIANZA (true se diversi)
 * ! - INVERTE (se true diventa false e viceversa)
 *
 * CONFRONTO -> risultato ? boolean!
 * > - maggiore
 * < - minore
 * >= - maggiore e uguale
 * <= - minore e uguale
 * == - uguaglianza (di valore)
 * === - uguaglianza stretta (di valore E di tipo)
 */

// IF STATEMENT
/**
 *
 * Il "blocco" IF ci permette di eseguire determinate operazioni se una o più condizioni
 * sono verificate.
 *
 * if (condizione) {
 *  // Blocco di codice da eseguire se condizione è true
 * }
 *
 * if (prima condizione) {
 *  // Blocco di codice da eseguire se prima condizione è true
 * } else if (seconda condizione) {
 *  // Blocco di codice da eseguire se seconda condizione è true
 * } ...
 *
 *
 * if (condizione) {
 *  // Blocco di codice da eseguire se condizione è true
 * } else {
 *  // Blocco di codice da eseguire se condizione è false
 * }
 */

let numero = 9;

if (numero % 3 === 0 && numero % 7 === 0) {
  console.log("Il numero è multiplo di 3 e di 7");
} else if (numero % 3 === 0) {
  console.log("Il numero è multiplo di 3");
} else if (numero % 7 === 0) {
  console.log("Il numero è multiplo di 7");
} else {
  console.log("Il numero non è multiplo di 3 o di 7");
}

/**
 *
 * CICLO FOR
 *
 * for (inizializzazione; condizione; incremento/decremento) {
 *  // Codice
 * }
 *
 *
 * INIZIALIZZAZIONE -> dobbiamo impostare una variabile di "contatore" all'inizio del ciclo
 * CONDIZIONE -> fino a che è true, il ciclo continua. Il ciclo finisce quando condizione è false
 * INCREMENTO/DECREMENTO -> modifica del "contatore"
 *
 *
 * PASSAGGI CHE ESEGUE IL FOR???
 * // 1) Inizializzazione: guardo il valore della i
 * // 2) Controllo la condizione: se è vera, eseguo l'operazione all'interno del for
 * // 3) Eseguo l'operazione all'interno del for
 * // 4) Incremento o decremento
 *
 */

// For con incremento
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// For con decremento
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// For su array
let lista = [10, 34, 64, 79, 12, 4, 43];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
