// METODI SU ARRAY
let numeri = [1, 2, 3];

numeri[1];

/*
PUSH -> push()
A che serve -> aggiunge N elementi alla fine di un array
Parametro -> N elementi da aggiungere alla fine di un array.
Restiuisce -> la nuova lunghezza dell'array
*/

let avengers = ["Cap", "Thor", "Grooth"]; 

console.log(avengers);
console.log(avengers.length);

avengers.push("Iron Man", "Black Widow");

console.log(avengers);
console.log(avengers.length);


/* 
POP -> pop()
A che serve -> rimuove l'ultimo elemento di una lista
Parametro -> nada
Restituisce -> l'elemento rimosso dalla lista
*/

let utlimoAvenger = avengers.pop();
console.log(utlimoAvenger);
console.log(avengers);


/*
SHIFT -> shift()
A che serve -> rimuove il primo elemento di una lista
Parametro -> nada
Restituisce -> l'elemento rimosso dalla lista
*/

let primoAvenger = avengers.shift(); 
console.log(avengers);


/*
UNSHIFT -> unshift() 
A che serve -> aggiunge N elementi all'inizio della lista
Parametro -> N elementi da aggiungere all'inizio di un array.
Restituisce -> la nuova lunghezza della lista
*/

avengers.unshift('HuLK', "Pantera Nera", "Galdalf", "Spongebob");
console.log(avengers);



/*
SLICE -> slice()
A che serve -> ci fa ottenere una copia di N elementi da una lista 
Parametro -> indice da cui iniziare a tagliare, indice a cui arrivare (escludendolo)
Restituisce -> gli elementi "tagliati" dalla lista
NB -> non va a modificare l'array originale!
*/ 

let intrusi = avengers.slice(2, 4);
console.log(intrusi);
console.log(avengers);


/*
SPLICE -> splice()
A che serve -> ci permette di modificare una lista togliendo, sostituendo o aggiungendo N elementi
Parametri -> indice da dove iniziare la modifica, numero di elementi da rimuovere, OPZ. elementi da aggiungere+
Restituisce -> gli elementi rimossi dalla lista
*/

avengers.splice(2, 2, "Bob");
console.log(avengers);


/*
FOREACH -> forEach()
A che serve -> ci consente di eseguire N operazioni su ogni elemento dell'array
Pametri -> callback ... 
*/

avengers.forEach(function(avenger){
    console.log(avenger)
})


/*
MAP -> map()
A che serve -> crea una nuova lista che ritorna risultati della funzione che applica ad ogni elemento della lista
Parametri -> callback ... 
Return -> il nuovo array con gli elementi a cui è stata applicata la callback
NB: scrivere return! 
*/

let numbers = [1, 2, 3, 4, 5];
let numeriDoppi = numbers.map(function(numero){
    return numero * 2; 
})

console.log(numeriDoppi);


let avengersArrabbiati = avengers.map(function(avenger){
    return avenger.toUpperCase(); 
})  
console.log(avengers);
console.log(avengersArrabbiati);

/*
FILTER -> filter()
A che serve -> crea una nuova lista con tutti gli elementi che rispettano una condizione 
Parametri -> callback... 
Return -> la nuova lista con gli elementi che hanno superato il "test"
NB: scrivere return! 
*/
let numeriPari = numbers.filter(function(numero){
    return numero % 2 === 0;
})

console.log(numeriPari);

// FIND - INCLUDES - SORT - JOIN 

/*
FIND -> find()
A che serve -> restituire il primo elemento che soddisfa la mia richiesta (Se c'è, altrimenti undefined)
Parametri -> callback ...
Return -> (Se c'è) il primo elemento che soddisfa la condizione, altrimenti undefined
NB: scrivere return!
*/

let numeroRicercato = numbers.find(function(numero){
    return numero > 3
})

console.log(numeroRicercato);


/*
INCLUDES -> includes(); 
A che serve -> Se una lista contiene o meno un certo elemento
Parametri -> L'elemento che sto cercando, (OPZ.) l'indice da cui partire per iniziare a cercare
Return -> True se trovo l'elemento nella lista, False se non lo trovo
*/

console.log(avengers);

let esisteHulk = avengers.includes("HuLK"); 
console.log(esisteHulk);


/*
SORT -> sort(); 
A che serve -> per ordinare una lista
Parametri -> (OPZ.) la funzione che detta il confronto
Return -> 
*/
let nomi = ["marco", "luca", "barbara", "antonio"]

let altriNumeri = [10, 3, 2, 54, 22, 1, 345];


console.log(altriNumeri.sort(function(a, b){return b - a}));


/* JOIN -> joing()
A che serve -> unisce tutti gli elementi di una lista in una stringa
Parametri -> OPZ. un separatore
Return -> la stringa composta da tutti gli elementi originari della lista
NB: di default, se non inserite un separatore, js inserisce la virgola 
*/

let avengersUniti = avengers.join(" - ");
console.log(avengersUniti);