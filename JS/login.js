let user1 = {
  username: "admin",
  password: "0000",
  saldo: 0,
};

console.log(user1.username);

// Se login riesce,
// -> stampiamo messaggio di benvenuto
// -> Gli chiediamo cosa vuole fare

// 1) Visualizza saldo (console.log(user1.saldo))
// 2) Deposita denaro -> quanto? -> aggiungiamo al saldo -> stampiamo saldo
// 3) Ritira denaro -> quanto? -> se è disponibile tutta la quantità richiesta, ok,
//    altrimenti richiedo.
// 4) Esce

// Se sbagli 3 volte l'accesso, ti butto fuori dal programma.

let tentativi = 0;
let flag = true;

while (flag === true) {
  let usernamePrompt = prompt("Iscrisci username");
  let passwordPrompt = prompt("Iscrisci password");

  if (usernamePrompt === user1.username && passwordPrompt === user1.password) {
    console.log("Benvenuto user1");
    flag = false;
  } else {
    console.log("Errore, username e/o password errate");
    tentativi++;
  }

  if (tentativi > 3) {
    console.log("Tentativi massimi raggiunti. Chiusura del programma");
    flag = false;
  }
}
