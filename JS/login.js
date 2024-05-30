/**
 *
 * DATI INIZIALI
 *
 */

let utente = {
  // Definisco l'oggetto "utente" iniziale
  username: "admin",
  password: "0000",
  saldo: 0,
};

let programmaAcceso = true; // Variabile booleana che gestisce il funzionamento del prog.
let tentativi = 0; // Variabile che tiene il conto dei tentativi sbagliati

// INIZIO DEL PROGRAMMA

while (programmaAcceso === true) {
  console.log("Benvenut*!");

  // Chiedo all'utente username e password!
  let inputUsername = prompt("Inserisci il tuo username");
  let inputPassword = prompt("Inserisci la tua password");

  // Confronto gli input dell'utente con i dati dell'oggetto utente.
  if (inputUsername === utente.username && inputPassword === utente.password) {
    // L'utente ha inserito dati corretti
    console.log("Benvenuto " + utente.username + "!");

    /**
     *
     * Se utente riesce a loggarsi, chiedo che operazione devo fare
     * 1 - Visualizza saldo
     * 2 - Deposita denaro
     * 3 - Ritira denaro
     * 4 - Esci
     *
     */

    let menuInternoAcceso = true;
    while (menuInternoAcceso === true) {
      // Chiedo il numero per l'operazione da eseguire
      let sceltaOperazione = prompt(
        "Scegli 1 per visualizzare saldo, 2 per depositare, 3 per ritirare o 4 per uscire"
      );

      if (sceltaOperazione === "1") {
        console.log("Il tuo saldo attuale è pari a: " + utente.saldo);
      } else if (sceltaOperazione === "2") {
        // Chiedo quanto vuole depositare
        let sommaDaDepositare = parseInt(prompt("Quanto vuoi depositare?"));
        utente.saldo = utente.saldo + sommaDaDepositare;
        console.log(
          `Ok, hai depositato ${sommaDaDepositare}. Adesso hai in totale ${utente.saldo}`
        );
      } else if (sceltaOperazione === "3") {
        // Chiedo quanto vuole ritirare
        let sommaDaRitirare = parseInt(prompt("Quanto vuoi ritirare?"));
        // Controllo se ho abbastanza soldi
        if (utente.saldo >= sommaDaRitirare) {
          utente.saldo = utente.saldo - sommaDaRitirare;
          console.log(
            `Ok, hai ritirato ${sommaDaRitirare}. Adesso hai in totale ${utente.saldo}`
          );
        } else {
          console.log(
            "Errore: non hai abbastanza soldi per effettuare l'operazione"
          );
        }
      } else if (sceltaOperazione === "4") {
        programmaAcceso = false;
        menuInternoAcceso = false;
      } else {
        console.log(
          "Errore: Scegli 1 per visualizzare saldo, 2 per depositare, 3 per ritirare o 4 per uscire"
        );
      }
    }
  } else {
    tentativi++;
    // Controllo se buttare fuori l'utente in caso di tentativi max raggiunti
    if (tentativi === 4) {
      console.log("Mi spiace, tentativi massimi raggiunti. Arrivederci!");
      programmaAcceso = false;
    }
  }
}
