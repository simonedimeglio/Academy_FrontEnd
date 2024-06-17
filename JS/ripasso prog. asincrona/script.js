// PROMISE - Ripasso

/**
 *
 * Ci permettono di gestire la programmazione asincrona. Una promise può trovarsi in uno di questi stati:
 *
 * 1 - Pending = in attesa = promise in corso ma ancora non abbiamo il risultato
 * 2 - Fulfilled = risolta = operazione completata con successo -> la promise ha un valore
 * 3 - Rejected = rifiutata = operazione asincrona fallita
 *
 * Si divide in due step
 * 1° - Creazione di una promise
 * 2° - Utilizzo della promise
 *
 *
 * Nel caso di resolve, passa i dati a .then
 * Nel caso di reject, passa i dati a .catch
 *
 */

// CREO UNA PROMISE
const esempio = new Promise((resolve, reject) => {
  // OP. ASINCRONA
  setTimeout(() => {
    let flag = true;

    if (flag) {
      resolve("Operazione andata a buon fine");
    } else {
      reject("Ops, operazione fallita");
    }
  }, 3500);
});

esempio
  .then((messaggio) => {
    console.log("OK:", messaggio);
  })
  .catch((errore) => {
    console.log("ERRORE;", errore);
  });

// ---------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Se errore:
    if (!response.ok) {
      throw new Error("Errore!");
    }

    return response.json();
  })
  .then((data) => {
    console.log("Dati ricevuti", data);
  })
  .catch((errore) => {
    console.error("Errore", errore);
  });

/**
 *
 * ASYNC - AWAIT
 *
 * Coppia di keywords create ad hoc per gestire la programmazione asincrona
 *
 * ASYNC -> funzione che prevede del codice asincrono
 * AWAIT -> operazione che riguarda del codice asincrono
 *
 *
 */

async function chiamataAiPost() {
    try {
        const risposta = await fetch ("https://jsonplaceholder.typicode.com/posts");

        if (!risposta.ok) {
            throw new Error("Errore!");
          }

        const listaPosts = await risposta.json(); 

        console.log("Dati ricevuti", listaPosts);


    } catch(errore) {
        console.error("Errore:", errore)
    }
}

chiamataAiPost(); 