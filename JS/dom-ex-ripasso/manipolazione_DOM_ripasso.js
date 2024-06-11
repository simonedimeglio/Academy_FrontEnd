// Puntatori 
const input = document.getElementById("sconto");
const bottone = document.getElementById("calcola");
const container = document.getElementById("prezzoContainer");
const checkbox = document.getElementById("policy");
let prezzoIniziale = 10; 


function calcolaPrezzo() {

    if (checkbox.checked) {
        console.log("Ok");
        if (input.value === "SALDI50") {
            prezzoIniziale = prezzoIniziale / 2;
            console.log(prezzoIniziale);
            container.innerText = `COUPON APPLICATO: Spendi ${prezzoIniziale}`;
        } else if (input.value !== "SALDI50" && input.value !== ""){
            console.log(prezzoIniziale);
            container.innerText = `COUPON ERRATO: Spendi ${prezzoIniziale}`;
        } else {
            console.log(prezzoIniziale);
            container.innerText = `NESSUN COUPON INSERITO: Spendi ${prezzoIniziale}`;
        }
        input.value = "";
        checkbox.checked = false; 
    } else {
        container.innerText = `Devi prima accettare le policy`;
    }
}


bottone.addEventListener("click", calcolaPrezzo)