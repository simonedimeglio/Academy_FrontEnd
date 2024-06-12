const dbAutomobili = [
    { brand: "Fiat", modello: "Panda 4x4", anno: 1945 },
    { brand: "Piaggio", modello: "Apecar", anno: 1950 },
    { brand: "Ford", modello: "Focus", anno: 2007 },
    { brand: "Audi", modello: "A1", anno: 2011 },
    { brand: "BMW", modello: "X3", anno: 2016 },
    { brand: "Mercedes", modello: "Classe A", anno: 2020 },
    { brand: "Tesla", modello: "Model D", anno: 2023 },
    { brand: "Ferrari", modello: "Banana", anno: 2024 },
]

// Puntatore
const pulsanteRicerca = document.getElementById("ricerca");
const inputBrand = document.getElementById("brand");
const inputModello = document.getElementById("modello");
const ulStampa = document.getElementById("risultati");


