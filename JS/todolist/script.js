/*
PUNTATORI 
*/

// Casella di input per aggiungere una task
const inputTask = document.getElementById("nuovaTask");
// Tasto per aggiungere una task da completare
const aggiungiBtn = document.getElementById("aggiungiBtn");
// Bottone per rimuovere le task completate 
const rimuoviBtn = document.getElementById("rimuoviBtn");
// Lista delle task su schermo
const toDoList = document.getElementById("toDoList");


/*
TASK INIZIALI PRESENTI 
*/

const todos = [
    { cosa: "Studiare JavaSpritz", fatto: false },
    { cosa: "Smettere di lavorare", fatto: false },
    { cosa: "Fare la spesa", fatto: true },
    { cosa: "Dare da mangiare a Grooth", fatto: false },
]; 

// Questa funzione stampa tutte le todo che stanno dentro l'array "todos"
function mostraToDo() {
    // Pulisce la lista
    toDoList.innerText = ""; 

    // Stampa ogni toDo già presente
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.cosa;
        // Se una è completata, aggiungo la classe completata
        li.className = todo.fatto ? 'text-emerald-400 font-semibold underline' : '';
        li.addEventListener('click', () => toggleFatto(index))
        // li.addEventListener('click', () => li.classList.add("line-through"))
        toDoList.appendChild(li);
    })
}

// Questa funzione toggla il valore di "fatto" di una todo
function toggleFatto(index) {
    todos[index].fatto = !todos[index].fatto;
    console.log(todos[index]);
    mostraToDo();
}


// Questa funzione aggiunge una todo alla lista
function aggiungiToDo(){
    const nuovaToDo = inputTask.value.trim();
    // Controllo se la task è vuota, altrimenti pusho in array
    if (nuovaToDo !== '') {
        todos.push({ cosa: nuovaToDo, fatto: false })
        // Pulisco la casella di input
        inputTask.value = '';
        mostraToDo();
    } else {
        console.log("ERRORE: Inserisci una todo");
    }
}

// Questa funzione rimuove le todo dalla lista 
function rimuoviToDo() {
    // Genero un nuovo array che comprende solo le task che hanno fatto = false; 
    const todoAncoraDaCompletare = todos.filter(todo => !todo.fatto)
    // Cancello l'array originale
    todos.length = 0; 
    // Pusho nell'array originale (che ora è vuoto) tutte le task non completate 
    todos.push(...todoAncoraDaCompletare)
    // Stampo nuovamente il template
    mostraToDo();
}


// Chiamo la funzione per stampare le todo
mostraToDo();


// Event Listener
aggiungiBtn.addEventListener('click', aggiungiToDo); 
rimuoviBtn.addEventListener('click', rimuoviToDo); 
