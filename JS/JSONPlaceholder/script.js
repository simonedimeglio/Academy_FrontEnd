// Puntatori

// Lista degli utenti
const listaUtenti = document.getElementById("listaUtenti");
// Endpoint da utilizzare nella fetch
const url = 'https://jsonplaceholder.typicode.com/users';


function generaLi(utente) {
    const li = document.createElement('li');
    li.textContent = `User: ${utente.name} - Email:  ${utente.email}`;
    return li; 
}

// PRIMO MODO
function fetchUtenti() {
    fetch(url)
        .then(risposta => {
            if (!risposta.ok) {
                throw new Error('Errore');
            }
            return risposta.json();
        })
        .then(utenti => {
            utenti.forEach(utente => {
                const listItem = generaLi(utente);
                listaUtenti.appendChild(listItem);
            })
        })
        .catch(errore => {
            console.error("ERRORE", errore);
        })
}


// SECONDO MODO 
async function fetchUtenti(){
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Errore'); 
        }
        const utenti = await response.json();

        utenti.forEach(utente => {
            const stampa = generaLi(utente);
            listaUtenti.appendChild(stampa);
        })
    } catch (errore) {
        console.error(errore);
    }   


}

fetchUtenti();