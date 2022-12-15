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
5- creo una funzione che stabilisca se la somma dei due numeri è pari
6- dichiaro chi ha vinto
7- stampo in pagina
*/

// ---------------------------------------------------------------

// prendo gli elementi dal DOM
const targetElement = document.getElementById("target");
const inputChoose = document.getElementById("choose");
const inputNumber = document.getElementById("number");
const cpuNumber = document.getElementById("cpu-number");
const submitButton = document.getElementById("submit");
const sumNumbers = document.getElementById("sum");

//creo event listener al bottone
submitButton.addEventListener("click", function () {
  // prendo i value degli input
  const userChoose = inputChoose.value;
  const userNumber = parseInt(inputNumber.value.trim());

  console.log(userChoose, userNumber);

  //preparo variabili d'appoggio
  let cpuRandomNumber = 0;
  let result = "Hai perso";
  let sum = 0;

  // validazione
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert("Devi inserire un numero tra 1 e 5!");
  } else if (!userChoose) {
    alert("Devi scegliere pari o dispari");
  } else {
    cpuRandomNumber = getRandomNumber(1, 5);

    console.log(cpuRandomNumber);

    // sommo i numeri
    sum = userNumber + cpuRandomNumber;

    console.log(sum);

    // dichiaro chi ha vinto
    if (
      (isEven(sum) && userChoose === "even") ||
      (!isEven(sum) && userChoose === "odd")
    ) {
      result = "Hai vinto!";
    }

    console.log(result);
  }
  // stampo in pagina
  cpuNumber.innerText = cpuRandomNumber;
  sumNumbers.innerText = sum;
  targetElement.innerText = result;
});

// --------FUNZIONI--------

// creo una funzione che generi un numero random da 1 a 5
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * max - min + 1) + min;
  return randomNumber;
}

// creo una funzione che stabilisca se la somma dei due numeri è pari

function isEven(number) {
  let isEven = false;
  if (number % 2 === 0) {
    isEven = true;
  }
  return isEven;
}
