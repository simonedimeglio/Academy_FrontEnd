// ASYNC AWAIT 

/**
 * Async e await sono due keyword
 * 
 * async -> va aggiunta PRIMA di una funzione per dichiararla ASINCRONA 
 * questo significa che la funzione restituirà una Promise. 
 * 
 * 
 * await -> va utilizzata all'interno di una funzione asincrona per 
 * aspettare il completamento della promise
 */


// async function ottieneDatiDaDb(url) {
//     let risposta = await fetch(url);
//     console.log(risposta);
// }

// ottieneDatiDaDb('fasdfkasdkfapokdsf.com')



/**
 * 
 * FETCH -> funzione che fa richieste HTTP -> restituisce una PROMISE
 * 
 * fetch(endpoint)
 *  .then(response => response.json())
 *  .then(data => console.log(data))
 */




const url = 'https://jsonplaceholder.typicode.com/users';

async function ottieniUtenti() {
    // Faccio la richiesta all'endpoint (url) tramite fetch 
    const risposta = await fetch(url);

    if (risposta.ok) {
        // Converto la risposta in json 
        const utenti = await risposta.json();

        // Stampo in console i dati degli utenti 
        console.log(utenti);
    } else {
        console.log('ERRORE:', risposta.status)
    }
}

ottieniUtenti();







