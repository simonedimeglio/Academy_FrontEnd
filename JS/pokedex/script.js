// Puntatore
const container = document.getElementById("pokemonContainer");


/**
 * 
 * Then
 * 
 */

const numeroCasuale = Math.floor(Math.random() * 1025) +1 ;
fetch(`https://pokeapi.co/api/v2/pokemon/${numeroCasuale}`)
    .then(response => response.json())
    .then(pokemon => {

        const h2 = document.createElement("h2");
        h2.innerText = `${pokemon.name}`;

        const img = document.createElement("img"); 
        img.src = `${pokemon.sprites.front_default}`;

        container.append(h2, img);
    })
    .catch(error => {
        console.error(error)
    }); 
        

/**
 * 
 * ASYNC AWAIT 
 * 
 */

async function ottieniPokemon() {
    // Faccio la richiesta all'endpoint tramite fetch 
    const risposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroCasuale}`);

    if (risposta.ok) {
        // Converto la risposta in json 
        const pokemon = await risposta.json();

        // Stampo in console i dati del pokemon
        console.log(pokemon);

        const h2 = document.createElement("h2");
        h2.innerText = `${pokemon.name}`;

        const img = document.createElement("img"); 
        img.src = `${pokemon.sprites.front_default}`;

        container.append(h2, img);
    } else {
        console.log('ERRORE:', risposta.status)
    }
}

ottieniPokemon();



// ESERCIZIO 1 -> aggiungo un bottone, ad ogni click su quel bottone 
// stampo un pokemon casuale


// ESERCIZIO 2 -> aggiungo un input testuale, al click sul pulsante 
// cerco il pokemon che abbia id o nome = input testuale