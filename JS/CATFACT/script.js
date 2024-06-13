/**
{
    "fact": "Sir Isaac Newton is credited with creating the concept for the pet door that many cats use today to travel outdoors.",
    "length": 116
}
*/

const bottone = document.getElementById("cliccaPerFattoSuiGatti");
const contenitore = document.getElementById("lettiera")

async function fetchAiGatti() {
    console.log("Ciao")
    try {
        // Fetch
        const response = await fetch("https://catfact.ninja/fact")

        // Controllo se tutto ok 
        if (!response.ok) {
            throw new Error("Errore!")
        }

        // Trasformo la risposta in json 
        const fattoSuiGatti = await response.json();

        // Stampo in pagina il fatto 
        contenitore.textContent = fattoSuiGatti.fact

    } catch (error) {
        console.error(error);
    }
}

bottone.addEventListener('click', fetchAiGatti);
