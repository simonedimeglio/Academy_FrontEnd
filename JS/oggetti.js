/*
INTRODUZIONE
OGGETTI: degli strumenti che ci permettono di memorizzare "collezioni" di dati e funzionalità
Sono composti da -> N coppie chiave: valore -> racchiuse dentro le parentesi graffe {}
This -> per fare riferimento a valori interni all'oggetto, devo usare (dentro l'oggetto)
la keyword "this" accostata alla chiave che sto puntando (es -> this.nome)

Gli oggetti possono avere dati associati o funzioni associate.

let oggetto = {
    chiave: valore,
    chiave: valore,
    chiave: valore,
    metodo: function() {
        console.log();
    }
}
*/

let nome = "Bob";

let persona = {
  nome: "Simone",
  cognome: "Di Meglio",
  età: 28,
  colore_preferito: "verde",
  ruolo: "Full Stack Developer",
  hobbies: ["fotografia", "videomaking", "coding", "running"],
  faiCompleanno: function () {
    this.età++;
  },
  cambiaIdeaSulColorePreferito: function () {
    this.colore_preferito = "marrone";
  },
};

persona.faiCompleanno();

console.log(persona.età);

persona.cambiaIdeaSulColorePreferito();

console.log(persona.colore_preferito);

/* 
FUNZIONI:
Cerchiamo di sfruttare la nostra conoscenza sulle funzioni per andare 
a modificare le proprietà di un oggetto. 
*/

let adesivo; 

let auto = {
  brand: "Piaggio",
  tipo: "Apecar",
  anno: 1997,
  km: 300000,
  abbassaKm: function (nuoviKm) {
    this.km = nuoviKm;
  },

  attaccaAdesivo: function (scrittaAdesivo) {
    this.adesivo = scrittaAdesivo;
  },
};

console.log(auto.km);

auto.abbassaKm(12000);

console.log(auto.km);

auto.attaccaAdesivo("Forza Napoli");

console.log(auto);
