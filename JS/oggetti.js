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

/*
METODI DEGLI OGGETTI 
1) KEYS -> Object.keys()
A che serve -> ad ottenere tutte le chiavi di un oggetto 
Parametri -> l'oggetto da cui voglimo estrarre le chiavi 
Return -> array di chiavi
NB: nell'array risultante, le chiavi sono espresse come typeof string

2) VALUES -> Object.values()
A che serve -> ad ottenere tutti i valori di un oggetto 
Parametri -> l'oggetto da cui voglimo estrarre i valori
Return -> array di valori

3) ENTRIES -> Object.entries()
A che serve -> ad ottenere tutte le coppie chiave: valore, di un oggetto 
Parametri -> l'oggetto da cui voglimo estrarre le proprietà
Return -> array di array di proprietà
NB: nell'array risultante, le chiavi sono espresse come typeof string
*/

let classe = {
    alunni: 30, 
    nome_classe: "3e"
}


let chiaviClasse = Object.keys(classe);
console.log(chiaviClasse);

let valoriClasse = Object.values(classe);
console.log(valoriClasse);

let proprietàClasse = Object.entries(classe);
console.log(proprietàClasse);



function controlloSeUguali(primoArray, secondoArray) {
    if (primoArray.length !== secondoArray.length) {
        return false;
    }
    for (let i = 0; i < primoArray.length; i++) {
        if (primoArray[i] !== secondoArray[i]) {
            return false;
        }
    }
    return true;
}