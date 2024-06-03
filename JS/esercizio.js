// 1) Generare il numero "magico" da 1 a 100
let numeroMagico = Math.floor(Math.random() * 100) + 1;
console.log(numeroMagico); 

// Cosa mi serve per memorizzare tentativi, punteggio e.. 
let tentativi = 0; // Ogni volta che inserisco un numero sbagliato, lo aumento di uno. 
let classifica = []; // Qua dentro salverò la classifica per tentativi 
let indovinato = false; // Variabile booleana che cambierò quando voglio uscire dal while

while (!indovinato){
   
    // Chiedo all'utente di inserire un numero
    let numeroUtente = parseInt(prompt("Indovina il numero estratto (Da 1 a 100)."))
    console.log(typeof numeroUtente);

    // Incremento di uno il tentativo 
    tentativi++; // tentativi = tentativi + 1;

    // Controllo se ha indovinato o ha sbagliato
    if (numeroUtente < numeroMagico){
        alert("Troppo basso! riprova!");
    } else if (numeroUtente > numeroMagico){
        alert("Troppo alto! riprova!");
    } else {
        if (tentativi > 1) {
            alert(`Hai indovinato! Hai impiegato ${tentativi} tentativi`)
        } else {
            alert(`Hai indovinato! Hai impiegato ${tentativi} solo tentativo, wow!`)
        }

        indovinato = true;

        // Aggiungo il punteggio alla classifica
        classifica.push(tentativi);
        // Ordino la classifica dal più basso numero di tentativi al più alto
        classifica.sort(function(a, b){return a - b});



        // for (let i = 0; i < classifica.length; i++) {
        //     console.log("Partita " + (i + 1) + ": Hai indovinato la parola in " + classifica[i] + " tentativi");
        // }

        
        // Creo il messaggio per stampare la classifica 
        let messaggioClassifica = "Ecco la classifica:\n";
        for (let i = 0; i < classifica.length; i++) {
            messaggioClassifica = messaggioClassifica + (i + 1) + ") " + classifica[i] + " tentativi\n";
        }

        alert(messaggioClassifica);


        // Resetto il numero magico
        numeroMagico = Math.floor(Math.random() * 100) + 1;
        // Resetto il numero di tentativi
        tentativi = 0;
        // "Riparto la partita"!
        indovinato = false; 
    }
}

