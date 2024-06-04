function generaSceltaPc() {
  // Array di scelte
  const scelte = ["carta", "sasso", "forbice"];
  // Indice random dell'array di scelte
  const indiceRandomico = Math.floor(Math.random() * scelte.length);
  // Prendo la scelta casuale
  const sceltaCasuale = scelte[indiceRandomico];
  // Ritornare il valore
  return sceltaCasuale;
}

function chiVince(sceltaUtente, sceltaPc) {
  if (sceltaUtente === sceltaPc) {
    return `Pareggio: Hai scelto ${sceltaUtente} ed il pc ha scelto ${sceltaPc}`;
  } else if (
    (sceltaUtente === "carta" && sceltaPc === "sasso") ||
    (sceltaUtente === "sasso" && sceltaPc === "forbice") ||
    (sceltaUtente === "forbice" && sceltaPc === "carta")
  ) {
    return `Vittoria: Hai scelto ${sceltaUtente} ed il pc ha scelto ${sceltaPc}`;
  } else {
    return `Sconfitta: Hai scelto ${sceltaUtente} ed il pc ha scelto ${sceltaPc}`;
  }
}

function play() {
  const sceltaMia = prompt("Scegli tra carta, forbice o sasso").toLowerCase();
  const sceltaAvversarsio = generaSceltaPc();
  const risultatoFinale = chiVince(sceltaMia, sceltaAvversarsio);
  return risultatoFinale;
}

let primoPrompt = parseInt(prompt("1) Gioca\n2) Esci"));

if (primoPrompt === 1) {
  console.log(play());
}
