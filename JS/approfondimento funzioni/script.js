// TIPI DI FUNZIONE 


// 1) FUNZIONE DICHIARATA 
function saluta() {
    console.log("Ciao!");
}

saluta(); 




// 2) FUNZIONI ESPRESSE 
const salutaTutti = function() {
    console.log("Ciao a tutti!")
}

salutaTutti(); 



// 3) FUNZIONI FRECCIA (ARROW FUNCTION)
const salutaMamma = () => {
    console.log("Ciao Mamma");
}

salutaMamma();






// IIFE - Immediately Invoked Function Expression
(function() {
    console.log("Funzion Patrick")
})(); 