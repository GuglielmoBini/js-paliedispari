/*
Pari e Dispari

- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri.
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
- Dichiariamo chi ha vinto.
*/

// ---------------------------------------------------------------

/* STEP
1- prendo gli elementi dal DOM
2- creo event listener al bottone
3- creo una funzione che generi un numero random da 1 a 5
4- sommo i numeri
5- creo una funzione che stabilisca se la somma dei due numeri è pari o dispari
6- dichiaro chi ha vinto
7- stampo in pagina
*/

// ---------------------------------------------------------------

// prendo gli elementi dal DOM
const targetElement = document.getElementById("target");
const choose = document.getElementById("choose");
const number = document.getElementById("number");
const cpuNumber = document.getElementById("cpu-number");
const submitButton = document.getElementById("submit");

//creo event listener al bottone

submitButton.addEventListener("click", function () {
  const userChoose = choose.value.trim();
  const userNumber = number.value.trim();
  console.log(userChoose, userNumber);
});

// creo una funzione che generi un numero random da 1 a 5
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return randomNumber;
}
