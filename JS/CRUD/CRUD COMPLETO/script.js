// PUNTATORI
const formUtente = document.getElementById("formUtente");
const listaUtenti = document.getElementById("listaUtenti");
// DATI
const API_URL = "https://jsonplaceholder.typicode.com/users"; // Endpoint JSONPlaceholder per fetch

let utenti = [];


// Funzione per fare fetch relativa a creazione di un utente al submit del form
formUtente.addEventListener("submit", async (e) => {
    e.preventDefault(); // Preveniamo il comportamento standard del form che prevede un refresh della pagina al submit (poichè dovrebbe inviare dei dati "da altre parti");
    const nome = document.getElementById('nome').value; // Prendo il valore dell'input per il nome
    const email = document.getElementById('email').value; // Prendo il valore dell'input per la mail
    const nuovoUtente = await creaUtente(nome, email); // Creo il nuovo utente tramite funzione che fa una POST
    utenti.push(nuovoUtente); // Pusho il nuovo utente nell'array attuale di utenti
    mostraUtenti(utenti); // Stampo gli utenti in pagina
    formUtente.reset(); // Pulisco gli input del form
});

// R - READ - (GET) - Funzione per fare fetch iniziale agli utenti da stampare in pagina
async function fetchUtenti() {
  try {
    // console.log("UTENTI prima della fetch", utenti);

    const risposta = await fetch(API_URL); // Faccio una GET all'API

    // Controllo se la risposta è ok, altrimenti genero un errore per andare nel blocco catch
    if (!risposta.ok) {
      throw new Error("Errore");
    }

    // Assegno all'array di utenti la risposta della chiamata, che sarà un array di oggetti (rappresentanti gli utenti)
    utenti = await risposta.json();
    // console.log("UTENTI dopo la fetch", utenti);

    // Chiamata alla funzione per stampare gli utenti in pagina
    mostraUtenti(utenti);
  } catch (errore) {
    console.error("ERRORE:", errore);
  }
}

// Funzione per la stampa degli utenti
// TODO : aggiungere metodi per modificare e cancellare
function mostraUtenti(arrayDiUtenti) {
  listaUtenti.innerHTML = "";

  utenti.forEach((utente) => {
    // Creo il LIST ITEM
    const elementoUtente = document.createElement("li");
    elementoUtente.classList.add("mb-2", "flex", "flex-col", "w-[300px]", "md:w-[500px]", "border-2", "mx-auto", "shadow-md", "p-4"); // Aggiungo margin-bottom
    elementoUtente.textContent = `${utente.name} - ${utente.email}`; // Popolo il contenuto

    // Creo il pulsante per ELIMINARE
    const pulsanteElimina = document.createElement("button");
    pulsanteElimina.textContent = "Elimina"; // Inserisco del testo nel pulsante
    pulsanteElimina.classList.add("my-2", "bg-red-500", "hover:bg-red-600",  "text-white", "p-2");
    // TODO: aggiungere event listener per funzione di cancellazione
    elementoUtente.appendChild(pulsanteElimina);

    // Creo il pulsante di MODIFICA
    const pulsanteModifica = document.createElement("button");
    pulsanteModifica.textContent = "Modifica"; // Inserisco del testo nel pulsante
    pulsanteModifica.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "p-2");

    // Ad ogni pulsante di modifica aggiungo un event listener che al click farà quanto segue:
    pulsanteModifica.addEventListener('click', () => {





        // // Inserisco il valore del nome e della mail dell'utente selezionato nel form in alto alla mia pagina
        // document.getElementById('nome').value = utente.name;
        // document.getElementById('email').value = utente.email;

        // // Se clicco sul pulsante nero del form ("Aggiungi utente")
        // formUtente.onsubmit = async (e) => {
        //     e.preventDefault();

        //     // Faccio la chiamata a JSONPlaceholder per aggiorare quell'utente
        //     const utenteAggiornato = await aggiornaUtente(utente.id, document.getElementById('nome').value, document.getElementById('email').value);
            
        //     const indiceUtente = utenti.findIndex(u => u.id === utente.id);
        //     utenti[indiceUtente] = utenteAggiornato;
        //     formUtente.onsubmit = gestisciSubmit;
        //     formUtente.reset();
        //     mostraUtenti(utenti);
        // }
    })



    elementoUtente.appendChild(pulsanteModifica);



    listaUtenti.appendChild(elementoUtente);
  });
}


// function gestisciSubmit(e) {
//     e.preventDefault();
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     creaUtente(nome, email).then(nuovoUtente => {
//         utenti.push(nuovoUtente);
//         mostraUtenti(utenti);
//         formUtente.reset();
//     })
// }


// C - CREATE - (POST) - Creazione di un utente
async function creaUtente(nome, email) {
    try {
        // Fetch all'endpoint per la creazione
        const risposta = await fetch(API_URL, {
            method: 'POST', // Specifico metodo POST che serve per creare
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nome, email: email}) // Passo il contenuto della comunicazione
        })

        // Nel caso di errore di comunicazione, genero un errore!
        if (!risposta.ok) {
            throw new Error("Errore")
        }

        // Ritorno l'oggetto appena creato
        return await risposta.json();

    } catch(error) {
        console.error("ERRORE", error);
    }
}

// U - UPDATE - (PUT) - Modifica di un utente
async function aggiornaUtente(id, nome, email) {
    try {
        const risposta = await fetch(`${API_URL}/${id}`, {
            method: 'PUT', // Specifico metodo PUT che serve per modificare
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nome, email: email}) // Passo il contenuto della comunicazione
        })

        // Nel caso di errore di comunicazione, genero un errore!
        if (!risposta.ok) {
            throw new Error("Errore")
        }

        // Ritorno l'oggetto appena creato
        return await risposta.json();
    } catch(error) {
        console.error("ERRORE:", error)
    }
}


// 1° Step: fetch per stampare gli utenti in pagina
fetchUtenti();
