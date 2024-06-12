// SPREAD OPERATOR 

// ARRAY
// Copiare
// Espandere
// Unire
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let lista3 = [...lista1, ...lista2];

console.log(lista3);


// OGGETTI 
let persona1 = { nome: "Simone", età: 28}
let persona2 = { nome: "Simondasdfasdfe", etfaà: 28}
let persona3 = {...persona1, ...persona2}
console.log(persona3);




function sommaDiTreNumeri(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3;
}

let numeriDaSommare = [1000, 500, 13]; 
console.log(sommaDiTreNumeri(...numeriDaSommare));