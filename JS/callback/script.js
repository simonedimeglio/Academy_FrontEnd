/**
 * PROGRAMMAZIONE ASINCRONA
 * CALLBACK:
 * 
 * Sono funzioni che vengono passate come argomento ad altre funzioni
 * 
 * Queste callback vengono usate per gestire operazioni asincrone. 
 * 
 * Permettono al codice di continuare a funzionare correttamente mentre si attende una operazione da completare
 * 
 */

// ESEMPIO 1
// function saluta(){
//     console.log("Ciao")
// }

// setTimeout(saluta, 10);
// console.log("Inizio");


// ESEMPIO 2
// function somma(numero1, numero2, banana) {
//     const risultato = numero1 + numero2; 
//     banana(risultato);
// }

// function stampaSomma(risultato){
//     console.log(`La somma richiesta è ${risultato}`);
// }

// somma(3, 2, stampaSomma);


function chiamataADb(funzioneCheStamperà){
    console.log("Inizio la chiamata al DB ...");

    setTimeout(() => {
        const dati = { username: "Simone", password: 1234 }
        funzioneCheStamperà(dati)
    }, 3500);
}

function stampaDati(dati){
    console.log(`Username: ${dati.username} - Password: ${dati.password}`);
}

chiamataADb(stampaDati);








