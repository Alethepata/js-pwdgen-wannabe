/*
1. Salvare in 3 variabili il prompt dell'inserimento di: nome, cognome e colore preferito.
2. Creare la stringa del messaggio.
3. Effettuare l'innerHTML del messaggio nel tag span.
*/ 
const content = document.getElementById('text');

const name = prompt('Il tuo nome?');
const surname = prompt('Il tuo cognome');
const color = prompt('Il tuo colore preferito?');

const password = 'La tua password è ' + name + surname + color + 23;

content.innerHTML = password;
