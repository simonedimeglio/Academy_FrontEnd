/**
 *  IF STATEMENT
 *  Usiamo IF quando vogliamo eseguire un blocco di codice se una data condizione si verifica
 *
 *  if(condizione){
 *      // Blocco di codice da eseguire se "condizione" è true
 *  }
 *
 *  if(condizione){
 *      // Blocco di codice da eseguire se "condizione" è true
 *  } else if(altraCondizione){
 *      // Blocco di codice da eseguire se "altraCondizione" è true
 *  }
 *
 *  if(condizione){
 *      // Blocco di codice da eseguire se "condizione" è true
 *  } else {
 *      // Blocco di codice da eseguire se "condizione" è false
 *  }
 */

let età = 18;

if (età >= 18) {
  console.log("Sei maggiorenne, puoi entrare");
} else if (età > 0 && età < 18) {
  console.log("Sei minorenne, puoi entrare");
} else {
  console.log("Errore");
}

/**
 *
 *  WHILE
 *
 *  Esegue un blocco di codice fino a che la condizione che specifichiamo è true.
 *  NB: attenzione ai loop!
 *
 *  while(condizione){
 *      // Blocco di codice da eseguire fino a che "condizione" è true
 *  }
 */

let inizio = 1;
while (inizio <= 10) {
  console.log(inizio);
  inizio++;
}

/**
 *
 *  DO WHILE
 *
 *  Molto molto moolto simile al while, ma con una grande differenza.
 *  Do While esegue il codice ALMENO una volta.
 *
 *  do {
 *      // Blocco di codice da eseguire
 *  } while (condizione);
 *
 *
 */

// ESEMPIO 1
let altroInizio = 1;
do {
  console.log(altroInizio);
  altroInizio++;
} while (altroInizio <= 10);

// ESEMPIO 2
let random;
do {
  random = Math.random();
  console.log(random);
} while (random <= 0.5);

/**
 * ES6
 *
 * SWITCH AKA l'if dei pro player
 *
 * Esegue operazioni diverse in base al valore di una espressione da valutare
 *
 * switch (espressione) {
 *  case valore1:
 *      // Blocco di codice da eseguire se espressione è uguale a valore1
 *      break;
 *  case valore2:
 *      // Blocco di codice da eseguire se espressione è uguale a valore2
 *      break;
 *  case ...
 *
 *  default:
 *      // Blocco di codice da eseguire se espressione non è uguale a NESSUN valore
 *  }
 *
 */

let azione = "accendi";

switch (azione) {
  case "accendi":
    console.log("windows 98, benvenuto");
    break;
  case "spegni":
    console.log("buonanotte, mi spengo");
    break;
  case "riavvia":
    console.log("Ok, riavvio il sistema");
    break;
  default:
    console.log("Non ho capito");
}

let giorno = 1;
let flag = false; 

switch (giorno) {
  case 1:
    if (flag === true) {
        console.log("Lunedì");
    } else {
        console.log("primo giorno della settimana");
    }
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Non è un giorno della settimana");
}


