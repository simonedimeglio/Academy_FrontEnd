/**
 * * Gli eventi in JS
 * 
 * ! ADD EVENT LISTENER -> addEventListener(evento, funzione())
 * ! REMOVE EVENT LISTENER -> removeEventListener(evento, funzione())
 * 
 * 1) click
 * 2) double click -> dblclick
 * 3) mouse -> mouseover, mouseout
 * 3) tastiera -> keydown, keyup
 * 4) form -> submit, input, change
 * 5) finestra -> scroll, resize
 * 6) caricamento -> load, DOMContentLoaded
 * 7) drag -> drag .. 
 * 
 */


// ? CLICK
// const cliccami = document.getElementById("cliccami");
// cliccami.addEventListener("click", () => {
//     console.log("Ho cliccato")
// })

// ? DBLCLICK
// cliccami.addEventListener("dblclick", () => {
//     console.log("Ho Double-cliccato");
// })

// ? MOUSEOVER
// const box = document.getElementById("box");
// box.addEventListener("mouseover", () => {
//     console.log("Sono in hover");
// })

// ? MOUSEOUT
// box.addEventListener("mouseout", () => {
//     console.log("Sono fuori da hover");
// })

// ? KEYDOWN 
// document.addEventListener("keydown", (evento) => {
//     console.log(`Ho premuto il tasto ${evento.key}`)
// })

// document.addEventListener("keyup", (evento) => {
//     console.log(`Ho lasciato il tasto ${evento.key}`)
// })

// ? RESIZE
// window.addEventListener("resize", () => {
//     console.log("Sto ridimensionando la finestra");
// })

// ? SCROLL
// window.addEventListener("scroll", () => {
//     console.log("Sto scrollando la pagina", window.scrollY);
// })