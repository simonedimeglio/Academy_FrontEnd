/*
SELEZIONARE GLI ELEMENTI

1) document.getElementById('id')
A che serve -> a selezionare UN SOLO elemento per il suo ID
Esempio -> const box = document.getElementById('box');

2) document.getElementsByClassName('classe'); 
A che serve -> a selezionare UNO o PIU' elementi in base alle classi
Esempio -> const ciaoElements = document.getElementsByClassName('ciao');

3) document.getElementsByTagName('div'); 
A che serve -> a selezionare UNO o PIU' elementi in base al tipo di tag
Esempio -> const divs = document.getElementsByTagName('div');

4) document.querySelector('div'); 
A che serve -> a selezionare il PRIMO elemento che corrisponde alla selezione
Esempio -> const title = document.querySelector('h1');

5) document.querySelectorAll('a'); 
A che serve -> a selezionare TUTTI gli elementi che corrispondo alla selezione
Esempio -> const links = document.querySelectorAll('a');

_________________________________________

ACCEDERE E MODIFICARE CONTENUTO DI ELEMENTI

1) elemento.textContent = 'testo da innestare'
console.log(elemento.textContent) -> vado a vedere il contenuto dell'elemento

2) elmento.innerHTML = '<div>Ciao</div>'
NB: DA EVITARE PER SICUREZZA (VEDI XSS ecc..)

Esempio:
const primoTitolo = document.getElementById('titolo');
console.log(primoTitolo.textContent);
primoTitolo.innerHTML = '<span class="text-red-400">No Maria io esco</span>';

_________________________________________

MANIPOLARE GLI ATTRIBUTI 

1) elemento.getAttribute('attributo') 
A che serve -> ottengo l'attributo specificato

2) elemento.setAttribute('attributo', 'valore') 
A che serve -> creo / modifico attributo dandogli il valore

3) elemento.removeAttribute('attributo') 
A che serve -> rimuovo l'attributo dall'elemento

Esempio:
const collegamento = document.getElementById("link");
console.log(collegamento.getAttribute('target'));
collegamento.setAttribute('class', 'text-red-500');
collegamento.removeAttribute('class')

_________________________________________

CREAZIONE, AGGIUNTA E RIMOZIONE DI ELEMENTI ALLA PAGINA 

1) document.createElement('elemento');
A che serve -> per creare un elemento (attenzione, deve essere poi popolato ed eventualmente aggiunto)

2) elemento.appendChild(elementoNuovo);
A che serve -> per aggiungere ad un contenitore "padre" l'elemento "figlio"

3) contenitore.removeChild(elemento);
A che serve -> a rimuovere l'elemento dalla pagina

const contenitore = document.getElementById('container');
const title = document.createElement('h3');
title.textContent = "Spongebob";
contenitore.appendChild(title);

_________________________________________

GESTIRE LO STILE CSS (VANILLA CSS)

1) elemento.style.proprietàCss = "valore";
NB: questo aggiunge l'attributo style all'elemento per aggiungere stile inline

const titolo = document.getElementById('titolo'); 
titolo.style.color = 'red';
titolo.style.border = '2px solid green';
titolo.style.marginBottom = '100px';

_________________________________________

GESTIRE LE CLASSI CSS (VANILLA & NON VANILLA)

1) elemento.classList.add('classe', 'altraClasse'); 
A che serve -> per aggiungere una o più classi all'elemento

2) elemento.classList.remove('classe'); 
A che serve -> per rimuovere una o più classi all'elemento

3) elemento.classList.toggle('classe');
A che serve -> per aggiungere (se non presente) una o più classi, o per rimuovere (se già presente) una o più classi

const titolo = document.getElementById('titolo'); 
titolo.classList.add('text-red-500', 'border-2');
titolo.classList.remove('border-2');
titolo.classList.toggle('text-red-500');


_________________________________________


EVENTI 

Gli eventi vengono gestiti in JavaScript tramite dei LISTENER

1) Click -> 'click'

- Associare un listener all'elemento desiderato


*/

const elementoDaCliccare = document.getElementById("box");

elementoDaCliccare.addEventListener('click', function() {
    elementoDaCliccare.classList.toggle('bg-blue-500');
    elementoDaCliccare.classList.toggle('bg-red-500');

})

