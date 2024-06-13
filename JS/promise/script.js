// let promessa = new Promise((resolve, reject) => {
//   // Simulo una operazione
//   let successo = false;

//   if (successo) {
//     resolve({dati: 'utente1'});
//     // resolve -> operazione ha successo
//   } else {
//     reject("Fetch non eseguita");
//     // reject -> operazione senza successo
//   }
// });

// promessa
//   // THEN -> Gestisce la fase di successo ovvero resolve!
//   .then((dati) => {
//     console.log(dati);
//   })
//   // CATCH -> Gestisce la fase di errore ovvero reject!
//   .catch((errore) => {
//     console.error("Errore:", errore);
//   });






function chiamataDb(url) {
    return new Promise((resolve, reject) => {
        console.log("Inizio la richiesta all'endpoint", url);


        setTimeout(() => {
            if (url === 'https://jsonplaceholder.com/users') {
                resolve({dati: 'utente 1'})
            } else {
                reject('Errore: url non valido, inserisci endpoint corretto')
            }
        }, 3000);
    })
}




chiamataDb('https://jsonplaceholder.com/userfd')
    .then((risposta) => {
        console.log(risposta.dati);
    })
    .catch((errore) => {
        console.error(errore);
    })


console.log("Richiesta partita, vediamo quanto ci mette..........")










