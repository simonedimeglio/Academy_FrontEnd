const form = document.getElementById("formDiLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errore = document.getElementById("messaggioErrore");

const nomeUtente = "Simone123";
const passwordUtente = "banana0000";

// EVENT LISTENER AL SUBMIT DEL FORM 
form.addEventListener("submit", function(event){
    // OBBLIGO: prevengo gli errori dei form (refresh pagina)
    event.preventDefault();

    if (username.value === nomeUtente && password.value === passwordUtente){
        window.location.href = "benvenuto.html"
    } else {
        errore.textContent = "Username o password errati"
    }


})